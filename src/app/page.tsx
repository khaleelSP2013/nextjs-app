import Image from "next/image";


export default function Home() {
  return (
   <>
      
  <div className="flex flex-col items-center bg-gray-100">
    <div className="container mx-auto py-8">
        <div className="grid grid-cols-2  sm:grid-cols-4 gap-6 px-2">
            <div className="col-span-4 sm:col-span-3">
                <div className="bg-white shadow rounded-lg items-center p-6">
                    <div className="flex flex-col items-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6C5PH28b9xIaMZmDTVb_J0ap2ffRQQKx45w&s" className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0">

                        </img>
                        <h1 className="text-lg font-bold">Mahalthy Khaleel Ahmed</h1>
                        <p className="text-gray-700">Lead Software Engineer</p>
                        <p className="text-gray-500">+91 8296485050</p>
                        <p className="text-gray-500">mahalthykhaleel@hotmail.com</p>
                        <div className="mt-1 flex flex-wrap gap-4 justify-center">
                            <a href="#" className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded">Contact</a>
                            <a href="/about" className="bg-teal-500 hover:bg-teal-600 text-gray-700 py-2 px-4 rounded">Resume</a>
                        </div>
                    </div>
               
                </div>
            </div>
          
        </div>
    </div>
   </div>
   </>
  );
}
