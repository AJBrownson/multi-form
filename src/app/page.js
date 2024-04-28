import Image from "next/image";
import Desktop from "../../public/images/bg-sidebar-desktop.svg";
import Mobile from "../../public/images/bg-sidebar-mobile.svg";

export default function Home() {
  return (
    <main className="relative">
      <Image src={Desktop} alt="" className="hidden md:block" />
      <Image src={Mobile} alt="" className="w-full md:hidden" />

      {/* Routing buttons */}
      <div className="text-white flex justify-between gap-5 absolute top-12 left-[50%] transform -translate-x-1/2 -translate-y-1/2">
        <button className="flex justify-center items-center p-4 w-3 h-3 border border-white rounded-full">
          1
        </button>
        <button className="flex justify-center items-center p-4 w-3 h-3 border border-white rounded-full">
          2
        </button>
        <button className="flex justify-center items-center p-4 w-3 h-3 border border-white rounded-full">
          3
        </button>
        <button className="flex justify-center items-center p-4 w-3 h-3 border border-white rounded-full">
          4
        </button>
      </div>

      {/* form div */}
      <section className="px-5 flex justify-center items-center">
        <form className="px-5 py-7 bg-[#fff] text-left w-[90%] rounded-lg absolute top-[58%]">
          <h1 className="text-[#02295a] text-2xl font-bold">Personal info</h1>
          <p className="text-[#9699ab]">
            Please provide your name, email address, and phone number.
          </p>

          <div className="mt-5">
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="name" className="text-[#02295a] text-base">
                Name
              </label>
              <input
                id="firstname"
                type="text"
                placeholder="e.g. Stephen King"
                className="text-[#9699ab] pl-5 w-full rounded-md py-2 border border-[#9699ab]"
              />
            </div>
          </div>

          <div className="mt-3 grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
            <label htmlFor="email" className="text-[#02295a] text-base">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="e.g. stephenking@lorem.com"
                className="text-[#9699ab] pl-5 w-full rounded-md py-2 border border-[#9699ab]"
              />
            </div>
          </div>

          <div className="mt-3 grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="number" className="text-[#02295a] text-base">
              Phone Number
              </label>
              <input
                id="number"
                type="number"
                placeholder="e.g. +1 234 567 890"
                className="text-[#9699ab] pl-5 w-full rounded-md py-2 border border-[#9699ab]"
              />
            </div>
          </div>
          </div>
        </form>
      </section>
    </main>
  );
}
