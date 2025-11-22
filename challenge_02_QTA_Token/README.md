## 🌐 Languages
- 🇺🇸 English (default)
- 🇪🇸 [Español](README.es.md)

GlobalBlockchain-SecAdvJourney – Challenge 02: QTA Token
A professional repository documenting the blockchain development journey of Jorge Paez, focusing on secure smart contract engineering, advanced Solidity patterns, and industry-standard best practices.

This challenge includes the QUANTIA ($QTA) ERC20 token, deployed and verified on Arbitrum One, serving as a clear example of token development, burnable features, and verified smart contract deployment.

📌 Project Purpose
This challenge serves as a showcase of:

Professional Solidity development practices
Clean code structure and design patterns
Smart contract security awareness
Transparent, verified smart contracts suitable for portfolio and professional review
Educational demonstration of ERC20 token mechanics

📁 Included Files
challenge_02_QTA_Token/ ├── QTA.sol # Main ERC20 token contract ├── README.md # This file └── LICENSE # LGPL-3.0-only license

🚀 Main Features of QTA Token

Function / Feature	Description
transfer	Standard ERC20 transfer function
balanceOf	Check token balance of an account
allowance	Check allowance for delegated transfers
approve	Approve another account to spend tokens
transferFrom	Transfer tokens from an approved account
burn	Burn tokens from own account (ERC20Burnable)
burnFrom	Burn tokens from another account (ERC20Burnable)
Total Supply: 100,000,000 QTA
Blockchain: Arbitrum One
Verified Source Code: Arbiscan
License: LGPL-3.0-only

🧪 How to Use the Contract

✔ Compile

Open Remix IDE
Create a new file: QTA.sol
Paste the contract code
Select compiler version: 0.8.24
Click Compile QTA.sol
✔ Deploy

Under Deploy & Run Transactions
Environment → Remix VM, Injected Provider, or MetaMask
Click Deploy
✔ Interact

Use Read Contract and Write Contract tabs on Arbiscan to check balances, transfer tokens, and burn tokens.
📘 Repository Vision
As this journey continues, future challenges may include:

Advanced security patterns (Checks-Effects-Interactions, Reentrancy Guards)
ERC20 token development (QTA Token and future tokens)
Access control (Ownable, Roles)
Upgradeable contracts
Gas optimization techniques
Complete dApp projects (frontend + smart contracts)
QUANTIA ecosystem development

👤 Author
Jorge Paez
Blockchain Developer (Solidity – Ethereum)
Global Expansion | Smart Contract Engineering | Security-Focused Development

📄 License
This project uses the LGPL-3.0-only license, consistent with the included Solidity contracts.
