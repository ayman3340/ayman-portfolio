import React from "react";
import { GrCertificate } from "react-icons/gr";
import { CiLink } from "react-icons/ci";
import { CertificationsData } from "../Data";

function Certifications() {
  return (
    <div className="h-screen flex flex-col md:flex-row bg-purple-950  overflow-hidden" id="Certifications">
      <div className=" container flex flex-col justify-evenly  mx-auto px-4 h-auto min-h-screen">
        <div className="flex flex-col xl:flex-row justify-center xl:justify-between items-center w-full px-2 xl:px-5">
          <h1 className="mx-5 text-md md:text-5xl w-full xl:w-1/3 my-2 xl:my-7 text-center">
            Certifications <GrCertificate size={50} className="hidden sm:inline m-auto" />
          </h1>

          <div className="flex flex-col md:flex-row justify-center xl:justify-between items-center w-full xl:w-2/3 px-5">
            {/* 1. Changed 'overflow-hide' to 'overflow-x-auto' 
                   This allows the table to scroll sideways on small screens.
            */}
            <div className="p-6 px-0 md:overflow-hidden md:overflow-x-hide overflow-x-auto w-full h-auto">
              <table className="w-full text-left table-auto min-w-max">
                <thead>
                  <tr>
                    <th className="p-1 xl:p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                      <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                        Issued by
                      </p>
                    </th>
                    <th className="p-1 xl:p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                      <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                        Hours
                      </p>
                    </th>
                    <th className="p-1 xl:p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                      <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                        Name
                      </p>
                    </th>
                    {/* 2. Added 'hidden sm:table-cell' to hide Status on mobile */}
                    <th className="hidden sm:table-cell p-1 xl:p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                      <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                        Status
                      </p>
                    </th>
                    {/* 3. Added 'hidden sm:table-cell' to hide Link on mobile */}
                    <th className="table-cell p-1 xl:p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                      <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                        Link
                      </p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {CertificationsData.map((items) => {
                    return (
                      <tr key={items.id}>
                        <td className="p-1 xl:p-4 border-b border-blue-gray-50">
                          <div className="flex items-center gap-3">
                            <img
                              src={items.logo}
                              alt="Spotify"
                              className="relative inline-block h-12 w-12 rounded-full border border-blue-gray-50 bg-blue-gray-50/50 object-fill object-center p-1"
                            />
                          </div>
                        </td>
                        <td className="p-1 xl:p-4 border-b border-blue-gray-50">
                          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                            {items?.hours}
                          </p>
                        </td>
                        <td className="p-1 xl:p-4 border-b border-blue-gray-50 md:w-1/2">
                          <p className="break-all block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                            {items?.name}
                          </p>
                        </td>
                        {/* 2. Added 'hidden sm:table-cell' to match the header */}
                        <td className="hidden sm:table-cell p-1 xl:p-4 border-b border-blue-gray-50">
                          <div className="w-max">
                            <div
                              className={`relative grid items-center px-2 py-1 font-sans text-xs font-bold ${
                                items["Issued by"] == "AWS"
                                  ? "text-green-400"
                                  : "text-white-900"
                              } uppercase rounded-md select-none whitespace-nowrap bg-green-500/20`}
                            >
                              <span className="">
                                {items["Issued by"] == "AWS"
                                  ? "In Progress"
                                  : "Finish"}
                              </span>
                            </div>
                          </div>
                        </td>
                        {/* 3. Added 'hidden sm:table-cell' to match the header */}
                        <td className="table-cell p-1 xl:p-4 border-b border-blue-gray-50">
                          <div className="flex items-center gap-3">
                            <div className="flex flex-col">
                              <p className="block font-sans text-sm antialiased font-normal leading-normal capitalize text-blue-gray-900">
                                <a target="_blank" href={items?.Link}>
                                  <CiLink size={35} />
                                </a>
                              </p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certifications;