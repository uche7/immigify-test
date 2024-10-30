import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SefarvestIcon from "@/assets/images/general/landing-page/sefarvest-icon.svg";
import { GeneralNonAuthRoutes } from "@/utils/urls";
import { SidebarList } from "./sidebar-list";

/** Dashboard SideBar */
export const Sidebar = ({
  openMenu,
  setOpenMenu,
}: {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setOpenMenu(false);
      }
    };
    if (openMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenu, setOpenMenu]);

  /** Desktop View */
  const desktopView = () => {
    return (
      <div
        className={`min-h-screen ${
          isOpen ? "w-[260px]" : "w-20"
        } TabletScreen:hidden MobileScreen:hidden transition-all duration-300 border-r-[1px] border-[#E4E7EC]`}
      >
        <div className="relative flex items-center justify-between p-[40px]">
          <Image
            className={`text-xl cursor-pointer text-green-600 ${
              !isOpen && "hidden md:block"
            }`}
            src={SefarvestIcon}
            alt={"Sefarvest Icon"}
            onClick={() => router.push(GeneralNonAuthRoutes.home)}
          />
        </div>
        <aside className="mt-[65.43px]" onClick={() => setIsOpen(true)}>
          <SidebarList isOpen={isOpen} />
        </aside>
      </div>
    );
  };

  /** Tablet and Mobile View */
  const tabletmobileView = () => {
    return (
      <>
        {openMenu && (
          <div
            ref={sidebarRef}
            className="min-h-screen w-[260px] z-[2000] absolute bg-white DesktopScreen:hidden  transition-all duration-300 border-r-[1px] border-[#E4E7EC]"
          >
            <div className="relative flex flex-col p-[40px]">
              <Image
                className="text-xl cursor-pointer text-green-600"
                src={SefarvestIcon}
                alt={"Sefarvest Icon"}
                onClick={() => router.push(GeneralNonAuthRoutes.home)}
              />
            </div>
            <aside className="mt-[65.43px]">
              <SidebarList />
            </aside>
          </div>
        )}
      </>
    );
  };

  return (
    <section>
      {desktopView()}
      {tabletmobileView()}
    </section>
  );
};
