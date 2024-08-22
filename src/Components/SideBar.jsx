"use client";
import { GoPeople } from "react-icons/go";
import { TbWorldSearch } from "react-icons/tb";
import { RxMixerHorizontal } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { VscError } from "react-icons/vsc";
import Link from "next/link";

export default function SideBar() {
    
    return (
        <div className="w-full bg-[#00001a] h-screen text-white">
           <p className="text-lg font-bold p-4">DASHBOARD</p>
           <div className="border border-white-900 border-t-1 border-l-0 border-r-0 border-b-0  w-full flex flex-col">
                <Link href="/" className="flex flex-row items-center gap-2 p-1 pl-3 mt-6 m-2 mb-0 rounded-md hover:bg-sky-600">
                <TbWorldSearch /> Overview</Link>
                <Link href="/customers" className="flex flex-row items-center gap-2 pl-3 p-1 m-2 mb-0 rounded-md hover:bg-sky-600">
                <GoPeople /> Customers</Link>
                <Link href="/integrations" className="flex flex-row items-center gap-2 p-1 pl-3 m-2 mb-0 rounded-md hover:bg-sky-600">
                <RxMixerHorizontal /> Integrations</Link>
                <Link href="/settings" className="flex flex-row items-center gap-2 p-1 pl-3 m-2 mb-0 rounded-md hover:bg-sky-600">
                <IoSettingsOutline /> Settings</Link>
                <Link href="/account" className="flex flex-row items-center gap-2 p-1 pl-3 m-2 mb-0 rounded-md hover:bg-sky-600">
                <GoPerson /> Account</Link>
                <Link href="/error" className="flex flex-row items-center gap-2 p-1 pl-3 m-2 mb-0 rounded-md hover:bg-sky-600">
                <VscError /> Error</Link>
           </div>
        </div>
    );
  }