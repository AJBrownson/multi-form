import Image from "next/image";
import Link from "next/link";
import Desktop from "../../../public/images/bg-sidebar-desktop.svg";
import Mobile from "../../../public/images/bg-sidebar-mobile.svg";
import Thanks from "../../../public/images/icon-thank-you.svg";

export default function ConfirmSubcription() {
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
        <form className="px-5 py-20 bg-[#fff] flex flex-col items-center text-center w-[90%] rounded-lg absolute top-[58%]">
          <Image src={Thanks} alt="" className="w-16 h-16 mb-5" />
          <h1 className="text-[#02295a] text-3xl font-bold mb-3">Thank you!</h1>
          <p className="text-[#9699ab] text-base">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </form>
      </section>
    </main>
  );
}
