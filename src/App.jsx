import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import instagram from "../src/assets/icons/instagram.png";
import twitter from "../src/assets/icons/twitter.png";
import whatsapp from "../src/assets/icons/whatsapp.png";
import Fashion from "../src/assets/videos/fashion.mp4";
import Media from "../src/assets/videos/concert.mp4";
import Product from "../src/assets/videos/product.mp4";
import Weeding from "../src/assets/videos/wedding.mp4";
import homeimage from "../src/assets/home.mp4";
import admin from "../src/assets/admin.png";
import "./App.css";
import Categories from "./pages/Categories";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
  const lastCard = useRef(null);
  const firstPin = useRef(null);
  const secondPin = useRef(null);
  const thirdPin = useRef(null);
  const fourthPin = useRef(null);
  const footer = useRef(null);
  const capturing = useRef(null);
  const whole = useRef(null);
  const world = useRef(null);

  const pinnedSections = [firstPin, secondPin, thirdPin, fourthPin, lastCard,footer];
  useGSAP(() => {
    pinnedSections.forEach((section, index, sections) => {
      let img = section.current.querySelector(".img");

      // let nextSection = sections[index + 1] || lastCard;
      // let endScalePoint = `top+=${
      //   nextSection.current.offsetTop - section.current.offsetTop
      // } top`;
      let endValue = (footer.current.offsetTop+footer.current.offsetHeight) - window.innerHeight;
      gsap.to(section.current, {
        scrollTrigger: {
          trigger: section.current,
          start: "top top",
          end: endValue,
          pin: true,
          pinSpacing: false,
          scrub: 1,
          
        },
      });
      gsap.fromTo(
        img,
        { scale: 0.5 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section.current,
            start: "top bottom",
            end: "top top",
            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        [whole.current, capturing.current, world.current],
        {
          scale: 0,
        },
        {
          scale: 1,
          duration: 1,
          delay: 1,
        }
      );
    });
  });

  return (
    <>
      <div className=" h-20 w-[80%]  z-50 fixed left-[10%]">
        <Navbar />
      </div>
      <div className="w-[100%] h-[100%] overflow-hidden">
        <div className="absolute top-[85%] left-[50%] translate-x-[-50%] text-xl font-light z-[2]">
          <a className="text-2xl font-semibold text-white cormorant-garamond-light">
            Turning Moments Into Magic
          </a>
        </div>

        <section ref={firstPin} className=" h-[100vh] w-[100vw] ">
          <div className="w-[100%] h-[100%] absolute overflow-hidden">
           <video className="h-[100%] w-[100%] object-cover blur-xs" autoPlay muted loop>
            <source src={homeimage}/>
           </video>
          </div>

          <h1
            ref={capturing}
            className="bebas-neue-regular text-gray-400 sm:text-[110px]  text-[70px]  w-[100%] absolute sm:top-[40%] top-[30%] sm:left-0  sm:translate-x-[-25%] text-center  translate-y-[-50%]  leading-[100%] "
          >
            Capturing
          </h1>
          <h1
            ref={whole}
            className="bebas-neue-regular text-gray-300 sm:text-[110px]  text-[70px]  w-[100%] absolute sm:top-[55%] top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center leading-[100%] "
          >
            Whole
          </h1>
          <h1
            ref={world}
            className="bebas-neue-regular text-gray-200 sm:text-[110px]  text-[70px]  w-[100%] absolute sm:top-[70%] top-[50%] sm:left-[70%]  sm:translate-x-[-50%] translate-y-[-50%] text-center leading-[100%] "
          >
            World
          </h1>
        </section>
        <section ref={secondPin} className="h-[100vh] w-[100vw]">
          <div className=" img absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[100%] h-[100%]">
            <Categories  image={Fashion} name="Fashion" />
          </div>
        </section>
        <section ref={thirdPin} className="h-[100vh] w-[100vw]">
          <div className="img absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[100%] h-[100%]">
            <Categories image={Weeding} name="Weeding" />
          </div>
        </section>
        <section ref={fourthPin} className="h-[100vh] w-[100vw]">
          <div className="img absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[100%] h-[100%]">
            <Categories image={Media} name="Media" />
          </div>
        </section>
        <section ref={lastCard} className="h-[100vh] w-[100vw] relative">
          <div className="img absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[100%] h-[100%]">
            <Categories image={Product} name="Product" />
          </div>
        </section>
        <section
          ref={footer}
          className=" w-[100%] h-[100vh] flex flex-col  gap-[50px] items-center justify-center bg-gradient-to-r from-blue-600 to-sky-300"
        >
          <div className="flex flex-col sm:flex-row  gap-[50px] justify-center  w-[90%]">
            {/* social media section */}
            <div className="flex flex-col items-center justify-center cormorant-garamond-light  ">
              <h1 className="text-3xl font-bold">Stay in touch</h1>
              <h2 className="text-2xl font-semibold">Contact</h2>
              <h3 className="text-xl">
                contact@theconcertmedia.com <br />
                +91 7900090030 +91 8126619172
              </h3>
            </div>

            {/* profile */}
            <div className="flex flex-col items-center">
              <img
                className="sm:w-[22vw] sm:h-[50vh] w-[80vw] h-[40vh]"
                src={admin}
              />
              <h1 className="text-center text-xl font-semibold cormorant-garamond-light">
                Prashant Mishra
              </h1>
            </div>
            <div className="flex flex-row sm:flex-col justify-center gap-3">
              <img className="h-[50px] w-[50px]" src={whatsapp} />
              <img className="h-[50px] w-[50px]" src={instagram} />
              <img className="h-[50px] w-[50px]" src={twitter} />
            </div>
          </div>
          <div className="w-[90%] border-t-[1px] ">
            <h1 className="text-center">Made by Naman</h1>
          </div>
        </section>
        
      </div>
    </>
  );
}

export default App;
