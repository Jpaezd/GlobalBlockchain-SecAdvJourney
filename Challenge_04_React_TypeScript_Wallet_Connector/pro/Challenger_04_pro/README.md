````markdown
# Challenge 04 – React + MetaMask + TypeScript (PRO Version)

![Challenge 04](https://img.shields.io/badge/Challenge-04-blue)
![PRO](https://img.shields.io/badge/Level-PRO-red)
![React](https://img.shields.io/badge/React-20232a?style=flat&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![MetaMask](https://img.shields.io/badge/MetaMask-F6851B?style=flat&logo=MetaMask&logoColor=white)
![Web3](https://img.shields.io/badge/Web3-F8F8F8?style=flat&logo=ethereum&logoColor=blue)
![Frontend](https://img.shields.io/badge/Frontend-React-yellow)
![Advanced](https://img.shields.io/badge/Advanced-truegreen)

This project demonstrates the **PRO version of Web3 wallet integration** using React and TypeScript. It goes beyond the basics to provide a production-ready implementation with lifecycle handling, account change detection, real-time balance display, and safety checks.

---

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

## Screenshots

### BASIC Version

**1️⃣ Wallet connecting:**  
![Wallet Connector PRO 1](./pro/Challenger_04_pro/images/WalletConnectorPro1.png)

**2️⃣ Wallet connected and balances loaded:**  
![Wallet Connector PRO 2](./pro/Challenger_04_pro/images/WalletConnectorPro2.png)

### PRO Version – Multichain

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

