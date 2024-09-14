import React from "react";
import {
  FcBullish,
  FcGlobe,
  FcMindMap,
  FcIdea,
  FcCustomerSupport,
  FcApproval,
  FcRight,
  FcDown,
} from "react-icons/fc";
import { TimelineDemo } from "./TimelineDemo";

const Expertise: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-12">
      <div className="bg-sky-300 font-bold px-6 py-3 m-8 text-center text-sm md:text-base rounded-md tracking-widest">
        OUR APPROACH
      </div>
      <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide m-4 p-2 text-center">
        The Way <span className="text-[#FF204E]">We Work</span>
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8 w-11/12 md:w-3/4 my-8">
        <div className="bg-sky-100 hover:bg-sky-200 p-6 rounded-lg transition-colors duration-300">
          <FcBullish className="text-3xl mb-8" />
          <h2 className="text-lg md:text-xl font-semibold mb-4">
            Analytical Approach
          </h2>
          <p className="text-sm md:text-base">
            Before they start any work, our consultants research your
            organization and its business ecosystem so our solutions fit your
            business goals and needs.
          </p>
        </div>
        <div className="bg-sky-100 hover:bg-sky-200 p-6 rounded-lg transition-colors duration-300">
          <FcApproval className="text-3xl mb-8" />
          <h2 className="text-lg md:text-xl font-semibold mb-4">
            Sustainability and Flexibility
          </h2>
          <p className="text-sm md:text-base">
            We focus on delivering added value from the start, planning for your
            sustainable growth, and remaining flexible enough to scale up or
            down when you need it.
          </p>
        </div>
        <div className="bg-sky-100 hover:bg-sky-200 p-6 rounded-lg transition-colors duration-300">
          <FcIdea className="text-3xl mb-8" />
          <h2 className="text-lg md:text-xl font-semibold mb-4">
            Strategic Thinking
          </h2>
          <p className="text-sm md:text-base">
            Building future-proof solutions rooted in your existing assets
            starts with a comprehensive strategy created in collaboration with
            your organization’s leadership.
          </p>
        </div>
        <div className="bg-sky-100 hover:bg-sky-200 p-6 rounded-lg transition-colors duration-300">
          <FcGlobe className="text-3xl mb-8" />
          <h2 className="text-lg md:text-xl font-semibold mb-4">
            Reliable Governance
          </h2>
          <p className="text-sm md:text-base">
            Our experts facilitate observability, suggest processes and
            procedures to ensure work gets done in an efficient way, and
            frequently update you on progress made.
          </p>
        </div>
        <div className="bg-sky-100 hover:bg-sky-200 p-6 rounded-lg transition-colors duration-300">
          <FcMindMap className="text-3xl mb-8" />
          <h2 className="text-lg md:text-xl font-semibold mb-4">
            Robust Service Models
          </h2>
          <p className="text-sm md:text-base">
            For our clients’ convenience, we design all our processes for
            seamlessness. Straightforward reporting, cooperation, and
            flexibility are our top priorities.
          </p>
        </div>
        <div className="bg-sky-100 hover:bg-sky-200 p-6 rounded-lg transition-colors duration-300">
          <FcCustomerSupport className="text-3xl mb-8" />
          <h2 className="text-lg md:text-xl font-semibold mb-4">
            People-Centric Culture
          </h2>
          <p className="text-sm md:text-base">
            The experience of our clients and employees has been at the center
            of how Maxima Consulting does business since its humble beginnings
            in Boston in 1993.
          </p>
        </div>
      </div>
      <br />
      <div className="w-full">
        <TimelineDemo />
      </div>
      <br />
      <div className="bg-sky-300 font-bold px-6 py-3 m-8 text-center text-sm md:text-base rounded-md tracking-widest">
        OUR PROCESS
      </div>
      <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide m-4 p-2 text-center">
        What happens when you <span className="text-[#FF204E]">reach out</span>{" "}
        to us?
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 w-11/12 md:w-3/4 mt-8 py-8">
        <div className="bg-teal-100 p-6 rounded-lg transition-colors duration-300">
          <h4 className="text-xl text-[#FF204E] font-semibold mb-8">1</h4>
          <h2 className="text-lg md:text-xl font-semibold mb-4">
            Initial assessment
          </h2>
          <p className="text-sm md:text-base">
            We schedule a call to find out more about your goals and needs.
          </p>
        </div>
        <div className="bg-[#FF204E] rounded-full p-1">
          <FcRight className="text-2xl hidden md:block" />
          <FcDown className="text-2xl block md:hidden" />
        </div>
        <div className="bg-teal-100 p-6 rounded-lg transition-colors duration-300">
          <h4 className="text-xl text-[#FF204E] font-semibold mb-8">2</h4>
          <h2 className="text-lg md:text-xl font-semibold mb-4">
            Deep research
          </h2>
          <p className="text-sm md:text-base">
            Our specialists analyze your current situation to adjust our
            solutions to you.
          </p>
        </div>
        <div className="bg-[#FF204E] rounded-full p-1">
          <FcRight className="text-2xl hidden md:block" />
          <FcDown className="text-2xl block md:hidden" />
        </div>
        <div className="bg-teal-100 p-6 rounded-lg transition-colors duration-300">
          <h4 className="text-xl text-[#FF204E] font-semibold mb-8">3</h4>
          <h2 className="text-lg md:text-xl font-semibold mb-4">
            Tailored solution
          </h2>
          <p className="text-sm md:text-base">
            You receive expert support based on your unique business profile.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="eth-card py-16 md:w-2/3 w-11/12 my-16 rounded-xl text-white flex flex-col justify-center items-center">
          <h3 className="text-2xl font-bold text-center md:w-1/2 w-3/4 m-2 p-2">Sign up for the Tech Revolution</h3>
          <p className="md:w-1/2 w-11/12 md:text-base text-sm text-center m-2 p-2">
            Stay ahead of the curve with our bi-weekly newsletter, where
            industry experts at Cyber Genesis X delve into the latest
            technological advancements and their effects on your business and
            workforce.
          </p>
          <form className="flex bg-white p-2 m-2 rounded">
            <input type="email" placeholder="johndoe@mail.com" className="p-2 focus:outline-none focus:ring-0 focus:border-transparent text-black" />
            <button className="bg-black text-white p-2 hover:opacity-70 ease-in-out duration-200 rounded">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
