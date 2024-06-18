import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
import DarkModeButton from "./DarkModeButton";

function Header() {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center">
        <Bars3Icon className="h-13 w-10 cursor-pointer text-black dark:text-white" />
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-3xl text-center text-black dark:text-white">
            INSTANT NEWS
          </h1>
        </Link>
        <div className="flex items-center justify-end space-x-2">
          <DarkModeButton />
          <button className="hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 rounded-full dark:bg-slate-800">
            Subscribe Now
          </button>
        </div>
      </div>
      <NavLinks />
      <SearchBox />
    </header>
  );
}

export default Header;
