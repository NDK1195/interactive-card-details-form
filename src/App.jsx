import { useState } from "react";
import Card from "./components/Card";
import Thankyou from "./components/Thankyou";
import Form from "./components/Form";

function App() {
  const [isCompleted, setIsCompleted] = useState(false);
  const [cardData, setCardData] = useState({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });

  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[91px] lg:flex-row lg:justify-between lg:gap-0">
      {/* background main */}
      <div className="h-[240px] bg-main-mobile bg-cover bg-center bg-no-repeat lg:min-h-dvh lg:w-[483px] lg:bg-main-desktop">
        <Card cardData={cardData} />
      </div>
      {/* background main */}

      {/* thank you */}
      {isCompleted && (
        <Thankyou
          setIsCompleted={() => setIsCompleted(false)}
          setCardData={setCardData}
        />
      )}
      {/* thank you */}

      {/* form */}
      {!isCompleted && (
        <Form
          setIsCompleted={() => setIsCompleted(true)}
          setCardData={setCardData}
          cardData={cardData}
        />
      )}
      {/* form */}
    </div>
  );
}
export default App;
