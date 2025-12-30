# 🌐 Challenge 04 – **React + MetaMask Wallet Connector**

[![Challenge 04 — Wallet Connector](https://img.shields.io/badge/Challenge%2004-Wallet%20Connector-green)](#)
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

### ⚡ Example Code – Connection & Balances

```tsx
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

declare const window: Window & { ethereum?: any };

function WalletConnectorPro() {
  const [account, setAccount] = useState<string>("");
  const [ethBalance, setEthBalance] = useState<string>("");
  const [qtaBalance, setQtaBalance] = useState<string>("");

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask is not installed.");
      return;
    }
    const [selectedAccount] = await window.ethereum.request({ method: "eth_requestAccounts" });
    setAccount(selectedAccount);
    await getBalances(selectedAccount);
  };

  const getBalances = async (account: string) => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const eth = await provider.getBalance(account);
    setEthBalance(ethers.formatEther(eth));

    const QTA_ADDRESS = "0xYOUR_QTA_ADDRESS"; 
    const QTA_ABI = ["function balanceOf(address) view returns (uint256)"];
    const qtaContract = new ethers.Contract(QTA_ADDRESS, QTA_ABI, provider);
    const qta = await qtaContract.balanceOf(account);
    setQtaBalance(ethers.formatUnits(qta, 18));
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", ([newAccount]) => {
        setAccount(newAccount || "");
        if (newAccount) getBalances(newAccount);
      });
      window.ethereum.on("chainChanged", () => window.location.reload());
    }
  }, []);

  return (
    <div>
      <button onClick={connectWallet}>Connect Wallet</button>
      {account && (
        <div>
          <p><strong>Account:</strong> {account}</p>
          <p><strong>ETH:</strong> {ethBalance || "Loading..."}</p>
          <p><strong>QTA:</strong> {qtaBalance || "Loading..."}</p>
        </div>
      )}
    </div>
  );
}

export default WalletConnectorPro;


🎯 Goal

The goal of this challenge is to demonstrate a professional Web3 frontend integration,
showing real-time wallet balances, network verification, and a robust React + TypeScript
structure that recruiters and developers can immediately understand and trust.


📚 Tech Stack

React 18
TypeScript 5
MetaMask (EIP-1193)
Ethereum Web3
Advanced frontend patterns and best practices
