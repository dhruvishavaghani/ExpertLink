import React from "react";
import Dashboard from "../Pages/Dashboard";
import { Link } from "react-router-dom";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import { IoIosAddCircle } from "react-icons/io";
import { IoLayers } from "react-icons/io5";

function Service() {
  
  return (
    <div className="flex">
      <Dashboard />

      <div class="w-2/3">
        <div class="relative right-0">
          <ul
            class="relative flex flex-wrap p-1 list-none rounded-xl bg-blue-gray-50/60"
            data-tabs="tabs"
            role="list"
          >
            <li class="z-30 flex-auto text-center">
              <a
                class="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
                data-tab-target=""
                active
                role="tab"
                aria-selected="true"
              >
                <IoLayers className='w-7 h-7'/>
                <Link to="/allservices">
                  <span class="ml-1 ">Your Services</span>
                </Link>
              </a>
            </li>
            <li class="z-30 flex-auto text-center">
              <a
                class="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
                data-tab-target=""
                role="tab"
                aria-selected="false"
              >
                
                <IoIosAddCircle  className="w-8 h-8" />
                <Link to="/serviceform">
                <span class="ml-1">Add New Service</span>
                </Link>
              </a>
            </li>
           
          </ul>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Service;
