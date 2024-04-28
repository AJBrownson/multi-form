import Image from "next/image";
import Link from "next/link";
import Desktop from "../../public/images/bg-sidebar-desktop.svg";
import Mobile from "../../public/images/bg-sidebar-mobile.svg";

export default function Home() {
  return (
    <main className="relative lg:px-8">
      <div className="bg-white">
        <Image src={Desktop} alt="" className="hidden md:block md:h-[100vh]" />
        <Image src={Mobile} alt="" className="w-full md:hidden" />

        {/* Routing buttons for mobile */}
        <div className="text-white flex justify-between gap-5 absolute md:hidden top-12 left-[50%] transform -translate-x-1/2 -translate-y-1/2">
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

        {/* Routing buttons for desktop */}
        <div className="text-white md:flex flex-col gap-5 hidden absolute md:top-14 left-14">
          <div className="flex items-center gap-4">
          <button className="flex justify-center items-center p-4 w-3 h-3 border border-white rounded-full">
            1
          </button>
          <span>
            <h1 className="text-xs text-[#d6d9e6]">STEP 1</h1>
            <p className="text-sm font-medium">YOUR INFO</p>
          </span>
          </div>
          <div className="flex items-center gap-4">
          <button className="flex justify-center items-center p-4 w-3 h-3 border border-white rounded-full">
            2
          </button>
          <span>
            <h1 className="text-xs text-[#d6d9e6]">STEP 2</h1>
            <p className="text-sm font-medium">SELECT PLAN</p>
          </span>
          </div>
          <div className="flex items-center gap-4">
          <button className="flex justify-center items-center p-4 w-3 h-3 border border-white rounded-full">
            3
          </button>
          <span>
            <h1 className="text-xs text-[#d6d9e6]">STEP 3</h1>
            <p className="text-sm font-medium">ADD-ONS</p>
          </span>
          </div>
          <div className="flex items-center gap-4">
          <button className="flex justify-center items-center p-4 w-3 h-3 border border-white rounded-full">
            4
          </button>
          <span>
            <h1 className="text-xs text-[#d6d9e6]">STEP 4</h1>
            <p className="text-sm font-medium">SUMMARY</p>
          </span>
          </div>
        </div>

        {/* form div */}
        <section className="px-5 flex justify-center items-center">
          <form className="px-5 py-7 bg-[#fff] text-left w-[90%] md:w-[60%] rounded-lg absolute md:block md:left-[19rem] md:top-5 md:h-[90vh] top-[58%]">
            <h1 className="text-[#02295a] text-2xl font-bold">Personal info</h1>
            <p className="text-[#9699ab]">
              Please provide your name, email address, and phone number.
            </p>

            <div className="mt-5">
              <div className="grid grid-cols-6 gap-4 md:gap-0 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="name" className="text-[#02295a] text-base">
                    Name
                  </label>
                  <input
                    id="firstname"
                    type="text"
                    placeholder="e.g. Stephen King"
                    className="text-[#9699ab] pl-5 font-medium w-full rounded-md py-2 border border-[#9699ab]"
                  />
                </div>
              </div>

              <div className="mt-3 grid grid-cols-6 gap-4 md:gap-0 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3 ">
                  <label htmlFor="email" className="text-[#02295a] text-base">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="e.g. stephenking@lorem.com"
                    className="text-[#9699ab] pl-5 font-medium w-full rounded-md py-2 border border-[#9699ab]"
                  />
                </div>
              </div>

              <div className="mt-3 grid grid-cols-6 gap-4 md:gap-0 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="number" className="text-[#02295a] text-base">
                    Phone Number
                  </label>
                  <input
                    id="number"
                    type="number"
                    placeholder="e.g. +1 234 567 890"
                    className="text-[#9699ab] pl-5 font-medium w-full rounded-md py-2 border border-[#9699ab]"
                  />
                </div>
              </div>
            </div>

            {/* next section for desktop view */}
            <section className="mt-32 items-end justify-end hidden md:flex w-full">
              <Link href="/select-plan">
                <button className="bg-[#02295a] py-3 px-5 rounded-md text-white">
                  Next Step
                </button>
              </Link>
            </section>
          </form>
        </section>

        {/* next section */}
        <section className="px-5 py-4 items-end justify-end bg-white fixed md:hidden bottom-0 flex w-full h-20">
          <Link href="/select-plan">
            <button className="bg-[#02295a] py-3 px-5 rounded-md text-white">
              Next Step
            </button>
          </Link>
        </section>
      </div>
    </main>
  );
}
