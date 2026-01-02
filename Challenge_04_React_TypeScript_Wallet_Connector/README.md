# 🌐 Challenge 04 – **React + MetaMask Wallet Connector**

[![Challenge 04 — Wallet Connector](https://img.shields.io/badge/Challenge%2004-Wallet%20Connector-green)](#)
[![MultiChain](https://img.shields.io/badge/Challenge%2004-Multi%20Chain-green)](#)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Blockchain: Ethereum](https://img.shields.io/badge/Blockchain-Ethereum-purple.svg)](https://ethereum.org/)
![Web3](https://img.shields.io/badge/Web3-F8F8F8?style=flat&logo=ethereum&logoColor=blue)

---

## 📌 Description

This challenge demonstrates a **Web3 Wallet Connector** in **React + TypeScript** using MetaMask.  
It shows the connected account, active network, and real-time balances in **ETH** and **QTA token**.  

The project is split into:

- **Basic Version** – simple connection and account display.  
- **PRO Version** – advanced features, including real-time balances, network verification, and visual status indicators.
- **MULTI CHAIN PRO Version** – using React and TypeScript. It goes beyond the basics to provide a production-ready implementation with lifecycle handling, account change detection, real-time balance display, and safety checks.

---

## 🗂 Folder Structure

```text
Challenge_04_React_TypeScript_Wallet_Connector/
├── src/
│   ├── App.tsx
│   └── components/
│       └── multichain/
│           ├── balanceMultiChain.tsx
│           ├── networkSwitcher.ts
│           └── tokenReader.ts
├── basic/
│   └── images/
│       └── React--Wallet-Account1.png
├── pro/
│   └── Challenger_04_pro/
│       ├── README.md
│       └── images/
│           ├── WalletConnectorPro1.png
│           ├── WalletConnectorPro2.png
│           ├── BNBChain.png
│           ├── Arbitrum.png
│           ├── Linea.png
│           └── Alert.png
├── package.json
└── package-lock.json
```
---

## 🟢 Basic Version

**Features:**

- Simple MetaMask connection.
- Display connected account and network.
- Built using React functional components and hooks.

**Screenshot:**

![React Wallet Account](./basic/images/React--Wallet-Account1.png)

---

## 🚀 PRO Version

### Features

- Advanced MetaMask connection handling
- Real-time balances for **ETH** and **QTA**
- Network verification with error messages for incorrect network
- Visual indicators when wallet is connected
- Responsive UI updates on account and chain changes

### Screenshots

**1️⃣ Wallet connecting (initial connection):**  
![Wallet Connector PRO 1](./pro/Challenger_04_pro/images/WalletConnectorPro1.png)
**2️⃣ Wallet connected and balances loaded:**  
![Wallet Connector PRO 2](./pro/Challenger_04_pro/images/WalletConnectorPro2.png)

---

# 💎 PRO Version – Multichain

This project demonstrates the **PRO version of Web3 wallet integration** using React and TypeScript. It goes beyond the basics to provide a production-ready implementation with lifecycle handling, account change detection, real-time balance display, and safety checks.


## Features

- Connect and disconnect MetaMask securely  
- Detect account changes and update the UI in real-time  
- Show current balances of **ETH and QTA**  
- Handle errors and missing MetaMask scenarios  
- Typed with TypeScript for safer development  
- Modular, scalable component structure  
- Production-oriented best practices  

### New Multichain Features:

- Detect the current network and show balances for **BNB Chain, Arbitrum, and Linea**  
- If a token is requested on a different chain, an alert will appear:  

> ⚠️ You must be on the correct network — Required Chain ID: 56  

---

**3️⃣ BNB Chain:**  
![BNBChain](./pro/Challenger_04_pro/images/BNBChain.png)

**4️⃣ Arbitrum:**  
![Arbitrum](./pro/Challenger_04_pro/images/Arbitrum.png)

**5️⃣ Linea:**  
![Linea](./pro/Challenger_04_pro/images/Linea.png)

**6️⃣ Alert when querying a token on the wrong network:**  
![Alert](./pro/Challenger_04_pro/images/Alert.png)

> Note: To see the correct token balances, make sure you are on the corresponding network in MetaMask.

---

## Usage

1. Clone the repository.  
2. Navigate to the `/pro` folder.  
3. Install dependencies:

```bash
npm install
````

4. Start the project:

```bash
npm start
```

5. Open your browser and click **Connect MetaMask** to authorize your wallet.
6. Observe **automatic balance updates** when switching accounts in MetaMask.
7. Switch the network in MetaMask to view token balances for each chain (BNB, Arbitrum, Linea).

---

## Tech Stack

* ![React](https://img.shields.io/badge/React-20232a?style=flat\&logo=react\&logoColor=61DAFB)
* ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat\&logo=typescript\&logoColor=white)
* ![MetaMask](https://img.shields.io/badge/MetaMask-F6851B?style=flat\&logo=MetaMask\&logoColor=white)
* Ethereum Web3 (EIP-1193)
* Advanced frontend patterns
* Multichain handling and wrong-network alerts

---

## Goal

The goal of this PRO version is to **demonstrate a professional Web3 frontend implementation**, showing recruiters that I can handle real-world Ethereum integrations in React with TypeScript, including **real-time balance display**, multichain handling, and security alerts, all in a safe and scalable manner.

```


📚 Tech Stack

React 18
TypeScript 5
MetaMask (EIP-1193)
Ethereum Web3
Advanced frontend patterns and best practices
