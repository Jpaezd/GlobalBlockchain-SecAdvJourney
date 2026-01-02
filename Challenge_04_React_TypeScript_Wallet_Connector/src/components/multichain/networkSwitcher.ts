// src/components/multichain/networkSwitcher.ts

declare const window: any;

// Redes completas para agregar automáticamente en caso de error 4902
export const NETWORKS = {
  BNB: {
    chainId: "0x38",
    chainName: "BNB Smart Chain",
    rpcUrls: ["https://bsc-dataseed.binance.org/"],
    nativeCurrency: {
      name: "BNB",
      symbol: "BNB",
      decimals: 18,
    },
    blockExplorerUrls: ["https://bscscan.com/"],
  },

  ARBITRUM: {
    chainId: "0xa4b1",
    chainName: "Arbitrum One",
    rpcUrls: ["https://arb1.arbitrum.io/rpc"],
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    blockExplorerUrls: ["https://arbiscan.io/"],
  },

  LINEA: {
    chainId: "0xe708",
    chainName: "Linea Mainnet",
    rpcUrls: ["https://rpc.linea.build"],
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    blockExplorerUrls: ["https://lineascan.build/"],
  },
};

// Cambiar de red o agregarla si no existe
export const switchNetwork = async (network: any) => {
  try {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: network.chainId }],
    });
  } catch (err: any) {
    console.log("⚠ Error al cambiar de red:", err);

    // Error 4902 = Red no existe en MetaMask → agregarla automáticamente
    if (err.code === 4902) {
      try {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [network],
        });

        console.log("Red agregada correctamente:", network.chainName);
      } catch (addErr: any) {
        console.error("❌ Error al agregar la red:", addErr);
      }
    }
  }
};
