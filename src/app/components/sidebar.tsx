import React, { useEffect, useRef, useState } from "react";
import { SidebarList } from "./sidebar-list";
import ProgressBar from "./progress-bar";

/** Dashboard SideBar */
export const Sidebar = ({
  openMenu,
  setOpenMenu,
}: {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
          isOpen ? "w-[282px]" : "w-20"
        } TabletScreen:hidden MobileScreen:hidden transition-all duration-300`}
      >
        <aside className="pt-[45px] mb-2" onClick={() => setIsOpen(true)}>
          <SidebarList isOpen={isOpen} />
        </aside>
        <div className="ml-6">
          <strong className="font-[600] text-[14px] leading-[21px]">
            Not strong
          </strong>
          <ProgressBar progress={25} label="25" />
        </div>
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
            className="min-h-screen w-[260px] z-[2000] absolute bg-white DesktopScreen:hidden 
            overflow-auto transition-all duration-300 border-r-[1px] border-[#E4E7EC]"
          >
            <aside className="mt-4">
              <SidebarList />
            </aside>
            <div className="ml-6 mb-2">
              <strong className="font-[600] text-[14px] leading-[21px]">
                Not strong
              </strong>
              <ProgressBar progress={25} label="25" />
            </div>
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
