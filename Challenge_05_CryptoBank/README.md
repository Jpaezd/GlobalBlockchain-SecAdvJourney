
# 🌐 Challenge 05 – **CryptoBank PRO 2026**

![Challenge 05](https://img.shields.io/badge/Challenge-05-CryptoBank-blue)
[![Solidity](https://img.shields.io/badge/Solidity-0.8.24-blue.svg)](https://docs.soliditylang.org/)
[![License](https://img.shields.io/badge/License-LGPL--3.0--only-green.svg)](https://www.gnu.org/licenses/lgpl-3.0.html)
[![Verified on Arbiscan](https://img.shields.io/badge/Verified-Arbiscan-blue.svg)](https://arbiscan.io/address/0xEF14b60F45fB9118a63e3DC2AaD21B1B142554d2)
[![Blockchain: Arbitrum One](https://img.shields.io/badge/Blockchain-Arbitrum%20One-purple.svg)](https://arbitrum.io/)
![MetaMask](https://img.shields.io/badge/MetaMask-F6851B?style=flat&logo=MetaMask&logoColor=white)
![Web3](https://img.shields.io/badge/Web3-F8F8F8?style=flat&logo=ethereum&logoColor=blue)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Blockchain: Ethereum](https://img.shields.io/badge/Blockchain-Ethereum-purple.svg)](https://ethereum.org/)
![Web3](https://img.shields.io/badge/Web3-F8F8F8?style=flat&logo=ethereum&logoColor=blue)
**Description:**
CryptoBank PRO is an **advanced smart contract** that allows depositing and withdrawing ETH, interacting with ERC20 tokens, and managing the contract with **owner control** and **pause functionality** (`paused`). Every action triggers **events** to audit activity.

---

## 🖼 Step-by-Step Screenshots

<div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center;">

<!-- Deploy -->

<div style="border:1px solid #ddd; border-radius:10px; padding:10px; width:250px; box-shadow: 2px 2px 10px rgba(0,0,0,0.1); text-align:center;">
<img src="images/Deploy.png" width="100%"/>
<h3>Deploy</h3>
<p>Contract deployed and owner assigned.</p>
</div>

<!-- Deposit -->

<div style="border:1px solid #ddd; border-radius:10px; padding:10px; width:250px; box-shadow: 2px 2px 10px rgba(0,0,0,0.1); text-align:center;">
<img src="images/DepositETH.png" width="100%"/>
<h3>Deposit ETH</h3>
<p>Executed <code>depositETHWrapperTEST()</code>. <code>Deposit</code> event confirmed.</p>
</div>

<!-- Balance -->

<div style="border:1px solid #ddd; border-radius:10px; padding:10px; width:250px; box-shadow: 2px 2px 10px rgba(0,0,0,0.1); text-align:center;">
<img src="images/Balance.png" width="100%"/>
<h3>Balance</h3>
<p>Check user balance after deposit.</p>
</div>

<!-- Withdraw -->

<div style="border:1px solid #ddd; border-radius:10px; padding:10px; width:250px; box-shadow: 2px 2px 10px rgba(0,0,0,0.1); text-align:center;">
<img src="images/Withdraw.png" width="100%"/>
<h3>Partial Withdrawal</h3>
<p>Withdraws 60% of the user’s balance. <code>Withdraw</code> event confirmed.</p>
</div>

<!-- New Balance -->

<div style="border:1px solid #ddd; border-radius:10px; padding:10px; width:250px; box-shadow: 2px 2px 10px rgba(0,0,0,0.1); text-align:center;">
<img src="images/NewBalance.png" width="100%"/>
<h3>New Balance</h3>
<p>Remaining balance verified after partial withdrawal.</p>
</div>

<!-- Paused -->

<div style="border:1px solid #ddd; border-radius:10px; padding:10px; width:250px; box-shadow: 2px 2px 10px rgba(0,0,0,0.1); text-align:center;">
<img src="images/Paused.png" width="100%"/>
<h3>Pause Contract</h3>
<p>Owner pauses the contract. Deposits and withdrawals are blocked.</p>
</div>

</div>

---

## 💻 Contract Features

* **Owner Control:** Only the owner can pause or resume the contract.
* **Pause Functionality:** Stop the contract in case of emergency.
* **Deposit / Withdraw ETH:** Deposit and withdraw ETH, fully or partially.
* **Deposit / Withdraw ERC20 Tokens:** Send and receive ERC20 tokens.
* **External Wrappers:** <code>depositETHWrapperTEST()</code> and <code>withdrawETHWrapper()</code> allow testing in Remix without touching internal logic.
* **Events:** <code>Deposit</code>, <code>Withdraw</code>, <code>TokenDeposit</code>, <code>TokenWithdraw</code>, <code>Paused</code> for auditing all activities.

---

## ⚡ How to Use in Remix

1. Open `CryptoBankFinal.sol` in Remix.
2. Compile with **Solidity 0.8.24+** and EVM version `Cancun` or `London`.
3. Deploy the contract from the account that will become the `owner`.
4. Use external wrappers to test deposits and withdrawals.
5. Check **Logs/Events** to audit each action.

---

## ✅ Conclusion

CryptoBank PRO 2026 is a **secure, professional, and test-ready contract**, ideal for:

* Learning to handle deposits and withdrawals of ETH and ERC20 tokens.
* Practicing access control (`owner`) and contract pausing.
* Generating events to audit transactions.
* Integrating with future DApps or external interfaces.

---

