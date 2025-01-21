"use client";

import React, { useState } from "react";
import { Sidebar } from "./components/sidebar";
import HomeContents from "./components/home/home-contents";
import { NavigationBar } from "./components/navigation";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);
  // const [users, setUsers] = useState([]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const URL = `https://jsonplaceholder.typicode.com/users`;

  useEffect(() => {  
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log(data);
        setUsers(data);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <div className="sticky top-0 z-[1000]">
        <NavigationBar toggleSidebar={toggleSidebar} />
      </div>
      <div className="flex">
        {/* Sidebar with fixed position and width */}
        <div
          className={`lg:fixed left-0 h-screen lg:z-0 z-[1000] transition-width duration-300 overflow-hidden`}
        >
          <Sidebar openMenu={isOpen} setOpenMenu={setIsOpen} />
        </div>

        {/* Main content area offset by sidebar width and scrollable */}
        <div
          className={`DesktopScreen:ml-[22%] p-2 overflow-y-auto h-screen w-full`}
        >
          <HomeContents />
        </div>
      </div>
    </main>
  );
}
