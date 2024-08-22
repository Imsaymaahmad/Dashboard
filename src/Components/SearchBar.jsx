"use client";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import Link from "next/link"

export default function SearchBar() {
    return (
        <div className="flex flex-row justify-between p-3 border border-gray-300 border-t-0 border-l-0 border-r-0 border-b-1 text-gray-600">
           <div className="flex flex-row items-center justify-center gap-3" > 
            <IoSearchOutline className="cursor-pointer" />
            <input className="border-none outline-none" type="text" placeholder="Search" /> 
           </div>
         
           <div className="flex flex-row gap-4 items-center justify-center" >
            <div className="cursor-pointer"><GoHome /></div>
           <div className="cursor-pointer"><FaRegBell /></div>
           <div className="cursor-pointer">
            <Link href="/login">
            <IoPersonCircleOutline className="w-5 h-5" />
            </Link>
            </div>
           </div>
        </div>
    );
  }