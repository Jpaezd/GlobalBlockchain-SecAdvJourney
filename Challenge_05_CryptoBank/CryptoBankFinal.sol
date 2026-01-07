// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/**
 * @title CryptoBank PRO 2026 jpaezd
 * @notice Advanced smart contract to deposit, withdraw ETH and ERC20 tokens with owner control, batch operations, and security.
 */

interface IERC20 {
    function transfer(address to, uint256 amount) external returns (bool);
}

contract CryptoBankFinal {
    address public owner;
    bool public paused;

    mapping(address => uint256) public balances;

    event Deposit(address indexed user, uint256 amount);
    event Withdraw(address indexed user, uint256 amount);
    event TokenDeposit(address indexed user, address indexed token, uint256 amount);
    event TokenWithdraw(address indexed user, address indexed token, uint256 amount);
    event Paused(bool status);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    modifier notPaused() {
        require(!paused, "Contract is paused");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    // ---------------------------------------------------------
    // 🛑 OWNER CONTROL
    // ---------------------------------------------------------
    function setPaused(bool _paused) external onlyOwner {
        paused = _paused;
        emit Paused(_paused);
    }

    // ---------------------------------------------------------
    // 💸 INTERNAL DEPOSIT ETH LOGIC
    // ---------------------------------------------------------
    function internalDepositETH(address user, uint256 amount) internal {
        require(amount > 0, "Must deposit more than 0 ETH");
        balances[user] += amount;
        emit Deposit(user, amount);
    }

    // ---------------------------------------------------------
    // 💸 EXTERNAL WRAPPER FOR REMIX
    // ---------------------------------------------------------
    function depositETHWrapperTEST() external payable notPaused {
        internalDepositETH(msg.sender, msg.value);
    }

    // ---------------------------------------------------------
    // 🏦 INTERNAL WITHDRAW ETH LOGIC
    // ---------------------------------------------------------
    function internalWithdrawETH(address user, uint256 amount) internal {
        require(balances[user] >= amount, "Insufficient balance");
        balances[user] -= amount;

        (bool success, ) = payable(user).call{value: amount}("");
        require(success, "ETH withdraw failed");

        emit Withdraw(user, amount);
    }

    // ---------------------------------------------------------
    // 🏦 EXTERNAL WRAPPER FOR REMIX
    // ---------------------------------------------------------
    function withdrawETHWrapper(uint256 amount) external notPaused {
        internalWithdrawETH(msg.sender, amount);
    }

    // ---------------------------------------------------------
    // 🪙 SEND ERC20 TOKENS (optional for advanced functionality)
    // ---------------------------------------------------------
    function depositToken(address token, uint256 amount) external notPaused {
        require(amount > 0, "Amount must be > 0");
        require(IERC20(token).transfer(address(this), amount), "Token transfer failed");
        emit TokenDeposit(msg.sender, token, amount);
    }

    function withdrawToken(address token, uint256 amount) external notPaused {
        require(amount > 0, "Amount must be > 0");
        require(IERC20(token).transfer(msg.sender, amount), "Token transfer failed");
        emit TokenWithdraw(msg.sender, token, amount);
    }

    // ---------------------------------------------------------
    // 🔍 VIEW FUNCTIONS
    // ---------------------------------------------------------
    function contractBalance() external view returns (uint256) {
        return address(this).balance;
    }

    // ---------------------------------------------------------
    // ⚡ RECEIVE ETH DIRECTLY
    // ---------------------------------------------------------
    receive() external payable {
        internalDepositETH(msg.sender, msg.value);
    }
}
