// SPDX-License-Identifier: LGPL-3.0-only
pragma solidity 0.8.24;

/// @title Advanced Calculator Contract
/// @author Jorge Paez
/// @notice This contract provides basic arithmetic operations
///         including addition, subtraction (unsigned and signed),
///         and multipliers with optional input validation.
/// @dev Internal logic functions are used to separate computation
///      from external execution for cleaner architecture.

contract AdvancedCalculator {

    // ---------------------------------------------------------
    // State Variables
    // ---------------------------------------------------------

    /// @notice Stores the current result used by multiplier functions
    uint256 public result = 10;


    // ---------------------------------------------------------
    // Modifiers
    // ---------------------------------------------------------

    /// @notice Ensures that a given number must be exactly 10
    /// @param number The number to validate
    modifier validateNumber(uint256 number) {
        require(number == 10, "Input must be exactly 10");
        _;
    }


    // ---------------------------------------------------------
    // Events
    // ---------------------------------------------------------

    /// @notice Emitted when an addition operation is executed
    event Addition(uint256 number1, uint256 number2, uint256 finalResult);

    /// @notice Emitted when an unsigned subtraction is performed
    event Subtraction(uint256 number1, uint256 number2, uint256 finalResult);


    // ---------------------------------------------------------
    // External/Public Functions
    // ---------------------------------------------------------

    /// @notice Adds two unsigned integers
    /// @param num1 First value
    /// @param num2 Second value
    /// @return finalResult The result of num1 + num2
    function addition(uint256 num1, uint256 num2)
        public
        returns (uint256 finalResult)
    {
        finalResult = num1 + num2;
        emit Addition(num1, num2, finalResult);
        return finalResult;
    }

    /// @notice Subtracts two unsigned integers
    /// @param num1 First value
    /// @param num2 Second value
    /// @return finalResult The result of num1 - num2
    function subtraction(uint256 num1, uint256 num2)
        public
        returns (uint256 finalResult)
    {
        finalResult = _subtractionLogic(num1, num2);
        emit Subtraction(num1, num2, finalResult);
        return finalResult;
    }

    /// @notice Subtracts two signed integers
    /// @param num1 First signed value
    /// @param num2 Second signed value
    /// @return finalResult Signed result of num1 - num2
    function subtractionSigned(int256 num1, int256 num2)
        public
        pure
        returns (int256 finalResult)
    {
        finalResult = _subtractionLogicSigned(num1, num2);
        return finalResult;
    }

    /// @notice Multiplies the stored `result` by a given number
    /// @param num The number to multiply by
    function multiplier(uint256 num) public {
        result = result * num;
    }

    /// @notice Multiplies the stored `result` by a number,
    ///         but only if the number is exactly 10
    /// @param num The number to multiply by (must be 10)
    function multiplierStrict(uint256 num)
        public
        validateNumber(num)
    {
        result = result * num;
    }


    // ---------------------------------------------------------
    // Internal Logic Functions
    // ---------------------------------------------------------

    /// @dev Internal unsigned subtraction logic
    function _subtractionLogic(uint256 num1, uint256 num2)
        internal
        pure
        returns (uint256)
    {
        return num1 - num2;
    }

    /// @dev Internal signed subtraction logic
    function _subtractionLogicSigned(int256 num1, int256 num2)
        internal
        pure
        returns (int256)
    {
        return num1 - num2;
    }
}
