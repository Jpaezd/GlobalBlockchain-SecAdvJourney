// SPDX-License-Identifier: LGPL-3.0-only
pragma solidity 0.8.24;

/**
 * @title Sender
 * @notice This contract stores the address of the account that deploys it.
 * @dev Demonstrates how constructors work and how msg.sender is used at deployment.
 */
contract Sender {
    /// @notice Address of the contract deployer (initial owner)
    address public owner;

    /**
     * @notice Runs only once when the contract is deployed.
     * @dev Sets the owner to the address that deployed the contract.
     */
    constructor() {
        owner = msg.sender;
    }
}
