import Image from "next/image";
import Link from "next/link";
import Desktop from "../../../public/images/bg-sidebar-desktop.svg";
import Mobile from "../../../public/images/bg-sidebar-mobile.svg";

export default function AddOns() {
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
          <h1 className="text-[#02295a] text-2xl font-bold">Pick add-ons</h1>
          <p className="text-[#9699ab]">
            Add-ons help enhance your gaming experience.
          </p>

          <div className="mt-5">
            <div className="rounded-md py-3 px-3 border border-[#d6d9e6] flex justify-between items-center">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="toggle"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <div className="pl-5">
                  <h1 className="text-[#02295a] text-lg font-bold">
                    Online service
                  </h1>
                  <p className="text-sm text-[#9699ab]">
                    Access to multiplayer games
                  </p>
                </div>
              </div>
              <p className="text-[#473dff] font-medium">+$1/mo</p>
            </div>

            <div className="rounded-md mt-3 py-3 px-3 border border-[#d6d9e6] flex justify-between items-center">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="toggle"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <div className="pl-5">
                  <h1 className="text-[#02295a] text-lg font-bold">
                    Larger storage
                  </h1>
                  <p className="text-sm text-[#9699ab]">
                    Extra 1TB of cloud save
                  </p>
                </div>
              </div>
              <p className="text-[#473dff] font-medium">+$2/mo</p>
            </div>

            <div className="rounded-md mt-3 py-3 px-3 border border-[#d6d9e6] flex justify-between items-center">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="toggle"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <div className="pl-5">
                  <h1 className="text-[#02295a] text-lg font-bold">
                    Customizable Profile
                  </h1>
                  <p className="text-sm text-[#9699ab]">
                    Custom theme on your profile
                  </p>
                </div>
              </div>
              <p className="text-[#473dff] font-medium">+$2/mo</p>
            </div>
          </div>
        </form>
      </section>

      {/* next section */}
      <section className="px-5 py-4 items-end bg-white fixed bottom-0 flex justify-between w-full h-20">
        <Link href="/select-plan">
          <button className="py-3 font-medium text-[#9699ab]">Go Back</button>
        </Link>
        <Link href="/finishing-up">
          <button className="bg-[#02295a] py-3 px-5 rounded-md text-white">
            Next Step
          </button>
        </Link>
      </section>
    </main>
  );
}
