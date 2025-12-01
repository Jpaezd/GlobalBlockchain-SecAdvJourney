// SPDX-License-Identifier: LGPL-3.0-only
pragma solidity 0.8.24;

/**
 * @title Sender
 * @notice Este contrato almacena la dirección de la cuenta que lo despliega.
 * @dev Demuestra cómo funcionan los constructores y cómo se usa msg.sender durante el despliegue.
 */
contract Sender {
    /// @notice Dirección del despliegue del contrato (propietario inicial)
    address public owner;

    /**
     * @notice Se ejecuta una sola vez cuando el contrato es desplegado.
     * @dev Asigna como owner la dirección que despliega el contrato.
     */
    constructor() {
        owner = msg.sender;
    }
}
