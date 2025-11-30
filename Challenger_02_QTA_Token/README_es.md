# 🌐 QUANTIA Token – Challenge 02: QTA ($QTA)

[![Solidity](https://img.shields.io/badge/Solidity-0.8.24-blue.svg)](https://docs.soliditylang.org/)
[![License](https://img.shields.io/badge/License-LGPL--3.0--only-green.svg)](https://www.gnu.org/licenses/lgpl-3.0.html)
[![Verified on Arbiscan](https://img.shields.io/badge/Verified-Arbiscan-blue.svg)](https://arbiscan.io/address/0xEF14b60F45fB9118a63e3DC2AaD21B1B142554d2)
[![Blockchain: Arbitrum One](https://img.shields.io/badge/Blockchain-Arbitrum%20One-purple.svg)](https://arbitrum.io/)

**Idiomas:** 🇺🇸 English | 🇪🇸 Español (actual)

---

## 📌 Descripción del Proyecto

`GlobalBlockchain-SecAdvJourney` – Challenger 02 documenta el viaje de desarrollo blockchain de **Jorge Paez**, enfocado en **ingeniería de contratos inteligentes segura**, patrones avanzados de Solidity y buenas prácticas de la industria.

Este desafío incluye el token **QUANTIA ($QTA)**, un token ERC20 **desplegado y verificado en Arbitrum One**, con funciones **burnable** y suministro fijo de **100,000,000 QTA**, actualmente reflejado en MetaMask. Este repositorio sirve como ejemplo profesional de:

* Prácticas de desarrollo en Solidity.
* Código limpio y patrones de diseño.
* Conciencia sobre seguridad en contratos inteligentes.
* Contratos transparentes y verificados, aptos para portafolio.
* Demostración educativa de la mecánica de tokens ERC20.

> ⚠️ Nota: Futuras versiones del contrato considerarán **implementaciones resistentes a ataques cuánticos**, asegurando seguridad avanzada frente a posibles amenazas futuras.

---

## 📁 Archivos Incluidos

```
challenge_02_QTA_Token/
├── QTA.sol               # Contrato ERC20 principal
├── README.md             # Este archivo
├── LICENSE               # Licencia LGPL-3.0-only
└── images/
    └── qta_metamask.png  # Captura de MetaMask con los 100M QTA
```

---

## 🚀 Funciones Principales del Token QTA

| Función / Característica | Descripción                                     |
| ------------------------ | ----------------------------------------------- |
| `transfer`               | Transferencia estándar ERC20                    |
| `balanceOf`              | Consultar balance de tokens                     |
| `allowance`              | Consultar permiso para transferencias delegadas |
| `approve`                | Aprobar que otra cuenta gaste tokens            |
| `transferFrom`           | Transferir tokens desde cuenta aprobada         |
| `burn`                   | Quemar tokens propios (ERC20Burnable)           |
| `burnFrom`               | Quemar tokens desde otra cuenta (ERC20Burnable) |

* **Suministro total:** 100,000,000 QTA
* **Blockchain:** Arbitrum One
* **Código fuente verificado:** [Arbiscan](https://arbiscan.io/address/0xEF14b60F45fB9118a63e3DC2AaD21B1B142554d2)
* **Licencia:** LGPL-3.0-only

---

## 🧪 Cómo Usar el Contrato

### ✔ Compilar

1. Abrir **[Remix IDE](https://remix.ethereum.org/)**.
2. Crear un nuevo archivo: `QTA.sol`.
3. Pegar el código del contrato.
4. Seleccionar compilador: `0.8.24`.
5. Hacer clic en **Compile**.

### ✔ Desplegar

1. En **Deploy & Run Transactions** seleccionar `Remix VM`, `Injected Provider` o **MetaMask**.
2. Hacer clic en **Deploy**.

### ✔ Interactuar

* Usar las pestañas **Read Contract** y **Write Contract** en **Arbiscan** para consultar balances, transferir y quemar tokens.

---

## 📷 MetaMask – QTA Token

Para demostrar el suministro de **100,000,000 QTA** en mi wallet, agregue la captura de pantalla en:

```
images/qta_metamask.png
```


## 📘 Visión del Repositorio

Futuros desafíos y mejoras podrían incluir:

* Patrones de seguridad avanzados (`Checks-Effects-Interactions`, `Reentrancy Guards`).
* Desarrollo de nuevos tokens ERC20 y funcionalidades avanzadas.
* Control de acceso y roles (`Ownable`, `Roles`).
* Contratos inteligentes actualizables.
* Optimización de gas.
* Proyectos completos de dApp (frontend + contratos inteligentes).
* Implementaciones resistentes a ataques cuánticos.

---

## 👤 Autor

**Jorge Paez**
Blockchain Developer (Solidity – Ethereum)
Expansión Global | Ingeniería de Contratos Inteligentes | Desarrollo enfocado en Seguridad

---

## 📄 Licencia

Este proyecto utiliza la **[licencia LGPL-3.0-only](https://www.gnu.org/licenses/lgpl-3.0.html)**, consistente con los contratos Solidity incluidos.

---

## 📌 Tabla de Contenido

1. [Descripción del Proyecto](#descripción-del-proyecto)
2. [Archivos Incluidos](#archivos-incluidos)
3. [Funciones Principales del Token QTA](#funciones-principales-del-token-qta)
4. [Cómo Usar el Contrato](#cómo-usar-el-contrato)
5. [MetaMask – QTA Token](#metamask--qta-token)
6. [Visión del Repositorio](#visión-del-repositorio)
7. [Autor](#autor)
8. [Licencia](#licencia)

