function Form() {
  return (
    <form className="mx-auto flex w-full max-w-[381px] flex-col gap-5 px-6 lg:mx-0 lg:gap-[26px] lg:px-0 xl:mr-[227px]">
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-xs font-medium uppercase leading-none tracking-[2px] text-very-dark-violet"
        >
          Cardholder Name
        </label>
        <input
          type="text"
          className="h-[45px] rounded-lg border border-light-grayish-violet px-4 text-lg font-medium leading-none text-very-dark-violet outline-none placeholder:opacity-25"
          placeholder="e.g. Jane Appleseed"
          id="name"
        />
        <p className="text-xs font-medium leading-none text-red">
          Can’t be blank
        </p>
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
          className="h-[45px] rounded-lg border border-light-grayish-violet px-4 text-lg font-medium leading-none text-very-dark-violet outline-none placeholder:opacity-25"
          placeholder="e.g. 1234 5678 9123 0000"
          id="number"
          maxLength={16}
        />
        <p className="text-xs font-medium leading-none text-red">
          Can’t be blank
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
              className="h-[45px] max-w-[72px] rounded-lg border border-light-grayish-violet px-4 text-lg font-medium leading-none text-very-dark-violet outline-none placeholder:opacity-25 lg:max-w-20"
              placeholder="MM"
              id="date"
              maxLength={2}
            />
            <input
              type="text"
              className="h-[45px] max-w-[72px] rounded-lg border border-light-grayish-violet px-4 text-lg font-medium leading-none text-very-dark-violet outline-none placeholder:opacity-25 lg:max-w-20"
              placeholder="YY"
              id="date"
              maxLength={2}
            />
          </div>
          <p className="text-xs font-medium leading-none text-red">
            Can’t be blank
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
            className="h-[45px] max-w-[164px] rounded-lg border border-light-grayish-violet px-4 text-lg font-medium leading-none text-very-dark-violet outline-none placeholder:opacity-25 lg:max-w-[191px]"
            placeholder="e.g. 123"
            id="cvc"
            maxLength={3}
          />
          <p className="text-xs font-medium leading-none text-red">
            Can’t be blank
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
