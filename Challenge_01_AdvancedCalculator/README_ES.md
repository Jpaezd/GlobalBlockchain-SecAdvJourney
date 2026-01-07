## 🌐 Idiomas

[![Solidity](https://img.shields.io/badge/Solidity-0.8.24-blue.svg)](https://docs.soliditylang.org/)
[![License](https://img.shields.io/badge/License-LGPL--3.0--only-green.svg)](https://www.gnu.org/licenses/lgpl-3.0.html)
[![Verified on Arbiscan](https://img.shields.io/badge/Verified-Arbiscan-blue.svg)](https://arbiscan.io/address/0xEF14b60F45fB9118a63e3DC2AaD21B1B142554d2)
[![Blockchain: Arbitrum One](https://img.shields.io/badge/Blockchain-Arbitrum%20One-purple.svg)](https://arbitrum.io/)
[![Challenge](https://img.shields.io/badge/Challenger-01-orange.svg)]()

- 🇺🇸 [English](README.md)
- 🇪🇸 Español (actual)


# GlobalBlockchain-SecAdvJourney

Un repositorio profesional que documenta el camino de desarrollo blockchain de **Jorge Paez**, enfocado en ingeniería de smart contracts seguros, patrones avanzados de Solidity y mejores prácticas usadas en la industria.

Este repositorio incluye contratos educativos, experimentales y listos para producción, comenzando con el contrato **AdvancedCalculator.sol** — un ejemplo limpio y bien documentado que demuestra lógica aritmética y una arquitectura adecuada en Solidity.

---

## 📌 Propósito del Proyecto

Este repositorio sirve como una vitrina de:

- Prácticas profesionales de desarrollo en Solidity  
- Estructura de código limpia y patrones de diseño  
- Conciencia y aplicación de seguridad en smart contracts  
- Progreso real y nivel profesional en ingeniería blockchain  
- Código fuente apto para reclutadores y empresas internacionales  

---

## 📁 Contratos Incluidos

### **1. AdvancedCalculator.sol**
Un contrato inteligente en Solidity con estructura profesional que incluye:

- Suma (`uint256`)
- Resta (`uint256`)
- Resta con enteros firmados (`int256`)
- Multiplicadores
- Validación de entradas usando *modifiers*
- Documentación NatSpec para entornos profesionales
- Separación clara entre lógica interna y externa

Este contrato es ideal como tu primera entrada “formal” en tu portafolio blockchain.

---

## 🚀 Cómo Usar el Contrato

### ✔ Compilar
1. Abre **Remix IDE**
2. Crea un archivo nuevo: `AdvancedCalculator.sol`
3. Pega el código del contrato
4. Selecciona la versión del compilador: **0.8.24**
5. Haz clic en **Compile AdvancedCalculator.sol**

### ✔ Desplegar
1. Ve a **Deploy & Run Transactions**
2. Ambiente → **Remix VM**, **Injected Provider**, o **MetaMask**
3. Haz clic en **Deploy**

---

## 🧪 Ejemplos de Interacción

| Función | Descripción |
|---------|-------------|
| `addition(10, 5)` | Devuelve 15 |
| `subtraction(10, 3)` | Devuelve 7 |
| `subtractionSigned(-5, -20)` | Devuelve 15 |
| `multiplier(3)` | `result` se convierte en `result * 3` |
| `multiplierStrict(10)` | Solo funciona si la entrada es exactamente 10 |

---

## 📘 Visión del Repositorio

A medida que este camino continúe, se agregarán futuras implementaciones como:

- Patrones de seguridad (Checks-Effects-Interactions, protecciones contra reentrancy)
- Desarrollo de un token ERC-20 (**Token QTA**)
- Control de acceso (Ownable, Roles)
- Smart contracts actualizables (upgradeables)
- Técnicas de optimización de gas
- Proyectos completos dApp (front-end + smart contracts)
- Desarrollo del ecosistema **QUANTIA**

---

## 👤 Autor

**Jorge Paez**  
Desarrollador Blockchain (Solidity – Ethereum)  
Expansión Global | Ingeniería de Smart Contracts | Desarrollo Enfocado en Seguridad

---

## 📄 Licencia

Este repositorio utiliza la licencia **LGPL-3.0-only**, consistente con los contratos en Solidity incluidos.
