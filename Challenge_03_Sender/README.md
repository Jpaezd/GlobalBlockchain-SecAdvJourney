
# 🌐 Challenge 03 – **Sender Contract**

**Solidity License Verified**

[![Challenge 03 — Sender](https://img.shields.io/badge/Challenge%2003-Sender-green)](#)
[![Solidity](https://img.shields.io/badge/Solidity-0.8.24-blue.svg)](https://docs.soliditylang.org/)
[![License](https://img.shields.io/badge/License-LGPL--3.0--only-green.svg)](https://www.gnu.org/licenses/lgpl-3.0.html)
[![Verified on Arbiscan](https://img.shields.io/badge/Verified-Arbiscan-blue.svg)](https://arbiscan.io/address/0xEF14b60F45fB9118a63e3DC2AaD21B1B142554d2)
[![Blockchain: Arbitrum One](https://img.shields.io/badge/Blockchain-Arbitrum%20One-purple.svg)](https://arbitrum.io/)


Languages: 🇺🇸 English (default) | 🇪🇸 Español

---

## 📌 Project Description

**GlobalBlockchain-SecAdvJourney – Challenge 03** continues the blockchain development journey of **Jorge Paez**, this time focusing on understanding how **constructors**, **msg.sender**, and ownership initialization work inside a Solidity smart contract.

This challenge introduces the **Sender** contract — a minimal but essential smart contract demonstrating:

* How a constructor executes only once
* How deployment assigns ownership
* The use of `msg.sender` at contract creation
* Clean, secure, professional-grade Solidity code

This challenge builds the foundation for more advanced concepts such as access control, Ownable patterns, and secure smart contract architecture.

---

## 📁 Included Files

Challenger_03_Sender/
├── Sender.sol          # Main contract (English version)
├── Sender_es.sol       # Spanish commented version
├── README.md           # English documentation
├── README_ES.md        # Spanish documentation
└── LICENSE             # LGPL-3.0-only license

---

## 🚀 Main Sender Contract Features

| Feature / Component | Description                                         |
| ------------------- | --------------------------------------------------- |
| `owner` (public)    | Stores the address that deployed the contract       |
| `constructor()`     | Runs once at deployment to set `owner = msg.sender` |

**Blockchain:** Local, Remix, or custom EVM testnet
**Source Code:** Included in this repository
**License:** LGPL-3.0-only

---

## 🧪 How to Use This Contract

### ✔ Compile in Remix

1. Open **Remix IDE**
2. Create a new file named `Sender.sol`
3. Paste the contract code
4. Select compiler version **0.8.24**
5. Click **Compile**

### ✔ Deploy

1. Go to **Deploy & Run Transactions**
2. Choose:

   * Remix VM
   * Injected Provider (MetaMask)
   * Or any EVM-compatible testnet
3. Click **Deploy**

You will instantly see the `owner` is set to **your wallet address**.

### ✔ Interact

* Click the `owner()` public variable
* Remix will return the Ethereum address that deployed the contract
* This verifies how constructors and msg.sender work

---

## 📘 Repository Vision

This challenge serves as a fundamental building block for:

* Advanced **ownership models**
* Access control systems
* Authorization patterns
* Secure contract upgradeability
* Multi-contract interactions
* Complete dApps and backend logic
* Future QUANTIA ($QTA) modules and ecosystem contracts

---

## 👤 Author

**Jorge Paez**
Blockchain Developer (Solidity – Ethereum)
Global Expansion | Smart Contract Engineering | Security-Driven Development

---

## 📄 License

This project uses the **LGPL-3.0-only** license, consistent with all Solidity smart contracts in this repository.

---

## 📌 Table of Contents

1. Project Description
2. Included Files
3. Main Contract Features
4. How to Use the Contract
5. Repository Vision
6. Author
7. License


