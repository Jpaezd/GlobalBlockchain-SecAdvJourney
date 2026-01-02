// src/components/multichain/balanceMultiChain.tsx
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

declare const window: any;

const NETWORKS: Record<number, string> = {
  1: "Ethereum",
  56: "BNB Chain",
  42161: "Arbitrum",
  59144: "Linea",
};

const TOKENS = {
  USDT_BSC: {
    address: "0x55d398326f99059fF775485246999027B3197955",
    chainId: 56,
  },
  QTA_ARBITRUM: {
    address: "0xE30ca7b05c1FD031Ce53BE8C711696B33fE6cB70",
    chainId: 42161,
  },
  FOXY_LINEA: {
    address: "0x5FBDF89403270a1846F5ae7D113A989F850d1566",
    chainId: 59144,
  },
};

const ERC20_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function decimals() view returns (uint8)",
  "function symbol() view returns (string)",
];

export default function BalanceMultiChain() {
  const [account, setAccount] = useState<string>("");
  const [chainId, setChainId] = useState<number>(0);
  const [nativeBalance, setNativeBalance] = useState<string>("");
  const [tokenBalance, setTokenBalance] = useState<{ symbol: string; balance: string } | null>(null);

  useEffect(() => {
    if (!window.ethereum) return;

    window.ethereum.on("accountsChanged", () => window.location.reload());
    window.ethereum.on("chainChanged", () => window.location.reload());
  }, []);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask no está instalada.");
      return;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
    const network = await provider.getNetwork();

    setAccount(accounts[0]);
    setChainId(Number(network.chainId));

    const balance = await provider.getBalance(accounts[0]);
    setNativeBalance(ethers.formatEther(balance));
  };

  const readToken = async (token: { address: string; chainId: number }) => {
    if (chainId !== token.chainId) {
      alert(`Debes estar en la red correcta ➜ Chain ID requerido: ${token.chainId}`);
      return;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(token.address, ERC20_ABI, provider);

    const rawBalance = await contract.balanceOf(account);
    const decimals = await contract.decimals();
    const symbol = await contract.symbol();

    const balance = ethers.formatUnits(rawBalance, decimals);

    setTokenBalance({
      symbol,
      balance,
    });
  };

  return (
    <div style={{ padding: 20, border: "2px solid #ccc", borderRadius: 10 }}>
      <h2>🌐 Multi-Chain Balance</h2>

      <button onClick={connectWallet}>Conectar Wallet</button>

      {account && (
        <>
          <p><strong>Cuenta:</strong> {account}</p>
          <p><strong>Red:</strong> {NETWORKS[chainId] || "Desconocida"} (ID: {chainId})</p>
          <p><strong>Saldo nativo:</strong> {nativeBalance || "—"}</p>

          <h3>Cambiar de red</h3>

          <button
            onClick={() =>
              window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: "0x38" }],
              })
            }
          >
            BNB Chain
          </button>

          <button
            onClick={() =>
              window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: "0xa4b1" }],
              })
            }
          >
            Arbitrum
          </button>

          <button
            onClick={() =>
              window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: "0xe708" }], // ✔ ID REAL de Linea
              })
            }
          >
            Linea
          </button>

          <h3>Leer tokens</h3>
          <button onClick={() => readToken(TOKENS.USDT_BSC)}>Leer USDT (BSC)</button>
          <button onClick={() => readToken(TOKENS.QTA_ARBITRUM)}>Leer QTA (Arbitrum)</button>
          <button onClick={() => readToken(TOKENS.FOXY_LINEA)}>Leer FOXY (Linea)</button>

          <h3>📊 Token Balances</h3>
          {tokenBalance ? (
            <table style={{ border: "1px solid gray" }}>
              <thead>
                <tr>
                  <th>Token</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{tokenBalance.symbol}</td>
                  <td>{tokenBalance.balance}</td>
                </tr>
              </tbody>
            </table>
          ) : (
            <p>—</p>
          )}
        </>
      )}
    </div>
  );
}
