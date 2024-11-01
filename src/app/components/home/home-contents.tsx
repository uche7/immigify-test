import React, { useState } from "react";
import Stepper from "../stepper";
import { HomeSection } from "./home-section";
import { EligibilityAgent } from "./eligibility-agent";

/** Home Contents */
function HomeContents() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedOccupation, setSelectedOccupation] = useState<string | null>(
    null
  );

  return (
    <section className="w-full flex lg:flex-row flex-col gap-[14px] overflow-hidden">
      <div className="flex flex-col gap-[25px]">
        <Stepper
          steps={[
            "Eligibility Agent",
            "Document Agent",
            "Form-Filling Agent",
            "Interview Prep Agent",
          ]}
        />
        <HomeSection
          selectedCountry={selectedCountry}
          selectedOccupation={selectedOccupation}
          setSelectedCountry={setSelectedCountry}
          setSelectedOccupation={setSelectedOccupation}
        />
      </div>
      <EligibilityAgent
        selectedCountry={selectedCountry}
        selectedOccupation={selectedOccupation}
      />
    </section>
  );
}

export default HomeContents;
