import React, { useState } from "react";

const Stepper = ({ steps }: { steps: string[] }) => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="stepper TabletScreen:hidden MobileScreen:hidden">
      {steps.map((step, index) => (
        <div key={index}>
          <div className="step">
            <div
              className={`dot ${index === currentStep ? "active" : "opacity-20"}`}
              onClick={() => setCurrentStep(index)}
            />
            {index < steps.length - 1 && <div className="line"></div>}
          </div>
          <div className="w-[73px] mr-6 font-[500] text-[13px]">{step}</div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
