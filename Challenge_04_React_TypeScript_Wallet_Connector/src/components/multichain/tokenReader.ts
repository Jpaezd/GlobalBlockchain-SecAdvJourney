// src/components/multichain/tokenReader.ts
import { ethers } from "ethers";

const ERC20_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function decimals() view returns (uint8)",
  "function symbol() view returns (string)",
];

export const readTokenBalance = async (
  provider: ethers.BrowserProvider,
  tokenAddress: string,
  wallet: string
) => {
  try {
    if (!ethers.isAddress(tokenAddress)) {
      throw new Error("Dirección de token inválida");
    }

    if (!ethers.isAddress(wallet)) {
      throw new Error("Dirección de wallet inválida");
    }

    const contract = new ethers.Contract(tokenAddress, ERC20_ABI, provider);

    const [rawBalance, decimals, symbol] = await Promise.all([
      contract.balanceOf(wallet),
      contract.decimals(),
      contract.symbol(),
    ]);

    const balance = Number(ethers.formatUnits(rawBalance, decimals));

    return { balance, symbol, decimals };
  } catch (error) {
    console.error("❌ Error leyendo token:", error);

    return {
      balance: 0,
      symbol: "Unknown",
      decimals: 18,
    };
  }
};
