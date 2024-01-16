import Image from "next/image";
import Link from "next/link";
import Github from "../components/GitHub";

export default function Header() {
  return (
    <header className="max-w-5xl md:flex text-center justify-between items-center w-full mt-5 pb-7 sm:px-4 px-2">
      <Link
        href="https://www.replace-anything.fun/"
        title="replace-anything.fun"
        className="flex space-x-3 mb-10 md:mb-0 justify-center">
        <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight">
          ☯️ ReplaceAnything
        </h1>
      </Link>
      <div>
        <div className="flex flex-wrap justify-center gap-3 items-center">
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-md bg-white text-sm text-gray-600 shadow-sm transition-colors hover:opacity-80"
            href="https://www.replace-anything.fun"
            title="replace-anything.fun English"
          >
            English
          </a>
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-md bg-white text-sm text-gray-600 shadow-sm transition-colors hover:opacity-80"
            href="https://www.replace-anything.fun/cn"
            title="replace-anything.fun Chinese"
          >
            中文
          </a>
        </div>
      </div>

    </header>
  );
}
