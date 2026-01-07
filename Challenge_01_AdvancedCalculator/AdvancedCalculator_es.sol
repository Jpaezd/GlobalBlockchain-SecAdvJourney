// SPDX-License-Identifier: LGPL-3.0-only
pragma solidity 0.8.24;

/// @title Contrato de Calculadora Avanzada
/// @author Jorge Paez
/// @notice Este contrato provee operaciones aritméticas básicas
///         incluyendo suma, resta (sin signo y con signo),
///         y multiplicadores con validación opcional de entrada.
/// @dev Se utilizan funciones internas de lógica para separar
///      el cómputo de la ejecución externa para una arquitectura más limpia.

contract AdvancedCalculator {

    // ---------------------------------------------------------
    // Variables de Estado
    // ---------------------------------------------------------

    /// @notice Almacena el resultado actual utilizado por las funciones multiplicadoras
    uint256 public result = 10;


    // ---------------------------------------------------------
    // Modificadores
    // ---------------------------------------------------------

    /// @notice Garantiza que un número dado debe ser exactamente 10
    /// @param number El número a validar
    modifier validateNumber(uint256 number) {
        require(number == 10, "Input must be exactly 10");
        _;
    }


    // ---------------------------------------------------------
    // Eventos
    // ---------------------------------------------------------

    /// @notice Emitido cuando se ejecuta una operación de suma
    event Addition(uint256 number1, uint256 number2, uint256 finalResult);

    /// @notice Emitido cuando se realiza una resta sin signo
    event Subtraction(uint256 number1, uint256 number2, uint256 finalResult);


    // ---------------------------------------------------------
    // Funciones Externas/Públicas
    // ---------------------------------------------------------

    /// @notice Suma dos enteros sin signo
    /// @param num1 Primer valor
    /// @param num2 Segundo valor
    /// @return finalResult El resultado de num1 + num2
    function addition(uint256 num1, uint256 num2)
        public
        returns (uint256 finalResult)
    {
        finalResult = num1 + num2;
        emit Addition(num1, num2, finalResult);
        return finalResult;
    }

    /// @notice Resta dos enteros sin signo
    /// @param num1 Primer valor
    /// @param num2 Segundo valor
    /// @return finalResult El resultado de num1 - num2
    function subtraction(uint256 num1, uint256 num2)
        public
        returns (uint256 finalResult)
    {
        finalResult = _subtractionLogic(num1, num2);
        emit Subtraction(num1, num2, finalResult);
        return finalResult;
    }

    /// @notice Resta dos enteros con signo
    /// @param num1 Primer valor con signo
    /// @param num2 Segundo valor con signo
    /// @return finalResult Resultado con signo de num1 - num2
    function subtractionSigned(int256 num1, int256 num2)
        public
        pure
        returns (int256 finalResult)
    {
        finalResult = _subtractionLogicSigned(num1, num2);
        return finalResult;
    }

    /// @notice Multiplica el valor almacenado en `result` por un número dado
    /// @param num El número por el que se multiplicará
    function multiplier(uint256 num) public {
        result = result * num;
    }

    /// @notice Multiplica el valor almacenado en `result` por un número,
    ///         pero solo si el número es exactamente 10
    /// @param num El número por el que se multiplicará (debe ser 10)
    function multiplierStrict(uint256 num)
        public
        validateNumber(num)
    {
        result = result * num;
    }


    // ---------------------------------------------------------
    // Funciones Internas de Lógica
    // ---------------------------------------------------------

    /// @dev Lógica interna de resta sin signo
    function _subtractionLogic(uint256 num1, uint256 num2)
        internal
        pure
        returns (uint256)
    {
        return num1 - num2;
    }

    /// @dev Lógica interna de resta con signo
    function _subtractionLogicSigned(int256 num1, int256 num2)
        internal
        pure
        returns (int256)
    {
        return num1 - num2;
    }
}
