// SPDX-License-Identifier: LGPL-3.0-only
pragma solidity 0.8.24;

/**
 * --------------------------------------------------------------------
 * QUANTIA ($QTA) — Official Token
 * Author: jpaezd — Founder
 * Year: 2025
 *
 * Professional Features:
 * - ERC20 Standard Token
 * - ERC20Burnable: allows token burning
 * - ERC20Permit (EIP-2612): gasless approvals using signatures
 * - Pausable: emergency stop mechanism
 * - AccessControl: enterprise-grade role management
 *
 * Optimized for L2 networks such as Arbitrum One (low cost & high speed).
 * --------------------------------------------------------------------
 */

/// --------------------------------------------------------------------
/// IMPORTS
/// --------------------------------------------------------------------
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";


/// --------------------------------------------------------------------
/// MAIN CONTRACT
/// --------------------------------------------------------------------
/// QTA inherits multiple OpenZeppelin modules that extend functionality:
/// - ERC20: Standard token logic
/// - ERC20Permit: Gasless approvals (EIP-2612)
/// - ERC20Burnable: Allows tokens to be burned
/// - Pausable: Enables pausing transfers for security
/// - AccessControl: Role-based permission system
contract QTA is 
    ERC20,                 // Standard ERC20 token
    ERC20Permit,           // Gasless approvals (EIP-2612)
    ERC20Burnable,         // Allows burning QTA
    Pausable,              // Transfer pause mechanism
    AccessControl          // Role-based access system
{

    /// --------------------------------------------------------------------
    /// ROLE DEFINITIONS
    /// --------------------------------------------------------------------
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE"); // Can mint new tokens
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE"); // Can pause/unpause transfers


    /// --------------------------------------------------------------------
    /// PROJECT VARIABLES
    /// --------------------------------------------------------------------
    string public author;          // Public signature on chain (e.g., "jpaezd")
    bytes32 public authorHash;     // Hash of the author string (immutable proof)

    uint256 public constant INITIAL_SUPPLY = 100_000_000 * 1e18;  
    // Total supply: 100 million QTA with 18 decimals


    /// --------------------------------------------------------------------
    /// CONSTRUCTOR
    /// --------------------------------------------------------------------
    /**
     * @dev Executed once at deployment.
     * Responsibilities:
     * - Initializes token name/symbol
     * - Enables ERC20Permit
     * - Assigns AccessControl roles
     * - Mints initial supply to deployer
     * - Stores author's signature on chain
     */
    constructor()
        ERC20("Quantia Token", "QTA")
        ERC20Permit("Quantia Token")
    {
        /// Assign full admin privileges to deployer
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);

        /// Assign minting and pause roles
        _grantRole(MINTER_ROLE, msg.sender);
        _grantRole(PAUSER_ROLE, msg.sender);

        /// Mint 100M QTA to deployer's wallet
        _mint(msg.sender, INITIAL_SUPPLY);

        /// Author signature stored permanently in the blockchain
        author = "jpaezd";
        authorHash = keccak256(abi.encodePacked(author));
    }


    /// --------------------------------------------------------------------
    /// EXTERNAL FUNCTIONS (Public API)
    /// --------------------------------------------------------------------

    /**
     * @notice Mint new tokens.
     * @dev Only MINTER_ROLE can call this function.
     * @param to Address receiving the minted tokens.
     * @param amount Amount to mint (in wei).
     */
    function mint(address to, uint256 amount)
        external
        onlyRole(MINTER_ROLE)
    {
        _mint(to, amount);
    }

    /**
     * @notice Pauses all QTA transfers.
     * @dev Useful during emergencies, exploits, or audits.
     */
    function pause()
        external
        onlyRole(PAUSER_ROLE)
    {
        _pause();
    }

    /**
     * @notice Unpauses all transfers.
     */
    function unpause()
        external
        onlyRole(PAUSER_ROLE)
    {
        _unpause();
    }


    /// --------------------------------------------------------------------
    /// INTERNAL FUNCTIONS (Hooks)
    /// --------------------------------------------------------------------
    /**
     * @dev Modern OpenZeppelin (v5.x) uses _update() instead of _beforeTokenTransfer.
     * This hook ensures transfers cannot occur while the token is paused.
     */
    function _update(address from, address to, uint256 amount)
        internal
        override
    {
        require(!paused(), "QTA: token transfer while paused");

        // Continue with the standard ERC20 update logic
        super._update(from, to, amount);
    }
}
