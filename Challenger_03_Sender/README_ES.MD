# 🌐 Sender Contract – Challenge 02: QTA ($QTA)

[![Solidity](https://img.shields.io/badge/Solidity-0.8.24-blue.svg)](https://docs.soliditylang.org/)
[![License](https://img.shields.io/badge/License-LGPL--3.0--only-green.svg)](https://www.gnu.org/licenses/lgpl-3.0.html)
[![Verified on Arbiscan](https://img.shields.io/badge/Verified-Arbiscan-blue.svg)](https://arbiscan.io/address/0xEF14b60F45fB9118a63e3DC2AaD21B1B142554d2)
[![Blockchain: Arbitrum One](https://img.shields.io/badge/Blockchain-Arbitrum%20One-purple.svg)](https://arbitrum.io/)

**Idiomas:** 🇺🇸 English | 🇪🇸 Español (actual)
// SPDX-License-Identifier: LGPL-3.0-only
pragma solidity 0.8.24;

// ---------------------------------------------------------------------------
// Contrato: Sender
// Descripción:
//   Este contrato almacena la dirección del owner (creador del contrato).
//   La dirección del owner se asigna automáticamente cuando el contrato
//   se despliega, utilizando msg.sender.
// ---------------------------------------------------------------------------
contract Sender {
    // Dirección pública del propietario del contrato
    // Por defecto sería address(0), pero aquí se asigna en el constructor
    address public owner;

    // Constructor:
    // Se ejecuta una sola vez al momento del despliegue del contrato.
    // msg.sender representa la dirección que despliega el contrato.
    constructor() {
        owner = msg.sender;
    }
}
