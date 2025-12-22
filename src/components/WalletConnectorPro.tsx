import { useEffect, useState } from "react";



function WalletConnectorPro() {
  const [account, setAccount] = useState<string>("");

  async function connectWallet() {
  if (!window.ethereum) {
    console.error("MetaMask no está instalado");
    return;
  }

  try {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(accounts[0]);
  } catch (error) {
    console.error(error);
  }
}


  useEffect(() => {
    if (!window.ethereum) return;

    const handleAccountsChanged = (accounts: string[]) => {
      setAccount(accounts[0] || "");
    };

    window.ethereum.on("accountsChanged", handleAccountsChanged);

    return () => {
      window.ethereum?.removeListener(
        "accountsChanged",
        handleAccountsChanged
      );
    };
  }, []);

  return (
    <div style={{ border: "1px solid #999", padding: "16px", marginTop: "20px" }}>
      <h2>Wallet Connector PRO</h2>

      <button onClick={connectWallet}>
        {account ? "Wallet conectada" : "Conectar MetaMask"}
      </button>

      {account && <p>Cuenta: {account}</p>}
    </div>
  );
}

export default WalletConnectorPro;
