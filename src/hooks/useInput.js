import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  // HOOKS
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);


const valueIsValid = validationFn(enteredValue)

  // CUSTOM HANDLER FUNCTIONS
  function handleInputChange(event) {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }

  return {
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !valueIsValid
  }
}
