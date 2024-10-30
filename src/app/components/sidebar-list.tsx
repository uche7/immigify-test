import React, { useMemo, useState } from "react";
import Image from "next/image";
import { dashboardSidebar } from "./dashboard.dto";
import { useRouter } from "next/navigation";

export const SidebarList = ({ isOpen }: { isOpen?: unknown }) => {
  const Router = useRouter();
  const investorSidebarData = useMemo(() => dashboardSidebar(Router), [Router]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number, route?: () => void) => {
    setActiveIndex(index);
    if (route) {
      route();
    }
  };

  const desktopView = () => {
    return (
      <>
        {investorSidebarData.map((item, index) => (
          <div
            key={index}
            className={`flex items-center p-2 mt-2 mx-[16px] TabletScreen:hidden MobileScreen:hidden rounded-md cursor-pointer ${
              activeIndex === index
                ? "border-r-[#000000] border-r-[2px]"
                : "hover:border-r-[#000000] hover:border-r-[2px]"
            }`}
            onClick={() => handleClick(index, item.route)}
          >
            <Image
              className="hover:text-[#199B6C]"
              src={item.Icon}
              alt={item.text}
            />
            <span
              className={`ml-4 ${
                !isOpen && "hidden"
              } font-[400] hover:font-[500] text-[16px] leading-[19.09px] group-hover:block select-none`}
            >
              {item.text}
            </span>
          </div>
        ))}
      </>
    );
  };

  /** Tablet View */
  const tabletView = () => {
    return (
      <>
        {investorSidebarData.map((item, index) => (
          <div
            key={index}
            className={`flex items-center p-2 mt-2 mx-[16px] DesktopScreen:hidden MobileScreen:hidden rounded-md cursor-pointer ${
              activeIndex === index
                ? "border-r-[#000000] border-r-[2px]"
                : "hover:border-r-[#000000] hover:border-r-[2px]"
            }`}
            onClick={() => handleClick(index, item.route)}
          >
            <Image
              className="hover:text-[#199B6C]"
              src={item.Icon}
              alt={item.text}
            ></Image>
            <span className="ml-4 font-[400] hover:font-[500] text-[16px] leading-[19.09px] group-hover:block select-none">
              {item.text}
            </span>
          </div>
        ))}
      </>
    );
  };

  /** Mobile View */
  const mobileView = () => {
    return (
      <>
        {investorSidebarData.map((item, index) => (
          <div
            key={index}
            className={`flex items-center p-2 mt-2 mx-[16px] DesktopScreen:hidden TabletScreen:hidden rounded-md cursor-pointer ${
              activeIndex === index
                ? "border-r-[#000000] border-r-[2px]"
                : "hover:border-r-[#000000] hover:border-r-[2px]"
            }`}
            onClick={() => handleClick(index, item.route)}
          >
            <Image
              className="hover:text-[#199B6C]"
              src={item.Icon}
              alt={item.text}
            ></Image>
            <span className="ml-4 font-[400] hover:font-[500] text-[16px] leading-[19.09px] group-hover:block select-none">
              {item.text}
            </span>
          </div>
        ))}
      </>
    );
  };
  return (
    <section>
      {desktopView()}
      {tabletView()}
      {mobileView()}
    </section>
  );
};
