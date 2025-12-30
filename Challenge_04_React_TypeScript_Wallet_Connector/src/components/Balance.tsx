// src/components/Balance.tsx
import React, { useEffect, useState } from "react";
import { BrowserProvider, Contract, formatEther, formatUnits } from "ethers";

const QTA_TOKEN_ADDRESS = "0xe30ca7b05c1fd031ce53be8c711696b33fe6cb70";
const ERC20_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function decimals() view returns (uint8)",
];

declare const window: Window & { ethereum?: any };

export default function Balance({ account }: { account: string }) {
  const [eth, setEth] = useState("...");
  const [qta, setQta] = useState("...");
  const [network, setNetwork] = useState("...");

  useEffect(() => {
    if (!account || !window.ethereum) {
      setEth("Error: Wallet no detectada");
      setQta("Error: Wallet no detectada");
      return;
    }

    async function getData() {
      try {
        const provider = new BrowserProvider(window.ethereum);

        // Obtener la red
        const networkInfo = await provider.getNetwork();
        const chainId = Number(networkInfo.chainId); // Convertimos a number
        setNetwork(`Chain ID: ${chainId}`);

        // Validar Arbitrum Mainnet (chainId = 42161)
        if (chainId !== 42161) {
          setEth("Error: Red incorrecta");
          setQta("Error: Red incorrecta");
          return;
        }

        // Balance ETH (BigInt)
        const rawEth: bigint = await provider.getBalance(account);
        const ethString = formatEther(rawEth); // Convertimos a string decimal
        setEth(ethString);

        // Balance QTA
        const contract = new Contract(QTA_TOKEN_ADDRESS, ERC20_ABI, provider);
        const rawQta: bigint = await contract.balanceOf(account);
        const decimals: number = await contract.decimals();
        const qtaString = formatUnits(rawQta, decimals); // Convertimos a string decimal
        setQta(qtaString);
      } catch (error) {
        console.error("Error interno:", error);
        setEth("Error");
        setQta("Error");
      }
    }

    getData();
  }, [account]);

  return (
    <div
      style={{
        background: "yellow",
        padding: "10px",
        color: "black",
        marginTop: "10px",
        borderRadius: "5px",
      }}
    >
      <strong>¡SÍ SE RENDERIZA EL COMPONENTE!</strong>
      <p>Red: {network}</p>
      <p>ETH: {eth}</p>
      <p>QTA: {qta}</p>
    </div>
  );
}
