import Image from "next/image";
import Me from "@/public/image.jpeg"
import { Button } from "@headlessui/react";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import 'aos/dist/aos.css';

export default function Page() {


  // moved functionality to Navbar.tsx
  //
  // const scrollToSection = (id: string) => {
  //   const section = document.getElementById(id);
  //   if (section) {
  //     const yOffset = 300; // Adjust this value to fit the offset you need
  //     const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
  //     window.scrollTo({ top: y, behavior: 'smooth' });
  //   }
  // };

  // const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  //   event.preventDefault();
  //   scrollToSection(id);
  // };


  return (
    <div className="divide-y divide-gray-100 dark:divide-gray-700">
      <section id="home">
        <div className="pt-14 items-center font-bold text-4xl">
          Introduction
        </div>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 gap-y-16 pb-6">
          <div className="prose max-w-none prose-lg pt-8 pb-7 dark:prose-invert xl:col-span-2">

            <p>
              Hello everyone my name is Nakarin! I am 25 years old and a Software Engineer based in Basel/Switzerland.
            </p>
            <p className="text-justify">
              I enjoy designing and coding applications as it is one of the most creative fields in technology. Driven by curiosity and the desire to craft efficient and user-friendly solutions, I love to work with a variety of technologies to keep a broad horizon and ensure that the right tools are used for the right job.
            </p>

            <a
              href={"/NakarinSrijumratCV.pdf"} download target='_blank'
              className="group text-gray-200 w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-indigo-500 to-blue-700 cursor-pointer"
            >
              Download CV
              <span className="">
                <Button />
              </span>
            </a>
          </div>

          

          <div className="flex flex-col items-center pt-8 pb-8">
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-indigo-950 from-indigo-200 to-transparent rounded-full h-80 w-80 z-0 blur-xl absolute"></div>
            <h3 className="text-2xl font-bold leading-8 tracking-tight">

              Nakarin Srijumrat
            </h3>
            <p className="text-gray-500 dark:text-gray-300 text-center pb-2 z-10">
              Software Engineer
            </p>
            <Image
              alt="Picture of Nakarin"
              src={Me}
              className="w-40 h-44 object-cover rounded-3xl object-top z-10 transform hover:scale-110 duration-200"
            />


            <div className="flex space-x-5 pt-6 z-10">
              <a href="https://github.com/N4karin" target="_blank">
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  className="w-8 h-8 text-indigo-500 hover:text-indigo-600"
                >
                  <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/nakarin-srijumrat/" target="_blank">
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  className="w-8 h-8 text-indigo-500 hover:text-indigo-600"
                >
                  <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>


      <div>
        <section id='projects'>
          <div className="pt-20 items-center font-bold text-4xl pb-10">
            Projects
          </div>

          <Projects />

        </section>
      </div>

      <div>
        <section id='skills' className="pb-10">
          <div className="pt-20 items-center font-bold text-4xl pb-10">
            Skills
          </div>

          <div>
            <Skills />
          </div>
        </section>
      </div>




      <div>
        <section id='contact' className="pb-10">
          <div className="pt-20 items-center font-bold text-4xl pb-10">
            Contact
          </div>

          <div>
            <Contact />
          </div>
        </section>
      </div>

    </div>

  );
}
