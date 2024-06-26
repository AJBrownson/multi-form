import Image from "next/image";
import Link from "next/link";
import Desktop from "../../../public/images/bg-sidebar-desktop.svg";
import Mobile from "../../../public/images/bg-sidebar-mobile.svg";
import Arcade from "../../../public/images/icon-arcade.svg";
import Advanced from "../../../public/images/icon-advanced.svg";
import Pro from "../../../public/images/icon-pro.svg";

export default function SelectPlan() {
  return (
    <main className="relative">
      <Image src={Desktop} alt="" className="hidden md:block" />
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
          <h1 className="text-[#02295a] text-2xl font-bold">
            Select your plan
          </h1>
          <p className="text-[#9699ab]">
            You have the option of monthly or yearly billing.
          </p>

          <div className="mt-5 md:flex flex-row md:gap-5">
            <div className="rounded-md py-3 pl-4 md:w-full border border-[#d6d9e6] flex md:flex-col items-center md:items-start">
              <Image src={Arcade} alt="" />
              <div className="pl-3 md:pl-0 md:mt-8">
                <h1 className="text-[#02295a] text-lg font-bold">Arcade</h1>
                <p className="text-[#9699ab]">$9/mo</p>
              </div>
            </div>

            <div className="rounded-md mt-3 md:mt-0 md:w-full py-3 pl-4 border border-[#d6d9e6] flex md:flex-col items-center md:items-start">
              <Image src={Advanced} alt="" />
              <div className="pl-3 md:pl-0 md:mt-8">
                <h1 className="text-[#02295a] text-lg font-bold">Advanced</h1>
                <p className="text-[#9699ab]">$12/mo</p>
              </div>
            </div>

            <div className="rounded-md mt-3 md:mt-0 md:w-full py-3 pl-4 border border-[#d6d9e6] flex md:flex-col items-center md:items-start">
              <Image src={Pro} alt="" />
              <div className="pl-3 md:pl-0 md:mt-8">
                <h1 className="text-[#02295a] text-lg font-bold">Pro</h1>
                <p className="text-[#9699ab]">$15/mo</p>
              </div>
            </div>
          </div>

          {/* toggle section */}
          <section className="mt-5 flex justify-center py-2 rounded-md gap-5 bg-[#fafbff]">
            <span className="text-[#02295a] text-base font-bold">Monthly</span>
            <input
              className="me-2 mt-[0.3rem] h-4 w-8 appearance-none rounded-[0.4375rem] bg-[#02295a] before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-white after:shadow-switch-2 after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ms-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-switch-1 checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-switch-3 focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ms-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-switch-3 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-white/25 dark:after:bg-surface-dark dark:checked:bg-primary dark:checked:after:bg-primary"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <span className="text-[#02295a] text-base font-bold">Yearly</span>
          </section>

          {/* next section */}
          <section className="mt-32 items-end justify-between hidden md:flex w-full">
            <Link href="/">
              <button className="py-3 font-medium text-[#9699ab]">
                Go Back
              </button>
            </Link>
            <Link href="/select-plan">
              <button className="bg-[#02295a] py-3 px-5 rounded-md text-white">
                Next Step
              </button>
            </Link>
          </section>
        </form>
      </section>

      {/* next section */}
      <section className="px-5 py-4 items-end bg-white fixed md:hidden bottom-0 flex justify-between w-full h-20">
        <Link href="/">
          <button className="py-3 font-medium text-[#9699ab]">Go Back</button>
        </Link>
        <Link href="/add-ons">
          <button className="bg-[#02295a] py-3 px-5 rounded-md text-white">
            Next Step
          </button>
        </Link>
      </section>
    </main>
  );
}
