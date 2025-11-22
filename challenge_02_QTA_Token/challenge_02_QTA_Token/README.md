# QUANTIA Token (QTA) – Challenge 02

This challenge consists of developing the **QUANTIA ($QTA)** token in Solidity as part of the Global Blockchain Security Advanced Journey.

## Overview
- **Blockchain:** Arbitrum One
- **Token Standard:** ERC20
- **Total Supply:** 100,000,000 QTA
- **Verified Source Code:** [Arbiscan](https://arbiscan.io/address/0xE30ca7b05c1FD031Ce53BE8C711696B33fE6cB70)
- **License:** LGPL-3.0-only

## Main Features
- Standard ERC20 functions:
  - `transfer`
  - `balanceOf`
  - `allowance`
  - `approve`
  - `transferFrom`
- Burnable functions (inherited from ERC20Burnable):
  - `burn`
  - `burnFrom`

## Challenge Objectives
1. Deploy a fully functional ERC20 token on Arbitrum One.
2. Ensure the contract is verified on Arbiscan for transparency.
3. Follow Solidity best practices to ensure security and efficiency.
4. Demonstrate understanding of token mechanics and smart contract deployment.

## Project Structure
challenge_02_QTA_Token/
├── QTA.sol # Main contract
├── README.md # This file
└── LICENSE # LGPL-3.0-only license


## Usage
- Interact with the contract via Arbiscan's **Read Contract** and **Write Contract** tabs.
- Users can transfer tokens, check balances, and burn tokens as needed.
- Developers can reference this verified contract for learning and integration.

## Notes
- This project is part of a series of challenges under **Global Blockchain Security Advanced Journey**.
- Each challenge is structured in its own folder with a clear README and proper license for transparency.
