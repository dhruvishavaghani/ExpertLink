import React, { useState } from "react";
import Dashboard from "../Pages/Dashboard";
import { IoIosAddCircle } from "react-icons/io";
import { IoLayers } from "react-icons/io5";
import AllServices from "./AllServices";
import ServiceForm from "./ServiceForm";


function Service() {
  const [addservice, setaddservice] = useState(false);
  const [viewservices, setviewservice] = useState(true);

  return (
    <div className="flex">
      <Dashboard />

      <div class="w-2/3   ">
        <div class="relative right-0 ">
          <div className=" p-3 py-1">
          <div className="text-4xl flex ml-8 py-2 font-bold">Services</div>
          <ul
            class="relative  flex flex-wrap p-1 list-none rounded-xl bg-blue-gray-50/60"
            data-tabs="tabs"
            role="list"
          >
            <li class="z-30 flex-auto text-center  border-1">
              <a
                class="z-30  flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out rounded-md text-wrap border border-black focus:border-black  cursor-pointer text-slate-700 bg-inherit"
                data-tab-target=""
                active
                role="tab"
                aria-selected="false"
              >
                <IoLayers className="w-8 h-8" />
                <span
                  class="ml-1 "
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
                  class="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out rounded-md border border-black cursor-pointer text-slate-700 bg-inherit"
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
          </div>
          <div className="flex mt-10 items-center justify-center">
          {viewservices && <AllServices />}
          </div>
          <div className="flex mt-2 items-center justify-center">
            {addservice && <ServiceForm />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
