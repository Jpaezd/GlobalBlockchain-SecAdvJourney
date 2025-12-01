# 🌐 Sender Contract – Challenge 03

**Solidity License Verified – Constructor & msg.sender Basics**

[![Solidity](https://img.shields.io/badge/Solidity-0.8.24-blue.svg)](https://docs.soliditylang.org/)
[![License](https://img.shields.io/badge/License-LGPL--3.0--only-green.svg)](https://www.gnu.org/licenses/lgpl-3.0.html)
[![Category](https://img.shields.io/badge/Category-Smart%20Contracts-purple.svg)]()
[![Blockchain: Arbitrum One](https://img.shields.io/badge/Blockchain-Arbitrum%20One-purple.svg)](https://arbitrum.io/)
[![Challenge](https://img.shields.io/badge/Challenger-03-orange.svg)]()

Languages: 🇺🇸 English | 🇪🇸 **Español (actual)**

---

## 📌 Descripción del Proyecto

**GlobalBlockchain-SecAdvJourney – Challenge 03** continúa el camino de desarrollo blockchain de **Jorge Paez**, enfocado en aprender desde contratos simples hasta arquitectura avanzada, siguiendo estándares profesionales de Solidity y seguridad.

Este reto introduce el contrato **Sender**, cuyo propósito es:

* Guardar la **dirección del despliegue** (`msg.sender`)
* Comprender cómo funciona un **constructor**
* Analizar cómo se inicializa una variable de estado al momento del deployment
* Iniciar las bases de **propiedad y control** en contratos inteligentes

Es un reto pequeño, pero fundamental para construir contratos más complejos como ERC20, sistemas propios de Quantia, y futuros diseños upgradeables.

---

## 📁 Archivos Incluidos

```
challenge_03_sender/
├── Sender.sol            # Contrato principal
├── README.md             # Este archivo
└── LICENSE               # Licencia LGPL-3.0-only
```

---

## 🚀 Funciones Principales del Contrato

| Variable / Función | Descripción                                                       |
| ------------------ | ----------------------------------------------------------------- |
| `owner`            | Dirección del propietario (deploying address)                     |
| `constructor`      | Se ejecuta una sola vez al desplegar; asigna `owner = msg.sender` |

**Blockchain:** Cualquiera compatible con EVM (Remix VM, Arbitrum, Ethereum, Polygon, BSC, etc.)
**Licencia:** LGPL-3.0-only
**Versión Solidity:** 0.8.24

---

## 🧪 Cómo Usar el Contrato

### ✔ Compilar

1. Abre **Remix IDE**
2. Crea un archivo llamado `Sender.sol`
3. Pega el código del contrato
4. Selecciona el compilador **0.8.24**
5. Haz clic en **Compile**

### ✔ Desplegar

1. En *Deploy & Run Transactions* selecciona:

   * Remix VM
   * Injected Provider (MetaMask)
   * O cualquier red compatible
2. Haz clic en **Deploy**

### ✔ Interactuar

Después del deployment:

* La variable `owner` mostrará automáticamente la dirección que hizo el despliegue
* Puedes verificar su valor desde:

  * Remix → *Deployed Contracts*
  * O cualquier explorador blockchain si lo verificas en red pública

---

## 🧠 ¿Qué Aprende Este Reto?

Este reto refuerza conceptos esenciales:

* Cómo funciona `msg.sender`
* Cómo se ejecuta un constructor
* Cómo almacenar direcciones en la blockchain
* Cómo se define un *propietario inicial* para futuros controles de acceso
* Buenas prácticas de documentación con NatSpec

Estos cimientos serán usados luego en:

* Contratos ERC20 personalizados
* Módulos de propiedad (Ownable)
* Sistemas administrativos para QUANTIA
* Arquitecturas upgradeables
* Seguridad avanzada en smart contracts

---

## 📘 Visión del Repositorio

Este challenge forma parte de un camino de aprendizaje que incluirá:

* Patrones de seguridad avanzados
* Control de acceso y roles
* Eventos, modifiers y lógica administrativa
* Envío y recepción de Ether
* Contratos upgradeables
* Integraciones con Foundry
* Desarrollo profesional para el ecosistema QUANTIA

---

## 👤 Autor

**Jorge Paez**
Blockchain Developer (Solidity – Ethereum – Arbitrum)
Global Expansion | Smart Contract Engineering | Security Research

---

## 📄 Licencia

Este proyecto utiliza la licencia **LGPL-3.0-only**, consistente con todos los contratos en este repositorio.

---

## 📌 Tabla de Contenidos

1. Descripción del Proyecto
2. Archivos Incluidos
3. Funciones Principales
4. Cómo Usar el Contrato
5. Qué Aprende Este Reto
6. Visión del Repositorio
7. Autor
8. Licencia

