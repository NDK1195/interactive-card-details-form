import { useState } from "react";

function Form({ setIsCompleted, setCardData, cardData }) {
  const [blankError, setBlankError] = useState({
    name: false,
    number: false,
    month: false,
    year: false,
    cvc: false,
  });

  const [wrongFormatError, setWrongFormatError] = useState({
    number: false,
    month: false,
    year: false,
    cvc: false,
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setCardData({ ...cardData, [name]: value });
  }

  function handleCardNumberChange(e) {
    let input = e.target.value.replace(/\s/g, ""); // Remove existing blank spaces
    let formattedInput = "";

    for (let i = 0; i < input.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedInput += " "; // Add a blank space after every 4 characters
      }
      formattedInput += input[i];
    }

    setCardData({ ...cardData, number: formattedInput.trim() }); // Update the input value in state
  }

  function validateInput() {
    let isValidate = true;
    if (cardData.name === "") {
      setBlankError((prevState) => {
        return { ...prevState, name: true };
      });
      isValidate = false;
    }
    if (cardData.number === "") {
      setBlankError((prevState) => {
        return { ...prevState, number: true };
      });
      isValidate = false;
    }

    if (
      cardData.number.length !== 19 ||
      Number.isNaN(Number(cardData.number.split(" ").join("")))
    ) {
      setWrongFormatError((prevState) => {
        return { ...prevState, number: true };
      });
      isValidate = false;
    }

    if (cardData.month === "") {
      setBlankError((prevState) => {
        return { ...prevState, month: true };
      });
      isValidate = false;
    }

    if (cardData.month > 12 || Number.isNaN(Number(cardData.month))) {
      setWrongFormatError((prevState) => {
        return { ...prevState, month: true };
      });
      isValidate = false;
    }

    if (cardData.year === "") {
      setBlankError((prevState) => {
        return { ...prevState, year: true };
      });
      isValidate = false;
    }

    if (Number.isNaN(Number(cardData.year))) {
      setWrongFormatError((prevState) => {
        return { ...prevState, year: true };
      });
      isValidate = false;
    }

    if (cardData.cvc === "") {
      setBlankError((prevState) => {
        return { ...prevState, cvc: true };
      });
      isValidate = false;
    }

    if (Number.isNaN(Number(cardData.cvc))) {
      setWrongFormatError((prevState) => {
        return { ...prevState, cvc: true };
      });
      isValidate = false;
    }

    return isValidate;
  }

  function handleFocus(e) {
    const { name } = e.target;
    setBlankError({ ...blankError, [name]: false });
    setWrongFormatError({ ...wrongFormatError, [name]: false });
  }
  function handleSubmit(e) {
    e.preventDefault();

    const isValidate = validateInput();
    console.log(isValidate);

    if (isValidate) {
      setIsCompleted();
    }
  }

  return (
    <form
      className="mx-auto flex w-full max-w-[381px] flex-col gap-5 px-6 lg:mx-0 lg:mt-[275px] lg:gap-[26px] lg:px-0 xl:mr-[227px]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-xs font-medium uppercase leading-none tracking-[2px] text-very-dark-violet"
        >
          Cardholder Name
        </label>
        <input
          type="text"
          className={`${blankError.name ? "border-red" : "border-light-grayish-violet"} h-[45px] rounded-lg border px-4 text-lg font-medium leading-none text-very-dark-violet outline-none placeholder:opacity-25`}
          placeholder="e.g. Jane Appleseed"
          id="name"
          name="name"
          value={cardData.name}
          onChange={handleChange}
          onFocus={handleFocus}
          maxLength={30}
        />
        {blankError.name && (
          <p className="text-xs font-medium leading-none text-red">
            Can’t be blank
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="number"
          className="text-xs font-medium uppercase leading-none tracking-[2px] text-very-dark-violet"
        >
          Card Number
        </label>
        <input
          type="text"
          className={`${blankError.number || wrongFormatError.number ? "border-red" : "border-light-grayish-violet"} h-[45px] rounded-lg border px-4 text-lg font-medium leading-none text-very-dark-violet outline-none placeholder:opacity-25`}
          placeholder="e.g. 1234 5678 9123 0000"
          id="number"
          name="number"
          value={cardData.number}
          maxLength={19}
          onChange={handleCardNumberChange}
          onFocus={handleFocus}
        />
        <p className="text-xs font-medium leading-none text-red">
          {blankError.number
            ? "Can’t be blank"
            : wrongFormatError.number && cardData.number.length !== 19
              ? "Wrong format, 16 digits required"
              : wrongFormatError.number
                ? "Wrong format, numbers only"
                : ""}
        </p>
      </div>

      <div className="flex gap-[11px] lg:gap-5">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="date"
            className="text-xs font-medium uppercase leading-none tracking-[2px] text-very-dark-violet"
          >
            Exp. Date (MM/YY)
          </label>
          <div className="flex gap-2 lg:gap-[10px]">
            <input
              type="text"
              className={`${blankError.month || wrongFormatError.month ? "border-red" : "border-light-grayish-violet"} h-[45px] max-w-[72px] rounded-lg border border-light-grayish-violet px-4 text-lg font-medium leading-none text-very-dark-violet outline-none placeholder:opacity-25 lg:max-w-20`}
              placeholder="MM"
              id="date"
              name="month"
              value={cardData.month}
              maxLength={2}
              onChange={handleChange}
              onFocus={handleFocus}
            />
            <input
              type="text"
              className={`${blankError.year || wrongFormatError.year ? "border-red" : "border-light-grayish-violet"} h-[45px] max-w-[72px] rounded-lg border border-light-grayish-violet px-4 text-lg font-medium leading-none text-very-dark-violet outline-none placeholder:opacity-25 lg:max-w-20`}
              placeholder="YY"
              id="date"
              name="year"
              value={cardData.year}
              maxLength={2}
              onChange={handleChange}
              onFocus={handleFocus}
            />
          </div>
          <p className="text-xs font-medium leading-none text-red">
            {blankError.month || blankError.year
              ? "Can’t be blank"
              : wrongFormatError.month && cardData.month > 12
                ? "Month should be from 1 to 12"
                : wrongFormatError.month || wrongFormatError.year
                  ? "Wrong format, numbers only"
                  : ""}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="cvc"
            className="text-xs font-medium uppercase leading-none tracking-[2px] text-very-dark-violet"
          >
            Cvc
          </label>
          <input
            type="text"
            className={`${blankError.cvc || wrongFormatError.cvc ? "border-red" : "border-light-grayish-violet"} h-[45px] max-w-[164px] rounded-lg border border-light-grayish-violet px-4 text-lg font-medium leading-none text-very-dark-violet outline-none placeholder:opacity-25 lg:max-w-[191px]`}
            placeholder="e.g. 123"
            id="cvc"
            name="cvc"
            value={cardData.cvc}
            maxLength={3}
            onChange={handleChange}
            onFocus={handleFocus}
          />
          <p className="text-xs font-medium leading-none text-red">
            {blankError.cvc
              ? "Can’t be blank"
              : wrongFormatError.cvc
                ? "Wrong format, numbers only"
                : ""}
          </p>
        </div>
      </div>

      <button
        className="mt-2 w-full rounded-lg bg-very-dark-violet py-[17.5px] text-lg font-medium leading-none text-white transition-opacity hover:opacity-85 lg:mt-[14px]"
        type="submit"
      >
        Confirm
      </button>
    </form>
  );
}
export default Form;
