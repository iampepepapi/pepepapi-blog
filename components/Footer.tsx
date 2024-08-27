import { Smile } from "lucide-react";
import Link from "next/link";
import React from "react";

function Footer() {
  let year = new Date();
  return (
    <footer className="m-auto flex w-full shrink-0 flex-col justify-end gap-2 border-t px-4 py-6 text-right sm:flex-row md:mb-0 md:px-6">
      <p className="text-right text-xs text-gray-500 dark:text-gray-400">
        © {year.getFullYear() || "2024"} Gonzalez
      </p>
    </footer>
  );
}

export default Footer;
