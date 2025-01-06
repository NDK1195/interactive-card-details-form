import iconComplete from "../images/icon-complete.svg";

function Thankyou() {
  return (
    <div className="mx-auto flex w-full max-w-[381px] flex-col items-center px-6 lg:mx-0 lg:px-0 xl:mr-[227px]">
      <img src={iconComplete} alt="icon complete" className="mb-[35px]" />
      <h2 className="mb-4 text-[28px] font-medium leading-none tracking-[3.422px] text-very-dark-violet">
        THANK YOU!
      </h2>
      <p className="mb-12 text-lg font-medium leading-none text-dark-grayish-violet">
        We’ve added your card details
      </p>
      <button className="w-full rounded-lg bg-very-dark-violet py-[17.5px] text-lg font-medium leading-none text-white transition-opacity hover:opacity-85">
        Continue
      </button>
    </div>
  );
}
export default Thankyou;
