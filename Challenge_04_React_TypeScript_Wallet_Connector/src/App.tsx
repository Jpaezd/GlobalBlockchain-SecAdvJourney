import React from "react";
//import WalletConnector from "./components/WalletConnector";
import WalletConnectorPro from "./components/WalletConnectorPro";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Challenge 04 – React + MetaMask + TypeScript</h1>
      
      {/*<h3>Versión/ </h3>*/}
      {/*<WalletConnector />*/}
      
      <h3>Versión PRO</h3>
      <WalletConnectorPro />
    </div>
  );
}

export default App;
