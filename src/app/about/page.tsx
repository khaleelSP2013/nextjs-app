import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    
      <div className="bg-gray-100 p-4">

    <div className="border-1 shadow-lg shadow-gray-700 rounded-lg">

    
    <div className="flex rounded-t-lg bg-top-color sm:px-2 w-full">
    
        <div className="h-40 w-40 overflow-hidden sm:rounded-full sm:relative sm:p-0 top-10 left-10 p-3">
        <Image
      src="/khaleel.jpg"
      width={400}
      height={500}
      alt="Picture of the author"
    />
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
                            
                            <div className="ml-2 truncate">mahalthykhaleel@hotmail.com</div>
                        </div>
                        <div className="flex items-center my-1">
                           
                            <div>+91 8296485050</div>
                        </div>
                     
                    </div>
                </div>
                
                <div className="py-3 sm:order-none order-2">
                    <h2 className="text-lg font-poppins font-bold text-top-color">Skills</h2>
                    <div className="border-2 w-20 border-top-color my-3"></div>
                    <div>
                        <div className="flex items-center my-1">
                          
                            <div className="ml-2">C#, ASP.NET, WEB API. NETCORE 3.1, EF. ANGULAR, REACT JS, NEXT JS</div>
                            <div className="ml-2">JIRA,Agile,Jenkins, Azure, TFS, Git, SQL Server</div>
                        </div>
                        <div className="flex items-center my-1">
                           
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
                            <p className="text-sm font-medium"><span className="text-green-700">B.A.(Maths) </span>, Sri Krishnadevaraya University</p>
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
