const getInputNumbersValue = (input) => {
  return input.value.replace(/\D/g, "");
};

export const onPhoneInput = (e) => {
  const input = e.target;
  let inputNumbersValue = getInputNumbersValue(input);
  let formatedInputValue;
  let selectionStart = input.selectionStart;

  if (!inputNumbersValue) {
    return (input.value = "");
  }

  if (input.value.length !== selectionStart) {
    if (e.nativeEvent.data && /\D/g.test(e.nativeEvent.data))
      input.value = inputNumbersValue;
    return;
  }

  if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
    if (inputNumbersValue[0] === "9")
      inputNumbersValue = `7${inputNumbersValue}`;
    let firstSimbols = inputNumbersValue[0] === "8" ? "+7" : "+7";
    formatedInputValue = firstSimbols + " ";

    if (inputNumbersValue.length > 1) {
      formatedInputValue += "(" + inputNumbersValue.substring(1, 4);
    }

    if (inputNumbersValue.length >= 5) {
      formatedInputValue += ") " + inputNumbersValue.substring(4, 7);
    }

    if (inputNumbersValue.length >= 8) {
      formatedInputValue += "-" + inputNumbersValue.substring(7, 9);
    }

    if (inputNumbersValue.length >= 10) {
      formatedInputValue += "-" + inputNumbersValue.substring(9, 11);
    }
  } else {
    // not ru
    // formatedInputValue = `+${inputNumbersValue.substring(0, 16)}`;
    formatedInputValue = "";
  }

  input.value = formatedInputValue;
};

export const onPhoneKeyDown = (e) => {
  const input = e.target;
  if (e.keyCode === 8 && getInputNumbersValue(input).length === 1) {
    input.value = "";
  }
};
