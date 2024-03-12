import React, { useState } from "react";
import Dashboard from "../Pages/Dashboard";
import Serviceform from "./Serviceform";
import { IoIosAddCircle } from "react-icons/io";
import { IoLayers } from "react-icons/io5";
import Allservices from "./Allservices";

function Service() {
  const [addservice, setaddservice] = useState(false);
  const [viewservices, setviewservice] = useState(true);

  return (
    <div className="flex">
      <Dashboard />

      <div class="w-2/3 ">
        <div class="relative right-0 ">
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
                <IoLayers className="w-7 h-7" />
                <span
                  class="ml-1"
                  onClick={() => {
                    setviewservice(true), setaddservice(false);
                  }}
                >
                  Your Services
                </span>
              </a>
            </li>

              <li class="z-30 flex-auto text-center">
                <a
                  class="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
                  data-tab-target=""
                  role="tab"
                  aria-selected="false"
                >
                  <IoIosAddCircle className="w-8 h-8 mr-1" />
                  <span
                    className="ml-1"
                    onClick={() => {
                      setaddservice(true), setviewservice(false);
                    }}
                  >
                    Add New Service
                  </span>
                </a>
              </li>

          </ul>
          {viewservices && <Allservices />}
          <div className="flex mt-10 items-center justify-center">
            {addservice && <Serviceform />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
