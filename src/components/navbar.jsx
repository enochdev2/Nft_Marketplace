import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-b py-3 flex pr-6 px-3  justify-between items-center w-full">
      <p className="text-2xl font-bold blue-text-gradient">Nft Marketplace</p>
      <div className="flex gap-6  justify-center sm:text-base md:text-lg">
        <Link
          href="/"
          className="pink-text-gradient 
button-primary py-2 px-2 rounded-xl "
        >
          Home
        </Link>
        <Link href="/create-items" className="pink-text-gradient py-2 px-2 rounded-xl button-primary">
          Sell Asset
        </Link>
        <Link href="/My-assets" className="pink-text-gradient py-2 px-2 rounded-xl button-primary">
          My Assets
        </Link>
        <Link href="/dashboard" className="pink-text-gradient py-2 px-2 rounded-xl button-primary">
          Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
