import React from "react";
import { BarChart, DonutChart } from "../../components/charts";

const Section = () => {
  return (
    <>
      <div className="col-span-2 mt-8 bg-white rounded-md px-6 py-4">
        <div className="flex flex-col justify-between items-center">
          <div className="flex justify-between items-center w-full mb-4">
            <div>
              <h3 className="text-gray-900 text-left text-xl font-semibold">
                Overview
              </h3>
              <p className="text-gray-400 text-xs">Monthly Earning</p>
            </div>
            <div>
              <select
                id="months"
                defaultValue="3"
                className="bg-gray-100 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 "
              >
                <option className="text-left" value="3" selected>
                  Quarterly
                </option>
                <option className="text-left" value="6">
                  Half yearly
                </option>
                <option className="text-left" value="12">
                  Annually
                </option>
              </select>
            </div>
          </div>
          <BarChart />
        </div>
      </div>

      <div className="mt-8 grid-cols-3 bg-white rounded-md px-6 py-4">
        <div className="flex flex-col justify-between items-center">
          <div className="w-full mb-4">
            <h3 className="text-gray-900 text-left text-xl font-semibold">
              Customers
            </h3>
            <p className="text-gray-400 text-xs text-left">
              Customers thay buy products
            </p>
          </div>
          <DonutChart />
        </div>
      </div>
    </>
  );
};

export default Section;
