# Challenge 01 – Advanced Calculator 🔢

[![Challenge_01](https://img.shields.io/badge/Challenge_01-AdvancedCalculator-green)](#)
[![Solidity](https://img.shields.io/badge/Solidity-0.8.24-blue)](#)
![Web3](https://img.shields.io/badge/Web3-F8F8F8?style=flat&logo=ethereum&logoColor=blue)


## Overview

Welcome! 👋 I'm **Jorge Páez**, and this repository demonstrates my **first advanced Solidity challenge** focused on arithmetic operations and clean smart contract design.

This **Advanced Calculator** smart contract provides:

- Unsigned addition and subtraction
- Signed subtraction
- Multipliers with optional input validation
- Events for logging operations

This challenge highlights my understanding of **state variables, modifiers, events, and internal/external function design** in Solidity.

---

## 📂 Project Structure

```

Challenge_01_AdvancedCalculator/
├─ AdvancedCalculator.sol
├─ README.md

```

---

## 🔹 Contract Features

### State Variables
- `uint256 public result` – Stores the current result used by multiplier functions (initialized to 10)

### Modifiers
- `validateNumber(uint256 number)` – Ensures a number is exactly 10 before executing strict multiplier

### Events
- `Addition(uint256, uint256, uint256)` – Emitted on addition
- `Subtraction(uint256, uint256, uint256)` – Emitted on subtraction

### Functions
- `addition(uint256 num1, uint256 num2)` – Adds two unsigned integers
- `subtraction(uint256 num1, uint256 num2)` – Subtracts two unsigned integers
- `subtractionSigned(int256 num1, int256 num2)` – Subtracts two signed integers
- `multiplier(uint256 num)` – Multiplies stored result by `num`
- `multiplierStrict(uint256 num)` – Multiplies stored result by `num` only if `num == 10`

### Internal Logic
- `_subtractionLogic` and `_subtractionLogicSigned` separate computation from external execution for cleaner architecture

---

## 🔧 Tech Stack

[![Solidity](https://img.shields.io/badge/Solidity-0.8.24-blue)](#)
[![Ethereum](https://img.shields.io/badge/Ethereum-EVM-purple)](#)
[![SmartContracts](https://img.shields.io/badge/SmartContracts-Green)](#)

---

## 🎯 Goal

Demonstrate clean, secure, and reusable Solidity code for arithmetic operations while building **professional, recruiter-friendly smart contract projects**.

---


## 📝 Notes

- This contract follows best practices:
  - Separation of internal logic from external functions
  - Input validation via modifiers
  - Event logging for all operations
  - Both signed and unsigned arithmetic handled
```


