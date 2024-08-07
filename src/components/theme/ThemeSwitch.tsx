// "use client";

// import { useTheme } from "@/context/theme-context";
// import React from "react";
// import Image from "next/image";

// export default function ThemeSwitch() {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <button
//       className=" bg-white w-[2rem] h-[2rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-120"
//       onClick={toggleTheme}
//     >
//       {theme === "light" ? (
//         <Image src="/icons/SunIcon.png" alt="Sun Icon" width={20} height={20} />
//       ) : (
//         <Image src="/icons/MoonIcon.png" alt="Moon Icon" width={20} height={20} />
//       )}
//     </button>
//   );
// }
"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import Image from "next/image";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="relative bg-white dark:bg-opacity-50 w-[4rem] h-[2rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center transition-transform"
      onClick={toggleTheme}
    >
      {/* Static Sun Icon */}

      {/* Static Moon Icon */}
      <div
        className={`absolute right-2 top-1 flex items-center justify-center transition-opacity duration-300 ${theme === "light" ? "opacity-100" : "opacity-100"}`}
      >
        <Image src="/blog/icons/MoonIcon.png" alt="Moon Icon" width={20} height={20} />
      </div>
      <div
        className={`absolute left-2 top-1 flex items-center justify-center transition-opacity duration-300 ${theme === "dark" ? "opacity-100" : "opacity-100"}`}
      >
        <Image src="/blog/icons/SunIcon.png" alt="Sun Icon" width={20} height={20} />
      </div>

      {/* Toggle Button */}
      <div
        className={`w-[1.5rem] h-[1.5rem] bg-blue-500 dark:bg-gray-800 rounded-full absolute transition-transform duration-300 ${theme === "light" ? "translate-x-[2rem]" : "translate-x-[0.2rem]"}`}
      />
    </button>
  );
}

