// src/components/bnb/BalanceBNBChain.tsx
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

declare const window: Window & { ethereum?: any };

const USDT_BNB_ADDRESS = "0x55d398326f99059fF775485246999027B3197955"; // BNB Chain USDT (BEP20)
const ETH_WORMHOLE_ADDRESS = "0x2170Ed0880ac9A755fd29B2688956BD959F933F8"; // ETH Wormhole (BEP20)

function BalanceBNBChain({ account }: { account: string }) {
  const [chainId, setChainId] = useState<string>("");
  const [bnbBalance, setBnbBalance] = useState<string>("0");
  const [usdtBalance, setUsdtBalance] = useState<string>("0");
  const [ethWBalance, setEthWBalance] = useState<string>("0");
  const [totalUSD, setTotalUSD] = useState<number>(0);

  const loadNetwork = async () => {
    if (!window.ethereum) return;

    const id = await window.ethereum.request({ method: "eth_chainId" });
    setChainId(id);
  };

  const loadBalances = async () => {
    if (!window.ethereum || !account) return;

    const provider = new ethers.BrowserProvider(window.ethereum);

    // BNB native balance
    const balance = await provider.getBalance(account);
    const bnb = Number(ethers.formatEther(balance));
    setBnbBalance(bnb.toString());

    // USDT balance
    const usdtAbi = ["function balanceOf(address) view returns (uint256)"];
    const usdtContract = new ethers.Contract(USDT_BNB_ADDRESS, usdtAbi, provider);
    const usdtRaw = await usdtContract.balanceOf(account);
    const usdt = Number(ethers.formatUnits(usdtRaw, 18)); 
    setUsdtBalance(usdt.toString());

    // ETH Wormhole
    const ethAbi = ["function balanceOf(address) view returns (uint256)"];
    const ethContract = new ethers.Contract(ETH_WORMHOLE_ADDRESS, ethAbi, provider);
    const ethRaw = await ethContract.balanceOf(account);
    const ethW = Number(ethers.formatEther(ethRaw));
    setEthWBalance(ethW.toString());

    // Approximate USD values using your MetaMask displayed prices
    const bnbUSD = bnb * (10.17 / 0.0120); // using your wallet's displayed ratio
    const usdtUSD = usdt * 1;
    const ethWUSD = ethW * 0; // now you sold it → 0

    setTotalUSD(Number((bnbUSD + usdtUSD + ethWUSD).toFixed(2)));
  };

  useEffect(() => {
    loadNetwork();
    loadBalances();

    window.ethereum.on("chainChanged", () => window.location.reload());

    return () => {
      if (window.ethereum.removeListener) {
        window.ethereum.removeListener("chainChanged", () => {});
      }
    };
  }, []);

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Balances on BNB Chain</h3>
      <p><strong>Network:</strong> {chainId}</p>
      <p style={{ fontStyle: "italic", fontSize: "0.9rem" }}>
        (Only BNB Chain values are shown)
      </p>

      <p><strong>BNB:</strong> {bnbBalance}</p>
      <p><strong>USDT:</strong> {usdtBalance}</p>
      <p><strong>ETH (Wormhole):</strong> {ethWBalance}</p>

      <h3>💰 Total: ${totalUSD} USD</h3>
    </div>
  );
}

export default BalanceBNBChain;
