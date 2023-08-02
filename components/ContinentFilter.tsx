"use client";

import React, { useContext, useState } from "react";

import { Menu } from "@headlessui/react";
import RegionProvider from "@/context/CountryProvider";

function ContinentFilter() {
  return (
    <div className="mb-8 ml-4">
      <Menu>
        <Menu.Button
          className={
            "flex  w-[200px] h-14 items-center justify-around mb-2 rounded-md shadow-md text-xs font-normal bg-white pl-3"
          }
        >
          <span>filter</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.45 3.45L6 6.9L2.55 3.45L1.5 4.5L6 9L10.5 4.5L9.45 3.45Z"
              fill="black"
            />
          </svg>
        </Menu.Button>
        <Menu.Items
          className={
            "flex flex-col bg-white text-xs font-normal  w-[200px] absolute z-10 gap-2 pl-6 py-4 "
          }
        >
          <Menu.Item>
            <span
              onClick={(e: any) => setRegion(e.target.value)}
              className="cursor-pointer "
            >
              Africa
            </span>
          </Menu.Item>
          <Menu.Item>
            <span
              onClick={(e: any) => setRegion(e.target.value)}
              className="cursor-pointer "
            >
              America
            </span>
          </Menu.Item>
          <Menu.Item>
            <span
              onClick={(e: any) => setRegion(e.target.value)}
              className="cursor-pointer "
            >
              Asia
            </span>
          </Menu.Item>
          <Menu.Item>
            <span
              onClick={(e: any) => setRegion(e.target.value)}
              className="cursor-pointer "
            >
              Europe
            </span>
          </Menu.Item>
          <Menu.Item>
            <span
              onClick={(e: any) => setRegion(e.target.value)}
              className="cursor-pointer "
            >
              Oceania
            </span>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
}

export default ContinentFilter;
