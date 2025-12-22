// @ts-nocheck

import { useEffect, useState } from "react";
import { ethers } from "ethers";

function WalletConnector() {
  const [account, setAccount] = useState<string>("");
  const [balance, setBalance] = useState<string>("0");
  const [network, setNetwork] = useState<string>("");

  async function connectWallet() {
    if (!window.ethereum) {
      alert("MetaMask is not installed");
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);

      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      const balanceWei = await provider.getBalance(address);
      const net = await provider.getNetwork();

      setAccount(address);
      setBalance(ethers.formatEther(balanceWei));
      setNetwork(net.name);
    } catch (error) {
      console.error(error);
      alert("Wallet connection failed");
    }
  }

  useEffect(() => {
    if (!window.ethereum) return;

    const handleAccountsChanged = (accounts: string[]) => {
      setAccount(accounts[0] || "");
    };

    const handleChainChanged = () => {
      window.location.reload();
    };

    window.ethereum.on("accountsChanged", handleAccountsChanged);
    window.ethereum.on("chainChanged", handleChainChanged);

    return () => {
      window.ethereum?.removeListener("accountsChanged", handleAccountsChanged);
      window.ethereum?.removeListener("chainChanged", handleChainChanged);
    };
  }, []);

  return (
    <div>
      <button onClick={connectWallet}>
        {account ? "Wallet Connected" : "Connect MetaMask"}
      </button>

      {account && (
        <div>
          <p><strong>Account:</strong> {account}</p>
          <p><strong>Balance:</strong> {balance} ETH</p>
          <p><strong>Network:</strong> {network}</p>
        </div>
      )}
    </div>
  );
}

export default WalletConnector;
