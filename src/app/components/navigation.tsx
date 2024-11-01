import React from "react";
import Image from "next/image";
import { GeneralNonAuthRoutes } from "@/utils/urls";
import LogoIcon from "@/assets/images/full-logo-icon.svg";
import MenuIcon from "@/assets/images/icons/menu-icon.svg";
import BellIcon from "@/assets/images/icons/bell-icon.svg";
import ChevronDownIcon from "@/assets/images/icons/chevron-down-icon.svg";
import { useRouter } from "next/navigation";

/** Navigation Bar */
export const NavigationBar = ({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) => {
  const Router = useRouter();
  /** Desktop View */
  const desktopView = () => {
    return (
      <div
        className="TabletScreen:hidden MobileScreen:hidden bg-white flex flex-row justify-between items-center border-b-[1px]
			   py-[13px] px-[28px]"
      >
        <div>
          <Image
            className="lg:w-[186px] h-[46px] cursor-pointer"
            src={LogoIcon}
            alt={"Logo Icon"}
          ></Image>
        </div>
        <div className="flex flex-row gap-[12px]">
          <Image
            className="w-[30px] cursor-pointer"
            src={BellIcon}
            alt="Notification Icon"
            width={40}
          />
          <div className="flex flex-row items-center gap-[4px]">
            <div className="w-[35px] h-[35px] bg-black text-white font-[700] text-[21px] leading-[25.21px] text-center p-1 rounded-full cursor-pointer">
              A
            </div>
            <Image
              className="cursor-pointer"
              src={ChevronDownIcon}
              alt="Chevron Down Icon"
            />
          </div>
        </div>
      </div>
    );
  };

  /** Tablet View */
  const tableView = () => {
    return (
      <div className="DesktopScreen:hidden MobileScreen:hidden bg-white flex flex-row justify-between py-[13px] px-[24px] shadow-md">
        <Image
          src={LogoIcon}
          alt={"Logo Icon"}
          onClick={() => Router.push(GeneralNonAuthRoutes.home)}
        ></Image>
        <div className="flex flex-row gap-[12px]">
          <Image
            className="w-[30px] cursor-pointer"
            src={BellIcon}
            alt="Notification Icon"
            width={40}
          />
          <Image
            src={MenuIcon}
            alt={"Menu Icon"}
            className="cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
      </div>
    );
  };

  /** Mobile View */
  const mobileView = () => {
    return (
      <div className="DesktopScreen:hidden TabletScreen:hidden bg-white flex flex-row justify-between py-[13px] px-[24px] shadow-md">
        <Image
          src={LogoIcon}
          alt={"Sefarvest Icon"}
          onClick={() => Router.push(GeneralNonAuthRoutes.home)}
        ></Image>
        <div className="flex flex-row gap-[12px]">
          <Image
            className="w-[30px] cursor-pointer"
            src={BellIcon}
            alt="Notification Icon"
            width={40}
          />
          <Image
            src={MenuIcon}
            alt={"Menu Icon"}
            className="cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
      </div>
    );
  };

  return (
    <section>
      {desktopView()}
      {tableView()}
      {mobileView()}
    </section>
  );
};
