import Image from "next/image";
import React from "react";
import { IoLockClosedSharp } from "react-icons/io5";
// import { AiOutlineSecurityScan } from "react-icons/ai";
// import { FaNetworkWired } from "react-icons/fa6";
// import { FcApproval } from "react-icons/fc";

// Define the types for the ServiceCard props
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-11/12 md:w-3/4 my-10">
        <div className="border-b-[1px] border-gray-200 w-full"></div>

        <div className="flex flex-col items-center justify-center py-4">
          <div className="text-center my-12">
            <h1 className="text-4xl md:text-5xl font-bold uppercase text-gray-800 tracking-wide">
              Secure Your Infrastructure
            </h1>
            <p className="mt-4 md:text-lg text-md text-gray-600 leading-relaxed max-w-2xl mx-auto">
              We offer comprehensive IT services designed to help you build a
              stronger, more secure IT environment. Protect your business with
              our expert solutions.
            </p>
          </div>
          {/* <div className="bg-white text-black py-12 text-center md:w-2/3 w-11/12">
            <p className="text-lg md:text-3xl leading-relaxed">
              From{" "}
              <span className="font-semibold">
                workforce strategies and talent acquisition
              </span>{" "}
              through a broad range of{" "}
              <span className="font-semibold">managed IT services</span> to{" "}
              <span className="font-semibold">
                digital transformation and platform engineering
              </span>{" "}
              – our expert consultants located on four continents cause
              technology to{" "}
              <span className="font-semibold">drive your business goals</span>.
            </p> 
          </div> */}
        </div>

        <div className="my-16 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Why Work with Us?
          </h1>
          <div className="my-6 flex flex-col md:flex-row gap-10 justify-center items-center">
            <p className="flex items-center gap-4 text-lg md:text-xl leading-snug">
              <span className="text-4xl font-bold md:text-5xl">50+</span>
              Delivered Software Projects
            </p>
            <p className="flex items-center gap-4 text-lg md:text-xl leading-snug">
              <span className="text-4xl font-bold md:text-5xl">100%</span>
              Efficiency Rate
            </p>
            <p className="flex items-center gap-4 text-lg md:text-xl leading-snug">
              <IoLockClosedSharp className="text-4xl md:text-5xl" />
              Highly Accredited Security
            </p>
          </div>
        </div>

        <div className="py-12 flex flex-col justify-center items-center">
          <div className="blue-glassmorphism text-white px-6 py-3 m-8 text-center text-sm md:text-base rounded-md tracking-widest">
            OUR SERVICES
          </div>
          <h1 className="text-4xl md:text-5xl font-bold m-4 p-2 text-center">
            Field of <span className="text-[#FF204E]">Expertise</span>
          </h1>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-12 my-8 md:w-3/4 w-11/12">
            {/* Web & Mobile Development */}
            <div className="border-[1px] border-gray-200 shadow-lg rounded-xl p-6 flex flex-col justify-center bg-white hover:bg-gray-50 ease-in-out duration-200">
              <Image
                src="/software.jpg"
                width={500}
                height={200}
                alt="none"
                className="rounded-xl"
              />
              <h1 className="py-6 text-left text-2xl font-semibold text-gray-800">
                Web & Mobile Development
              </h1>
              <p className="py-4 text-gray-600 leading-relaxed">
                We specialize in creating responsive, user-friendly web and
                mobile applications tailored to meet the specific needs of your
                business. Our team leverages the latest technologies and best
                practices to deliver solutions that not only look great but also
                perform exceptionally well. Whether it&apos;s an e-commerce platform,
                a corporate website, or a custom mobile app, we ensure a
                seamless user experience across all devices.
              </p>
            </div>

            {/* Intrusion Detection and Prevention Systems */}
            <div className="border-[1px] border-gray-200 shadow-lg rounded-xl p-6 flex flex-col justify-center bg-white hover:bg-gray-50 ease-in-out duration-200">
              <h1 className="pb-6 text-left text-2xl font-semibold text-gray-800">
                Intrusion Detection and Prevention Systems
              </h1>
              <p className="py-4 text-gray-600 leading-relaxed">
                Protect your digital assets with our advanced Intrusion
                Detection and Prevention Systems (IDPS). We offer comprehensive
                solutions that monitor your network for suspicious activities
                and potential threats. Our systems are designed to detect and
                prevent cyber-attacks in real-time, ensuring your business
                remains secure. We tailor our IDPS solutions to fit your
                organization&apos;s specific requirements, providing robust
                protection against an evolving threat landscape.
              </p>
              <Image
                src="/cyber.jpg"
                width={500}
                height={200}
                alt="none"
                className="rounded-xl mt-4"
              />
            </div>

            {/* IT Risk Management and Compliance Review */}
            <div className="border-[1px] border-gray-200 shadow-lg rounded-xl p-6 flex flex-col justify-center bg-white hover:bg-gray-50 ease-in-out duration-200">
              <Image
                src="/risk.jpg"
                width={500}
                height={200}
                alt="none"
                className="rounded-xl"
              />
              <h1 className="py-6 text-left text-2xl font-semibold text-gray-800">
                IT Risk Management and Compliance Review
              </h1>
              <p className="py-4 text-gray-600 leading-relaxed">
                Our IT Risk Management services are designed to identify,
                assess, and mitigate risks within your IT infrastructure. We
                conduct thorough compliance reviews to ensure your organization
                adheres to industry regulations and standards. By identifying
                potential vulnerabilities and implementing effective controls,
                we help you minimize risk and maintain the integrity of your IT
                systems. Our proactive approach ensures that your business
                remains compliant and secure in an increasingly regulated
                environment.
              </p>
            </div>

            {/* Penetration Testing */}
            <div className="border-[1px] border-gray-200 shadow-lg rounded-xl p-6 flex flex-col justify-center bg-white hover:bg-gray-50 ease-in-out duration-200">
              <h1 className="pb-6 text-left text-2xl font-semibold text-gray-800">
                Penetration Testing
              </h1>
              <p className="py-4 text-gray-600 leading-relaxed">
                Our Penetration Testing services simulate real-world
                cyber-attacks to assess the security of your IT systems. We
                identify vulnerabilities before malicious hackers can exploit
                them, helping you strengthen your defenses. Our ethical hacking
                team uses advanced techniques to test the resilience of your
                network, applications, and endpoints. After the test, we provide
                detailed reports and actionable recommendations to enhance your
                security posture.
              </p>
              <Image
                src="/penn.jpg"
                width={500}
                height={200}
                alt="none"
                className="rounded-xl mt-4"
              />
            </div>

            {/* IT Infrastructure & Network Administration */}
            <div className="border-[1px] border-gray-200 shadow-lg rounded-xl p-6 flex flex-col justify-center bg-white hover:bg-gray-50 ease-in-out duration-200">
              <Image
                src="/network.jpg"
                width={500}
                height={200}
                alt="none"
                className="rounded-xl"
              />
              <h1 className="py-6 text-left text-2xl font-semibold text-gray-800">
                IT Infrastructure & Network Administration
              </h1>
              <p className="py-4 text-gray-600 leading-relaxed">
                We offer comprehensive IT Infrastructure and Network
                Administration services to ensure your business operates
                smoothly and efficiently. Our team manages and maintains your IT
                infrastructure, including servers, networks, and storage
                systems. We implement robust network solutions that ensure
                optimal performance, security, and scalability. Whether you need
                ongoing maintenance or a complete network overhaul, we provide
                solutions that align with your business objectives.
              </p>
            </div>

            {/* Cloud Consultation & Implementation */}
            <div className="border-[1px] border-gray-200 shadow-lg rounded-xl p-6 flex flex-col justify-center bg-white hover:bg-gray-50 ease-in-out duration-200">
              <h1 className="pb-6 text-left text-2xl font-semibold text-gray-800">
                Cloud Consultation & Implementation
              </h1>
              <p className="py-4 text-gray-600 leading-relaxed">
                Leverage the power of the cloud with our Cloud Consultation and
                Implementation services. We help businesses migrate to cloud
                platforms, optimize cloud infrastructure, and implement
                cloud-based solutions that drive efficiency and innovation. Our
                experts work closely with you to understand your needs and
                design a cloud strategy that aligns with your goals. From
                planning to execution, we ensure a smooth transition to the
                cloud, maximizing your return on investment.
              </p>
              <Image
                src="/cloud.jpg"
                width={500}
                height={200}
                alt="none"
                className="rounded-xl mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
