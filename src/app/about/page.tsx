import React from 'react'

const About = () => {
  return (
    
      <div className="bg-gray-100 p-4">

    <div className="border-1 shadow-lg shadow-gray-700 rounded-lg">

    
    <div className="flex rounded-t-lg bg-top-color sm:px-2 w-full">
        <div className="h-40 w-40 overflow-hidden sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6C5PH28b9xIaMZmDTVb_J0ap2ffRQQKx45w&s"/>
        </div>

        <div className="w-2/3 sm:text-center pl-5 mt-10 text-start">
            <p className="font-poppins font-bold text-heading sm:text-4xl text-2xl">
                Mahalthy Khaleel Ahmed
            </p>
            <p className="text-heading">Lead Software Engineer</p>
        </div>

    </div>

    
    <div className="p-5">

        <div className="flex flex-col sm:flex-row sm:mt-10">

            <div className="flex flex-col sm:w-1/3">
                
                <div className="py-3 sm:order-none order-3">
                    <h2 className="text-lg font-poppins font-bold text-top-color">My Contact</h2>
                    <div className="border-2 w-20 border-top-color my-3"></div>

                    <div>
                        <div className="flex items-center my-1">
                            <a className="w-6 text-gray-700 hover:text-orange-600"><svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-4">
                                    <path fill="currentColor"
                                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                                    </path>
                                </svg>
                            </a>
                            <div className="ml-2 truncate">mahalthykhaleel@hotmail.com</div>
                        </div>
                        <div className="flex items-center my-1">
                            <a className="w-6 text-gray-700 hover:text-orange-600"
                                aria-label="Visit TrendyMinds YouTube" href="" target="_blank"><svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-4">
                                    <path fill="currentColor"
                                        d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                                    </path>
                                </svg>
                            </a>
                            <div>+91 8296485050</div>
                        </div>
                        <div className="flex items-center my-1">
                            <a className="w-6 text-gray-700 hover:text-orange-600"
                                aria-label="Visit TrendyMinds Facebook" href="" target="_blank"><svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-4">
                                    <path fill="currentColor"
                                        d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                                    </path>
                                </svg>
                            </a>
                            <div>sale galli latur</div>
                        </div>
                        <div className="flex items-center my-1">
                            <a className="w-6 text-gray-700 hover:text-orange-600"
                                aria-label="Visit TrendyMinds Twitter" href="" target="_blank"><svg className="h-4"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor"
                                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                                    </path>
                                </svg>
                            </a>
                            <div>amitpachange21</div>
                        </div>

                    </div>
                </div>
                
                <div className="py-3 sm:order-none order-2">
                    <h2 className="text-lg font-poppins font-bold text-top-color">Skills</h2>
                    <div className="border-2 w-20 border-top-color my-3"></div>

                    <div>
                                          
                        <div className="flex items-center my-1">
                            <a className="w-6 text-gray-700 hover:text-orange-600"
                                aria-label="Visit TrendyMinds Facebook" href="" target="_blank">
                                       <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g id="Logo" transform="translate(0.000000, -144.000000)">
                                            <g id="Android_2_fill" transform="translate(0.000000, 144.000000)">
                                                <path
                                                    d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                                                    id="MingCute" fill-rule="nonzero">
                                                </path>
                                            </g>
                                        </g>
                                    </g>
                            </a>
                            <div className="ml-2">C#, ASP.NET, WEB API. NETCORE 3.1, EF. ANGULAR, REACT JS, NEXT JS</div>
                            <div className="ml-2">Jenkins, Azure, TFS, Git, Docker and SQL Server</div>
                            <div className="ml-2">JIRA,Agile</div>

                        </div>
                        <div className="flex items-center my-1">
                            <a className="w-6 text-gray-700 hover:text-orange-600"
                                aria-label="Visit TrendyMinds Twitter" href="" target="_blank">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296"
                                        stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                                    <path d="M13.9868 5L12.9934 8.70743M11.8432 13L10.0132 19.8297" stroke="#1C274C"
                                        stroke-width="1.5" stroke-linecap="round" />
                                    <path
                                        d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296"
                                        stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                                </svg>
                            </a>
                            <div className="ml-2">React js, Next js,Angular 8 ,Html, Css</div>
                        </div>

                    </div>
                </div>
                
                <div className="py-3 sm:order-none order-1">
                    <h2 className="text-lg font-poppins font-bold text-top-color">Education Background</h2>
                    <div className="border-2 w-20 border-top-color my-3"></div>

                    <div className="flex flex-col space-y-1">

                        <div className="flex flex-col">
                            <p className="text-sm font-medium">
                                <span className="text-green-700">M.C.A</span>, Visveswaraiah Technological University
                            </p>
                        </div>
                       
                        <div className="flex flex-col">
                            <p className="text-sm font-medium"><span className="text-green-700">B.A.(Maths) </span>, Sri Krishnadevaraya University, Anatapuramu, A.P</p>
                        </div>

                    </div>
                </div>

            </div>


            <div className="flex flex-col sm:w-2/3 order-first sm:order-none sm:-mt-10">

                
                <div className="py-3">
                    <h2 className="text-lg font-poppins font-bold text-top-color">About Me</h2>
                    <div className="border-2 w-20 border-top-color my-3"></div>
                    <p>12+ years of experience in Software Development, Deployment & Support and Project Execution. Efficient in merging end user needs with business requirements, budgetary restrictions, and logical considerations to meet project deliverables. Domain Specialized in: Financial Institutions, Education, Payroll & HR, Warehouse & Procurement. Detail-oriented and results-driven Full Stack Developer with 2 years of experience, specializing in build processes (CI/CD and Jenkins). Seeking to contribute expertise in both business analysis and full stack development to a dynamic team, leveraging hands-on experience to drive innovation and efficiency</p>
                </div>
                <div className="py-3">
                    <h2 className="text-lg font-poppins font-bold text-top-color">Professional Experience</h2>
                    <div className="border-2 w-20 border-top-color my-3"></div>

                    <div className="flex flex-col">

                        <div className="flex flex-col">
                            <p className="text-lg font-bold text-gray-700">TAO Digital Solutions Limited  | Lead Software Engineer</p>
                            <p className="font-semibold text-sm text-gray-700">2024 - Present</p>
                            <p className="font-semibold text-sm text-gray-700 mt-2 mb-1">Key Responsibilities</p>
                            <ul className="text-sm list-disc pl-4 space-y-1">
                                <li>Working on customer facing product</li>
                                <li>Deliverying highly efficient solutions</li>
                                <li>Solving critical bugs</li>
                            </ul>
                        </div>

                        <div className="flex flex-col mt-8">
                            <p className="text-lg font-bold text-gray-700">Bhavna Corp. (Bhavna Software India Pvt. Ltd.): | Principal Engineer II </p>
                            <p className="font-semibold text-sm text-gray-700">2021-2024</p>
                            <p className="font-semibold text-sm text-gray-700 mt-2 mb-1">Key Responsibilities</p>
                            <ul className="text-sm list-disc pl-4 space-y-1">
                                <li>Developed usable components</li>
                                <li>Solving complex problems</li>
                                <li>Solving critical bugs</li>
                            </ul>
                        </div>
                        <div className="flex flex-col mt-8">
                            <p className="text-lg font-bold text-gray-700"> Delta Technology and Management Services Private Ltd | Sr. Software Engineer  </p>
                            <p className="font-semibold text-sm text-gray-700">2019-2020</p>
                            <p className="font-semibold text-sm text-gray-700 mt-2 mb-1">Key Responsibilities</p>
                            <ul className="text-sm list-disc pl-4 space-y-1">
                                <li>Developed usable components</li>
                                <li>Solving complex problems</li>
                                <li>Solving critical bugs</li>
                            </ul>
                        </div>
                        <div className="flex flex-col mt-8">
                            <p className="text-lg font-bold text-gray-700"> General Directorate of Military Works, Ministry of Defense, Riyadh, KSA | Sr. Software Engineer  </p>
                            <p className="font-semibold text-sm text-gray-700">2013-2018</p>
                            <p className="font-semibold text-sm text-gray-700 mt-2 mb-1">Key Responsibilities</p>
                            <ul className="text-sm list-disc pl-4 space-y-1">
                                <li>Developed usable components</li>
                                <li>Solving complex problems</li>
                                <li>Solving critical bugs</li>
                            </ul>
                        </div>
                    </div>

                </div>

                
                <div className="py-3">
                    <h2 className="text-lg font-poppins font-bold text-top-color">Projects</h2>
                    <div className="border-2 w-20 border-top-color my-3"></div>

                    <div className="flex flex-col">

                        <div className="flex flex-col">
                            <p className="text-lg font-semibold text-gray-700">Service Edge</p>
                            <p className="font-normal text-sm text-gray-700 mb-1 pl-2">This app is an integrated solution to enhance service department efficiency for automotive dealerships. The app featured online appointment scheduling, digital vehicle inspections, real-time customer updates, and comprehensive reporting tools. This initiative significantly improved customer satisfaction, streamlined service workflows, and provided actionable insights through advanced analytics.</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-lg font-semibold text-gray-700">Loan Origination System (LOS)</p>
                            <p className="font-normal text-sm text-gray-700 mb-1 pl-2">:  End-to-end loan origination system, Meridian link Consumer. Our proven, configurable SaaS cloud-based loan origination system (LOS) providing a full loan product suite to financial institutions nationwide. like yours to process loans, streamline internal loans (VL, PL, DA, HE, CC, BL) lending processes, and finally go 100% digital from application to approval quickly and accurately. high performance database server development. Consumer is an LOS solution that can be tailored to fit the needs of any financial.
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-lg font-semibold text-gray-700">FI (Financial Institutions)</p>
                            <p className="font-normal text-sm text-gray-700 mb-1 pl-2">The Project is used to manage institutions’ financial performance. This project brings together budgeting, Forecasting, financial planning, Profitability and Relationship profitability and pricing on single unified platform. Transform your financials—from inputs to outcomes—with our driver-based budgeting, planning, and forecasting software. Integrated financial planning software to budget, model scenarios, analyses and drive profitability. Streamline processes and increase accuracy through automated consolidation across organization levels.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    </div>

</div>


</div>

    
  )
}

export default About
