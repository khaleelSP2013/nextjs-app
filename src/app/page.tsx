import Image from "next/image";

export default function Home() {
  return (
   <>
   
   <div className="h-screen flex flex-col  
                    items-center justify-center"> 
  <p className="block items-center text-teal-700 text-lg font-bold mb-2">Wel Come |Next Js Course</p>
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-teal-700 text-sm font-bold mb-2" htmlFor="username">
        User Name
      </label>
    <input type="text" id="username" placeholder="User Name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
    </div>
    <div className="mb-6">
      <label className="block text-teal-700 text-sm font-bold mb-2" htmlFor="password" >
        Password
      </label>
      <input type="passwrod" id="password"  placeholder="******************" className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      {/* <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a> */}
    </div>
  </form>
  <p className="text-center text-teal-700 text-xs">
    &copy;2024 mahalthy Corp. All rights reserved.
  </p>
</div>
   </>
  );
}
