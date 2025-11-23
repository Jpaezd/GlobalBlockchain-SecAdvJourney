## 🌐 Languages

[![Solidity](https://img.shields.io/badge/Solidity-0.8.24-blue.svg)](https://docs.soliditylang.org/)
[![License](https://img.shields.io/badge/License-LGPL--3.0--only-green.svg)](https://www.gnu.org/licenses/lgpl-3.0.html)
[![Verified on Arbiscan](https://img.shields.io/badge/Verified-Arbiscan-blue.svg)](https://arbiscan.io/address/0xEF14b60F45fB9118a63e3DC2AaD21B1B142554d2)
[![Blockchain: Arbitrum One](https://img.shields.io/badge/Blockchain-Arbitrum%20One-purple.svg)](https://arbitrum.io/)

- 🇺🇸 English (default)
- 🇪🇸 [Español](README.es.md)

# GlobalBlockchain-SecAdvJourney

A professional repository documenting the blockchain development journey of **Jorge Paez**, focusing on secure smart contract engineering, advanced Solidity patterns, and industry-standard best practices.

This repository includes educational, experimental, and production-ready smart contracts, starting with the **AdvancedCalculator.sol** contract — a clean, well-documented example that demonstrates arithmetic logic and proper Solidity architecture.

---

## 📌 Project Purpose

This repository serves as a showcase of:

- Professional Solidity development practices  
- Clean code structure and design patterns  
- Smart contract security awareness  
- Real progress and portfolio-level blockchain engineering  
- Source code suitable for recruiters and international companies  

---

## 📁 Included Contracts

### **1. AdvancedCalculator.sol**
A professionally structured Solidity smart contract with:

- Addition (uint256)
- Subtraction (uint256)
- Signed subtraction (int256)
- Multipliers
- Input validation using modifiers
- NatSpec documentation for professional codebases
- Clean separation of internal and external logic

This contract is ideal as a first “formal” entry in your blockchain portfolio.

---

## 🚀 How to Use the Contract

### ✔ Compile
1. Open **Remix IDE**
2. Create a new file: `AdvancedCalculator.sol`
3. Paste the contract code
4. Select compiler version: **0.8.24**
5. Click **Compile AdvancedCalculator.sol**

### ✔ Deploy
1. Under **Deploy & Run Transactions**
2. Environment → **Remix VM**, **Injected Provider**, or **MetaMask**
3. Click **Deploy**

---

## 🧪 Example Interactions

| Function | Description |
|---------|-------------|
| `addition(10, 5)` | Returns 15 |
| `subtraction(10, 3)` | Returns 7 |
| `subtractionSigned(-5, -20)` | Returns 15 |
| `multiplier(3)` | `result` becomes `result * 3` |
| `multiplierStrict(10)` | Only works if input is exactly 10 |

---

## 📘 Repository Vision

As this journey continues, future additions may include:

- Security patterns (Checks-Effects-Interactions, Reentrancy Guards)
- ERC-20 token development (**QTA Token**)
- Access control (Ownable, Roles)
- Upgradeable smart contracts
- Gas optimization techniques
- Complete dApp projects (front-end + smart contracts)
- QUANTIA ecosystem development

---

## 👤 Author

**Jorge Paez**  
Blockchain Developer (Solidity – Ethereum)  
Global Expansion | Smart Contract Engineering | Security-Focused Development

---

## 📄 License

This repository uses the **LGPL-3.0-only** license, consistent with the included Solidity contracts.
