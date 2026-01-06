// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IERC20 {
    function transfer(address to, uint256 amount) external returns (bool);
}

contract SenderPro {
    address public owner;
    bool public paused;

    // Events
    event EthSent(address indexed to, uint256 amount);
    event TokenSent(address indexed token, address indexed to, uint256 amount);
    event Withdraw(address indexed owner, uint256 amount);
    event Paused(bool status);

    // Constructor
    constructor() {
        owner = msg.sender;
    }

    // Modifier: only owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    // Modifier: contract not paused
    modifier notPaused() {
        require(!paused, "Contract is paused");
        _;
    }

    // Pause / Unpause the contract
    function setPaused(bool _paused) external onlyOwner {
        paused = _paused;
        emit Paused(_paused);
    }

    // ---------------------------
    //     RECEIVE & FALLBACK
    // ---------------------------

    // Accept ETH sent directly
    receive() external payable {}

    // Accept calls with unknown calldata
    fallback() external payable {}

    // ---------------------------
    //       SINGLE SENDERS
    // ---------------------------

    // Send ETH to one address
    function sendETH(address payable _to) external payable notPaused {
        require(_to != address(0), "Invalid address");
        require(msg.value > 0, "Amount must be greater than 0"); // prevents sending 0 ETH

        (bool success, ) = _to.call{value: msg.value}("");
        require(success, "ETH transfer failed");

        emit EthSent(_to, msg.value);
    }

    // Send ERC20 tokens to one address
    function sendToken(
        address token,
        address to,
        uint256 amount
    ) external notPaused {
        require(token != address(0), "Invalid token");
        require(to != address(0), "Invalid recipient");
        require(amount > 0, "Amount must be greater than 0");

        bool success = IERC20(token).transfer(to, amount);
        require(success, "Token transfer failed");

        emit TokenSent(token, to, amount);
    }

    // ---------------------------
    //     MULTI-SEND FUNCTIONS
    // ---------------------------

    // Send ETH to multiple recipients
    function multiSendETH(
        address[] calldata _recipients,
        uint256[] calldata _amounts
    ) external payable notPaused {
        require(_recipients.length == _amounts.length, "Array size mismatch");

        uint256 total = 0;

        for (uint256 i = 0; i < _amounts.length; i++) {
            total += _amounts[i];
        }

        require(msg.value == total, "Incorrect ETH value sent");

        for (uint256 i = 0; i < _recipients.length; i++) {
            require(_recipients[i] != address(0), "Invalid address");

            (bool success, ) = _recipients[i].call{value: _amounts[i]}("");
            require(success, "ETH transfer failed");

            emit EthSent(_recipients[i], _amounts[i]);
        }
    }

    // Send ERC20 to multiple recipients
    function multiSendToken(
        address token,
        address[] calldata recipients,
        uint256[] calldata amounts
    ) external notPaused {
        require(token != address(0), "Invalid token");
        require(recipients.length == amounts.length, "Array size mismatch");

        IERC20 erc20 = IERC20(token);

        for (uint256 i = 0; i < recipients.length; i++) {
            require(recipients[i] != address(0), "Invalid address");

            bool success = erc20.transfer(recipients[i], amounts[i]);
            require(success, "Token transfer failed");

            emit TokenSent(token, recipients[i], amounts[i]);
        }
    }

    // ---------------------------
    //     BALANCE & WITHDRAW
    // ---------------------------

    // View contract ETH balance
    function contractBalance() external view returns (uint256) {
        return address(this).balance;
    }

    // Owner can withdraw ETH from contract
    function withdraw(uint256 amount) external onlyOwner {
        require(amount > 0, "Amount must be greater than 0");
        require(amount <= address(this).balance, "Insufficient contract balance");

        (bool success, ) = owner.call{value: amount}("");
        require(success, "Withdraw failed");

        emit Withdraw(owner, amount);
    }
}
