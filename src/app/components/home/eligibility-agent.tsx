import React from "react";
import Image from "next/image";
import LoadingDots from "../loading-dots";
import ShieldRegularIcon from "@/assets/images/icons/shield-regular-icon.svg";

/** Eligibility Agent */
export function EligibilityAgent({
  selectedCountry,
  selectedOccupation,
}: {
  selectedCountry: string | null;
  selectedOccupation: string | null;
}) {
  return (
    <div className="pt-[30px] lg:px-4 lg:border-l-[1px]">
      <div className="flex flex-row gap-[4px] items-center mb-[15px]">
        <Image src={ShieldRegularIcon} alt={"Shield Icon"} />
        <h1 className="font-[700] text-[18px] leading-[24.01px]">
          Eligibility Agent
        </h1>
      </div>
      <p className="font-[400] text-[16px] leading-[24.01px] ">
        Based on your profile, below are the listed Visa Types you are eligible
        for:
      </p>
      {!selectedCountry && !selectedOccupation && (
        <div className="mt-[150px]">
          <LoadingDots />
        </div>
      )}

      {/* Conditionally render different visa types based on selected country */}
      <div className="mt-2 font-[400] text-[16px] leading-[24.01px]">
        {selectedCountry === "Nigeria" && (
          <div className="flex flex-col gap-[5px] ">
            <div className="rounded-[20px] shadow-md p-4 font-[400] text-[14px] leading-[24px]">
              <p className="font-[700] mb-2">H-1B Visa (Skilled Worker)</p>
              <p>Key Eligibility Criteria Met:</p>

              <li>Undergraduate Degree</li>
              <li>Nigerian</li>
              <li>Job Experience</li>
            </div>
            <div className="rounded-[20px] shadow-md p-4 font-[400] text-[14px] leading-[24px]">
              <p className="font-[700] text-[13px] mb-2">
                EB-2 Visa (Employment-Based Green Card for Advanced Degree
                Holders or Exceptional Ability)
              </p>
              <p>Key Eligibility Criteria Met:</p>

              <li>Undergraduate Degree</li>
              <li>Significant Skills</li>
              <li>Job Experience</li>
            </div>
            <div className="rounded-[20px] shadow-md p-4 font-[400] text-[14px] leading-[24px]">
              <p className="font-[700] mb-2">
                O-1 Visa (Extraordinary Ability)
              </p>
              <p>Key Eligibility Criteria Met:</p>

              <li>Undergraduate Degree</li>
              <li>Achievements or Unique skills</li>
              <li>Job Experience</li>
            </div>
          </div>
        )}
        {selectedOccupation  && (
          <div className="rounded-[20px] shadow-md p-4 font-[400] text-[14px] leading-[24px]">
            <p className="font-[700] mb-2">H-1B Visa (Skilled Worker)</p>
            <p>Key Eligibility Criteria Met:</p>

            <li>Undergraduate Degree</li>
            <li>Nigerian</li>
            <li>Job Experience</li>
          </div>
        )}
      </div>
    </div>
  );
}
