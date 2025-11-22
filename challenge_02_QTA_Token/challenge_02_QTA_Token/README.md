🌐 Languages  
🇺🇸 English (default)  
🇪🇸 Español  

# GlobalBlockchain-SecAdvJourney – Challenge 02: QTA Token

Un repositorio profesional que documenta el viaje de desarrollo blockchain de Jorge Paez, enfocado en **ingeniería de contratos inteligentes segura**, patrones avanzados de Solidity y buenas prácticas de la industria.

Este desafío incluye el token **QUANTIA ($QTA)** ERC20, desplegado y verificado en **Arbitrum One**, sirviendo como un ejemplo claro de desarrollo de tokens, funciones burnable y despliegue de contratos inteligentes verificados.

---

📌 **Objetivo del Proyecto**  
Este desafío sirve como demostración de:  

- Prácticas profesionales de desarrollo en Solidity  
- Estructura de código limpia y patrones de diseño  
- Conciencia sobre seguridad en contratos inteligentes  
- Contratos transparentes y verificados, adecuados para portafolio y revisión profesional  
- Demostración educativa de la mecánica de tokens ERC20  

---

📁 **Archivos Incluidos**  
challenge_02_QTA_Token/
├── QTA.sol # Contrato ERC20 principal
├── README.md # Este archivo
└── LICENSE # Licencia LGPL-3.0-only


---

🚀 **Funciones Principales del Token QTA**  

| Función / Característica | Descripción |
|-------------------------|-------------|
| `transfer`              | Función estándar de transferencia ERC20 |
| `balanceOf`             | Consultar el balance de tokens de una cuenta |
| `allowance`             | Consultar el permiso para transferencias delegadas |
| `approve`               | Aprobar que otra cuenta gaste tokens |
| `transferFrom`          | Transferir tokens desde una cuenta aprobada |
| `burn`                  | Quemar tokens desde la propia cuenta (ERC20Burnable) |
| `burnFrom`              | Quemar tokens desde otra cuenta (ERC20Burnable) |

- Suministro total: 100,000,000 QTA  
- Blockchain: Arbitrum One  
- Código fuente verificado: [Arbiscan](https://arbiscan.io/address/0xE30ca7b05c1FD031Ce53BE8C711696B33fE6cB70)  
- Licencia: LGPL-3.0-only  

---

🧪 **Cómo Usar el Contrato**  

✔ **Compilar**  
1. Abrir Remix IDE  
2. Crear un nuevo archivo: `QTA.sol`  
3. Pegar el código del contrato  
4. Seleccionar la versión del compilador: `0.8.24`  
5. Hacer clic en **Compile QTA.sol**  

✔ **Desplegar**  
1. Bajo **Deploy & Run Transactions**  
2. Environment → Remix VM, Injected Provider o MetaMask  
3. Hacer clic en **Deploy**  

✔ **Interactuar**  
- Usar las pestañas **Read Contract** y **Write Contract** en Arbiscan para consultar balances, transferir tokens y quemar tokens.  

---

📘 **Visión del Repositorio**  
A medida que este viaje continúa, futuros desafíos pueden incluir:  

- Patrones de seguridad avanzados (Checks-Effects-Interactions, Reentrancy Guards)  
- Desarrollo de tokens ERC20 (QTA Token y futuros tokens)  
- Control de acceso (Ownable, Roles)  
- Contratos actualizables  
- Técnicas de optimización de gas  
- Proyectos completos de dApp (frontend + contratos inteligentes)  
- Desarrollo del ecosistema QUANTIA  

---

👤 **Autor**  
Jorge Paez  
Blockchain Developer (Solidity – Ethereum)  
Expansión Global | Ingeniería de Contratos Inteligentes | Desarrollo enfocado en Seguridad  

---

📄 **Licencia**  
Este proyecto utiliza la licencia **LGPL-3.0-only**, consistente con los contratos Solidity incluidos.

