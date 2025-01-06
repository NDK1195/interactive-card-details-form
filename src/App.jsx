import { useState } from "react";
import Card from "./components/Card";
import Thankyou from "./components/Thankyou";
import Form from "./components/Form";

function App() {
  const [isCompleted, setIsCompleted] = useState(false);
  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[91px] lg:flex-row lg:items-center lg:justify-between lg:gap-0">
      {/* background main */}
      <div className="h-[240px] bg-main-mobile bg-cover bg-center bg-no-repeat lg:min-h-dvh lg:w-[483px] lg:bg-main-desktop">
        <Card />
      </div>
      {/* background main */}

      {/* thank you */}
      {isCompleted && <Thankyou />}
      {/* thank you */}

      {/* form */}
      {!isCompleted && <Form />}
      {/* form */}
    </div>
  );
}
export default App;
