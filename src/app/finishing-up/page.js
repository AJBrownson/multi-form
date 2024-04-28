import Image from "next/image";
import Link from "next/link";
import Desktop from "../../../public/images/bg-sidebar-desktop.svg";
import Mobile from "../../../public/images/bg-sidebar-mobile.svg";

export default function FinishingUp() {
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
          <h1 className="text-[#02295a] text-2xl font-bold">Finishing up</h1>
          <p className="text-[#9699ab]">
          Double-check everything looks OK before confirming.
          </p>

          <div className="mt-5">
            
          </div>
        </form>
      </section>

      {/* next section */}
      <section className="px-5 py-4 items-end bg-white fixed bottom-0 flex justify-between w-full h-20">
        <Link href="/add-ons">
          <button className="py-3 font-medium text-[#9699ab]">Go Back</button>
        </Link>
        <Link href="/confirm-subscription">
          <button className="bg-[#473dff] py-3 px-5 rounded-md text-white">
            Confirm
          </button>
        </Link>
      </section>
    </main>
  );
}
