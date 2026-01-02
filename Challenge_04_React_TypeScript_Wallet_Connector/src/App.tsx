// App.tsx
import React from "react";
import WalletConnectorPro from "./components/WalletConnectorPro";
import BalanceMultiChain from "./components/multichain/balanceMultiChain";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Challenge 04 – React + MetaMask + TypeScript</h1>
      
      <h3>Versión PRO</h3>
      <WalletConnectorPro />
      <BalanceMultiChain />
    </div>
  );
}

export default App;
