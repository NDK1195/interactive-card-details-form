import bgCardBack from "../images/bg-card-back.png";
import bgCardFront from "../images/bg-card-front.png";
import cardLogo from "../images/card-logo.svg";
function Card() {
  return (
    <>
      {/*  card back */}
      <div className="relative left-7 top-8 mx-auto max-w-[286px] lg:left-[258px] lg:top-[469px] lg:mx-0 lg:max-w-[447px]">
        <img src={bgCardBack} alt="background card back" />
        <span className="absolute right-9 top-[74px] text-[9px] font-medium leading-none tracking-[1.286px] text-white lg:right-[57px] lg:top-[111px] lg:text-sm lg:tracking-[2px]">
          000
        </span>
      </div>
      {/*  card back */}

      {/*  card front */}
      <div className="relative -left-7 bottom-9 mx-auto max-w-[286px] lg:bottom-14 lg:left-[164px] lg:mx-0 lg:max-w-[447px]">
        <img src={bgCardFront} alt="background card front" />
        <div className="absolute left-0 top-0 h-full w-full pb-[19.6px] pl-[19px] pr-[20.89px] pt-[17.6px] text-white lg:px-8 lg:pb-[26.5px] lg:pt-[28px]">
          <img
            src={cardLogo}
            alt="card logo"
            className="mb-[37px] w-14 lg:mb-16 lg:w-[84px]"
          />
          <p className="mb-[17px] text-lg font-medium leading-none tracking-[2.2px] lg:mb-[25.5px] lg:text-[28px] lg:tracking-[3.422px]">
            0000 0000 0000 0000
          </p>
          <div className="flex items-center justify-between text-[9px] font-medium uppercase leading-none tracking-[1.286px] lg:text-sm lg:tracking-[2px]">
            <h1>JANE APPLESEED</h1>
            <p>00/00</p>
          </div>
        </div>
      </div>
      {/*  card front */}
    </>
  );
}
export default Card;
