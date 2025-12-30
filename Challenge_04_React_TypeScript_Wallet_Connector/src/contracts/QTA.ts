// QTA.ts
// This file contains the QTA token contract address and ABI for React components.

export const QTA_ADDRESS = "0xEF14b60F45fB9118a63e3DC2AaD21B1B142554d2";

export const QTA_ABI = [
  // Minimal ERC20 ABI, add more functions if needed
  "function balanceOf(address owner) view returns (uint256)",
  "function transfer(address to, uint256 amount) returns (bool)",
  "event Transfer(address indexed from, address indexed to, uint256 value)"
];
