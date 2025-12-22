import { useState, useEffect } from "react";

function WalletConnector() {
  const [cuenta, setCuenta] = useState("");

  // Función para conectar MetaMask
  async function conectarBilletera() {
    if (typeof window.ethereum !== "undefined") {
      try {
        const cuentas = await window.ethereum.request({ method: "eth_requestAccounts" });
        setCuenta(cuentas[0]);
      } catch (err) {
        console.error(err);
        alert("No se pudo conectar a MetaMask");
      }
    } else {
      alert("Instala MetaMask para continuar");
    }
  }

  // Detectar cambios de cuenta o de red
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        setCuenta(accounts[0] || "");
      });
      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });
    }
  }, []);

  return (
    <div>
      <button onClick={conectarBilletera}>Conectar MetaMask</button>
      <p>Cuenta conectada: {cuenta}</p>
    </div>
  );
}

export default WalletConnector;
