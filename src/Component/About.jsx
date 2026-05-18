import React from "react";

function About() {
  return (
    <div className=" min-h-screen overflow-hidden bg-[#2f3176]" id="About">
      <div className="flex flex-col justify-evenly mx-auto px-4 h-auto min-h-210 ">
        <div className="flex flex-row justify-between items-center w-full px-5 py-12 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Header Section */}
              <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  About Me
                </h2>
                <p className="mt-4 text-xl text-white max-w-2xl mx-auto">
                  Motivated Entry-Level Front-End Developer passionate for
                  building user-friendly web experiences.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left Column: Bio & Education */}
                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Who am I?
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                     I am{" "}
                      <span className="font-semibold text-blue-600">
                        Ayman Kamal Mahmoud
                      </span>
                      , a Computer Science graduate with Second Degree
                      Honors. My journey bridges
                      the gap between design and development, combining advanced
                      skills in{" "}
                      <span className="font-medium text-gray-800">
                        JavaScript, HTML5, and CSS3
                      </span>{" "}
                      with a growing expertise in the{" "}
                      <span className="font-medium text-gray-800">
                        React ecosystem
                      </span>
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      I am committed to continuous improvement,
                      having completed approximately{" "}
                      <span className="font-bold text-gray-900">800 hours</span>{" "}
                      of specialized certification training.
                      I thrive on solving complex problems and am
                      currently expanding my backend knowledge with AWS and
                      PostgreSQL.
                    </p>
                  </div>

                  {/* Education Card */}
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                    <h4 className="text-xl font-bold text-gray-800">
                      Education
                    </h4>
                    <div className="mt-2">
                      <p className="font-semibold text-lg">
                        University of Hail
                      </p>
                      <p className="text-gray-600">
                        Bachelor Degree in Computer Science
                      </p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          GPA: 3.29/4
                        </span>
                        <span>Second Degree Honors</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Skills & Stats */}
                <div className="space-y-8">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-5 rounded-lg shadow-sm text-center">
                      <p className="text-3xl font-bold text-blue-600">800+</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Certification Hours
                      </p>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-sm text-center">
                      <p className="text-3xl font-bold text-green-600">150+</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Coding Problems Solved (CodeWars & LeetCode)
                      </p>
                    </div>
                  </div>

                  {/* Skills Tags */}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      Tech Stack
                    </h3>

                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-2 font-semibold uppercase tracking-wide">
                        Core & Frontend
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "JavaScript (Advanced)",
                          "HTML5 & CSS3",
                          "React.js",
                          "Redux & Toolkit",
                          "Tailwind",
                          "Material UI",
                          "Bootstrap 5",
                        ].map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-2 font-semibold uppercase tracking-wide">
                        Tools & Design
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Git & Version Control",
                          "Figma",
                          "Photoshop",
                          "PostgreSQL",
                          "REST API",
                        ].map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;
