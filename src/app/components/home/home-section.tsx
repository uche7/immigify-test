import React from "react";
import Image from "next/image";
import LogoIcon from "@/assets/images/logo-icon.svg";
import SearchIcon from "@/assets/images/icons/search-icon.svg";
import RestartIcon from "@/assets/images/icons/restart-icon.svg";
import SendIcon from "@/assets/images/icons/send-icon.svg";
import { countryList, occupationList } from "./home.dto";

/** Home Section */
export function HomeSection({
  selectedCountry,
  selectedOccupation,
  setSelectedCountry,
  setSelectedOccupation,
}: {
  selectedCountry: string | null;
  selectedOccupation: string | null;
  setSelectedCountry: React.Dispatch<React.SetStateAction<string | null>>;
  setSelectedOccupation: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const getDegreeText = () => {
    switch (selectedCountry) {
      case "Nigeria":
        return "Nigeria";
      case "South Africa":
        return "South Africa";
      case "Ghana":
        return "Ghana";
      default:
        return "Undergraduate Degree";
    }
  };

  const getOccupationText = (selectedOccupation: string | null) => {
    switch (selectedOccupation) {
      case "Engineering":
        return "Engineering";
      case "Healthcare":
        return "Healthcare";
      case "Education":
        return "Education";
      case "Information Technology":
        return "Information Technology";
      case "Finance & Accounting":
        return "Finance & Accounting";
      case "Marketing & Communication":
        return "Marketing & Communication";
      case "Arts & Entertainment":
        return "Arts & Entertainment";
      case "Hospitality & Tourism":
        return "Hospitality & Tourism";
      case "Legal & Law Enforcement":
        return "Legal & Law Enforcement";
      case "Construction & Manu.":
        return "Construction & Manu.";
      default:
        return "Undergraduate Degree";
    }
  };

  const restart = () => {
    setSelectedCountry(null);
    setSelectedOccupation(null);
  };

  const handleOccupationChange = (occupation: string) => {
    setSelectedOccupation(occupation);
    setSelectedCountry(null);
  };

  return (
    <div className="lg:w-[645px] flex flex-col gap-[30px] lg:border-[#DADADA] lg:border-[1px] rounded-[30px] lg:px-[5%] px-[2%md:] py-[25px]">
      <div>
        <div className="flex flex-row gap-[4px] items-center">
          <Image src={LogoIcon} alt={"Logo Icon"} />
          <h1 className="font-[700] text-[24px] leading-[36px]">
            Hello, Anthony
          </h1>
        </div>
        <div className="flex md:flex-row flex-col justify-between items-center">
          <p className="font-[300] text-[#686868] text-[13px] leading-[27px]">
            Keep interacting with your personal immigration assistant
          </p>
          <button className="MobileScreen:w-full bg-slate-100 py-2 px-[10px] flex flex-row gap-[4px] justify-center items-center shadow-sm rounded-md">
            <Image src={RestartIcon} alt={"Restart Icon"} />
            <span
              onClick={restart}
              className="font-[500] md:text-[16px] text-[12px] leading-[24px]"
            >
              Restart
            </span>
          </button>
        </div>
      </div>
      <div className="bg-[#FAFAFA] flex flex-col gap-[10px] border-[#030202] rounded-[30px] px-[3%] py-[25px]">
        <div className="flex justify-end">
          <p className="font-[700] text-[14px] leading-[21px]">Anthony</p>
        </div>
        <div className="bg-white flex justify-end rounded p-2">
          {getDegreeText() !== "Undergraduate Degree" ? (
            <p className="font-[400] text-[16px] leading-[27px]">
              {getDegreeText()}
            </p>
          ) : (
            <p className="font-[400] text-[16px] leading-[27px]">
              {getOccupationText(selectedOccupation)}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-[10px]">
          <h1 className="font-[700] text-[14px] leading-[21px]">Agent</h1>
          {selectedCountry === "Nigeria" ||
          selectedCountry === "South Africa" ||
          selectedCountry === "Ghana" ? (
            <div className="bg-white rounded py-2 px-[3%]">
              <h3 className="font-[400] text-[16px] leading-[27px] pb-[16px] mb-[20px] border-b-[1px]">
                What’s your current occupation?
              </h3>
              <div className="flex flex-row flex-wrap gap-[10px] mb-[25px]">
                {occupationList.map((occupation) => (
                  <button
                    key={occupation.id}
                    onClick={() => handleOccupationChange(occupation.name)}
                    className="flex flex-row items-center gap-[3px] py-[3px] px-[5px] border-[1px] 
                     border-[#CCCCCC] rounded-[10px] text-[12px] leading-[20px] lg:py-[5px] lg:px-[10px] lg:text-[14px] lg:leading-[24px]"
                  >
                    <span className="font-[400]">{occupation.name}</span>
                  </button>
                ))}
              </div>
              <div className="flex lg:flex-row flex-col justify-between items-center gap-[10px]">
                <div className="font-[400] md:text-[16px] text-[12px] leading-[24px]">
                  Occupation Not Listed above?
                </div>
                <div className="flex flex-row gap-[4px]">
                  <input
                    className="w-full focus:outline-none focus:ring-0 border-b-[2px]"
                    placeholder="Type in your occupation"
                    type="text"
                  />
                  <button className="bg-black flex flex-colitems-center py-[3px] px-[5px] rounded text-[12px] leading-[20px] lg:px-[8px] lg:py-[7px] lg:text-[14px] lg:leading-[24px]">
                    <Image src={SendIcon} alt={"Send Icon"} />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              {selectedOccupation && (
                <div className="bg-white rounded py-2 px-[3%]">
                  <h3 className="font-[400] text-[16px] leading-[27px] pb-[16px] mb-[20px] border-b-[1px]">
                    What’s your current occupation?
                  </h3>
                  <div className="flex flex-row flex-wrap gap-[10px] mb-[25px]">
                    {occupationList.map((occupation) => (
                      <button
                        key={occupation.id}
                        onClick={() => handleOccupationChange(occupation.name)}
                        className="flex flex-row items-center gap-[3px] py-[3px] px-[5px] border-[1px] 
                      border-[#CCCCCC] rounded-[10px] text-[12px] leading-[20px] lg:py-[5px] lg:px-[10px] lg:text-[14px] lg:leading-[24px]"
                      >
                        <span className="font-[400]">{occupation.name}</span>
                      </button>
                    ))}
                  </div>
                  <div className="flex lg:flex-row flex-col justify-between items-center gap-[10px]">
                    <div className="font-[400] md:text-[16px] text-[12px] leading-[24px]">
                      Occupation Not Listed above?
                    </div>
                    <div className="flex flex-row gap-[4px]">
                      <input
                        className="w-full focus:outline-none focus:ring-0 border-b-[2px]"
                        placeholder="Type in your occupation"
                        type="text"
                      />
                      <button className="bg-black flex flex-colitems-center py-[3px] px-[5px] rounded text-[12px] leading-[20px] lg:px-[8px] lg:py-[7px] lg:text-[14px] lg:leading-[24px]">
                        <Image src={SendIcon} alt={"Send Icon"} />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
          {!selectedCountry && !selectedOccupation && (
            <div className="bg-white rounded py-2 px-[3%]">
              <h3 className="font-[400] text-[16px] leading-[27px] pb-[16px] mb-[20px] border-b-[1px]">
                What’s your country of region?
              </h3>
              <div className="flex flex-row flex-wrap gap-[10px]">
                {countryList.map((country) => (
                  <button
                    key={country.id}
                    onClick={() => setSelectedCountry(country.name)}
                    className="flex flex-row items-center gap-[3px] py-[3px] px-[5px] border-[1px] border-[#CCCCCC] rounded-[10px] text-[12px] leading-[20px] lg:py-[5px] lg:px-[10px] lg:text-[14px] lg:leading-[24px]"
                  >
                    <span className="font-[400]">{country.name}</span>
                    <Image src={country.icon} alt={`${country.name} Icon`} />
                  </button>
                ))}
                <button className="bg-black flex flex-col items-center gap-[3px] py-[3px] px-[5px] border-[1px] rounded text-[12px] leading-[20px] lg:px-[8px] lg:py-[7px] lg:text-[14px] lg:leading-[24px]">
                  <Image src={SearchIcon} alt={"Search Icon"} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
