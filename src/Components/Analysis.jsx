"use client";
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { GiProgression } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import { SalesChart } from "./SalesChart";
import { TrafficSource } from "./TrafficSource";

export default function Analysis() {
    return (
      <div className="m-[50px] w-[90%] h-[85%] flex flex-col">
      <div className=" w-full flex flex-row justify-between p-4 h-full ">
        <div className="w-[24%] bg-white rounded-md text-black flex flex-col items-start overflow-hidden shadow-md">
          <div className=" flex flex-row">
          <div className=" mr-10">
          <p className="p-4 text-[9px] pb-0 text-gray-500">BUDGET</p>
          <p className=" p-4 font-bold text-xl text-gray-800 pt-2 pb-3">$24K</p>
          </div>
          <div className="w-[40px] h-[40px] bg-blue-500 m-3 rounded-full flex justify-center items-center">
          <BsCurrencyDollar className="size-6 text-white" />
          </div>
          </div>
          <div className="flex flex-row items-center text-xs p-4 pt-0 gap-1">
          <FaArrowUp className="size-3 text-cyan-600" />
          <p className="text-cyan-600">12%</p>
          <p className="text-gray-500">since last month</p>
          </div>
        </div>
        <div className="w-[24%] bg-white rounded-md text-black flex flex-col items-start overflow-hidden shadow-md">
          <div className=" flex flex-row">
          <div className=" mr-10">
          <p className="p-4 pr-0 text-[8px] pb-0 text-gray-500">TOTAL CUSTOMERS</p>
          <p className=" p-4 font-bold text-xl text-gray-800 pt-2 pb-3">1.6K</p>
          </div>
          <div className="w-[40px] h-[40px] bg-yellow-500 m-3 rounded-full flex justify-center items-center">
          <GoPeople className="size-5 text-white" />
          </div>
          </div>
          <div className="flex flex-row items-center text-xs p-4 pt-0 gap-1">
          <FaArrowDown className="size-3 text-pink-500" />
          <p className="text-pink-500">16%</p>
          <p className="text-gray-500">since last month</p>
          </div>
        </div>
        <div className="w-[24%] bg-white rounded-md text-black flex flex-col items-start overflow-hidden shadow-md">
          <div className=" flex flex-row">
          <div className=" mr-10">
          <p className="p-4 text-[9px] pb-0 pr-0 text-gray-500">TASK PROGRESS</p>
          <p className=" p-4 font-bold text-xl text-gray-800 pt-2 pb-3">75.5%</p>
          </div>
          <div className="w-[40px] h-[40px] bg-pink-500 m-3 rounded-full flex justify-center items-center">
          <GiProgression className="size-4 text-white" />
          </div>
          </div>
          <div className="w-5/6 h-[3px] bg-blue-200 ml-4 rounded-md">
          <div className="w-4/6 bg-blue-500 h-full rounded-md"></div>
          </div>
        </div>
        <div className="w-[24%] bg-white rounded-md text-black flex flex-col items-start overflow-hidden shadow-md">
          <div className=" flex flex-row">
          <div className=" mr-12">
          <p className="p-4 text-[9px] pr-0 pb-0 text-gray-500">TOTAL PROFIT</p>
          <p className=" p-4 font-bold text-xl pt-2 text-gray-800">$15K</p>
          </div>
          <div className="w-[40px] h-[40px] bg-blue-500 m-3 rounded-full flex justify-center items-center">
          <SlCalender className="size-4 text-white" />
          </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-[100%]">
      <div className="w-[42%] p-4 pr-2 pt-0">
      <SalesChart/>
      </div>
        <div className="w-[56%] p-4 pr-0 pt-0">
          <TrafficSource/>
        </div>
        
      </div>
      </div>
    );
  }