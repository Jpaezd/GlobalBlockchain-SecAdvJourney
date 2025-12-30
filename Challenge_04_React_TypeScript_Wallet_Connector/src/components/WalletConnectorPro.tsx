// src/components/WalletConnectorPro.tsx
import React, { useState } from "react";
import Balance from "./Balance";
import BalanceBNBChain from "./bnb/BalanceBNBChain";


// Definición para que TypeScript no de error con window.ethereum
declare const window: Window & { ethereum?: any };

function WalletConnectorPro() {
  const [account, setAccount] = useState<string>("");

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert("MetaMask no está instalada.");
        return;
      }

      // Solicitamos las cuentas a MetaMask
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      // AJUSTE CRÍTICO: accounts es un array. Tomamos solo la primera posición [0]
      // para que el componente Balance reciba un string limpio.
      if (accounts && accounts.length > 0) {
        setAccount(accounts[0]);
      }
    } catch (err) {
      console.error("Error al conectar:", err);
    }
  };

  return (
    <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "20px", borderRadius: "10px" }}>
      <h2>Wallet Connector PRO</h2>

      {account ? (
        <div>
          <div style={{ marginBottom: "15px", padding: "10px", backgroundColor: "#e7f3ff", borderRadius: "5px" }}>
            <p style={{ margin: 0 }}><strong>Wallet conectada ✅</strong></p>
            <p style={{ margin: "5px 0", fontSize: "0.9rem", wordBreak: "break-all" }}>
              Cuenta: <code>{account}</code>
            </p>
          </div>

          {/* 
              Renderizamos el componente Balance pasando la dirección como string.
              Este componente ahora recibirá 'account' correctamente para consultar 
              ETH y QTA en Arbitrum. 
          */}
          {/* Desactivamos temporalmente el lector de Arbitrum */}
         {/* <Balance account={account} />*/}
         {/* Activamos el lector de BNB Chain */}
         <BalanceBNBChain account={account} />

        </div>
      ) : (
        <button 
          onClick={connectWallet}
          style={{
            padding: "10px 20px",
            backgroundColor: "#f6851b",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Conectar MetaMask
        </button>
      )}
    </div>
  );
}

export default WalletConnectorPro;
