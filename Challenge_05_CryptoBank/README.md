
# 🌐 Challenge 05 – **CryptoBank PRO 2026**

![Challenge 05](https://img.shields.io/badge/Challenge-05-CryptoBank-blue)

**Descripción:**
CryptoBank PRO es un **smart contract avanzado** que permite depositar y retirar ETH, interactuar con tokens ERC20, y manejar el contrato con control de propietario (`owner`) y pausa (`paused`). Cada acción genera **eventos** para auditar la actividad.

---

## 🖼 Capturas paso a paso

<div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center;">

<!-- Deploy -->

<div style="border:1px solid #ddd; border-radius:10px; padding:10px; width:250px; box-shadow: 2px 2px 10px rgba(0,0,0,0.1); text-align:center;">
<img src="images/Deploy.png" width="100%"/>
<h3>Deploy</h3>
<p>Contrato desplegado y asignación de owner.</p>
</div>

<!-- Deposit -->

<div style="border:1px solid #ddd; border-radius:10px; padding:10px; width:250px; box-shadow: 2px 2px 10px rgba(0,0,0,0.1); text-align:center;">
<img src="images/DepositETH.png" width="100%"/>
<h3>Depósito ETH</h3>
<p>Se ejecuta <code>depositETHWrapperTEST()</code>. Evento <code>Deposit</code> confirmado.</p>
</div>

<!-- Balance -->

<div style="border:1px solid #ddd; border-radius:10px; padding:10px; width:250px; box-shadow: 2px 2px 10px rgba(0,0,0,0.1); text-align:center;">
<img src="images/Balance.png" width="100%"/>
<h3>Balance</h3>
<p>Consulta del balance del usuario después del depósito.</p>
</div>

<!-- Withdraw -->

<div style="border:1px solid #ddd; border-radius:10px; padding:10px; width:250px; box-shadow: 2px 2px 10px rgba(0,0,0,0.1); text-align:center;">
<img src="images/Withdraw.png" width="100%"/>
<h3>Retiro parcial</h3>
<p>Se retira el 60% del balance del usuario. Evento <code>Withdraw</code> confirmado.</p>
</div>

<!-- New Balance -->

<div style="border:1px solid #ddd; border-radius:10px; padding:10px; width:250px; box-shadow: 2px 2px 10px rgba(0,0,0,0.1); text-align:center;">
<img src="images/NewBalance.png" width="100%"/>
<h3>Nuevo balance</h3>
<p>Se verifica el balance restante después del retiro parcial.</p>
</div>

<!-- Paused -->

<div style="border:1px solid #ddd; border-radius:10px; padding:10px; width:250px; box-shadow: 2px 2px 10px rgba(0,0,0,0.1); text-align:center;">
<img src="images/Paused.png" width="100%"/>
<h3>Pausar contrato</h3>
<p>El propietario pausa el contrato. Depósitos y retiros bloqueados.</p>
</div>

</div>

---

## 💻 Funcionalidades del contrato

* **Owner control:** solo el propietario puede pausar o reanudar el contrato.
* **Paused:** pausa el contrato en caso de emergencia.
* **Deposit / Withdraw ETH:** depositar y retirar ETH parcial o totalmente.
* **Deposit / Withdraw ERC20:** enviar y recibir tokens ERC20.
* **Wrappers externos:** <code>depositETHWrapperTEST()</code> y <code>withdrawETHWrapper()</code> permiten probar en Remix sin tocar la lógica interna.
* **Eventos:** <code>Deposit</code>, <code>Withdraw</code>, <code>TokenDeposit</code>, <code>TokenWithdraw</code>, <code>Paused</code> para auditar la actividad.

---

## ⚡ Uso en Remix

1. Abrir `CryptoBankFinal.sol` en Remix.
2. Compilar con **Solidity 0.8.24+** y EVM `Cancun` o `London`.
3. Desplegar el contrato desde la cuenta que será `owner`.
4. Usar los wrappers externos para probar depósitos y retiros.
5. Revisar los eventos en la pestaña **Logs/Events** para auditar cada acción.

---

## ✅ Conclusión

CryptoBank PRO 2026 es un contrato **seguro, profesional y listo para pruebas**, ideal para:

* Aprender a manejar depósitos y retiros de ETH y ERC20.
* Practicar control de acceso (`owner`) y pausa de contrato.
* Generar eventos para auditar transacciones.
* Integrar con futuras DApps o interfaces externas.

---

