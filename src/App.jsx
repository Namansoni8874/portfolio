import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import photographer from "../src/assets/photographer.png";
import aeroplane from "../src/assets/aeroplane.png";
import Fashion from "../src/assets/Fashion/image2.jpg"
import Media from "../src/assets/Media/image1.jpg"
import Product from "../src/assets/Product/image1.jpg"
import Weeding from "../src/assets/wedding/image3.jpg"
import homeimage from "../src/assets/homeimage.jpg"
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

  const pinnedSections = [firstPin, secondPin, thirdPin, fourthPin, lastCard];
  useGSAP(() => {
    pinnedSections.forEach((section, index, sections) => {
      let img = section.current.querySelector(".img");
     
      let nextSection = sections[index + 1] || lastCard;
      let endScalePoint = `top+=${
        nextSection.current.offsetTop - section.current.offsetTop
      } top`;
      let endValue = footer.current.offsetTop - window.innerHeight;
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
        { scale: 1 },
        {
          scale: 0.5,
          ease: "none",
          scrollTrigger: {
            trigger: section.current,
            start: "top top",
            end: endScalePoint,
            scrub: 1,
           
          },
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
          <a className="dm-serif-text-regular-italic">Turning Moments Into Magic</a>
        </div>
        
        <section  ref={firstPin} className=" h-[100vh] w-[100vw] ">
          <div className="w-[100%] h-[100%] absolute overflow-hidden">
            <img className="h-[100%] w-[100%] object-cover" src={homeimage}/>
          </div>
          
          <h1 className="dm-serif-text-regular sm:text-[170px] text-[70px] font-bold w-[100%] absolute sm:top-[55%] top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center leading-[100%] ">
            Capturing <br />
            <span>wholeWorld</span>
          </h1>
        </section>
        <section ref={secondPin} className="h-[100vh] w-[100vw]">
          <div className="img absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[100%] h-[100%]">
            <Categories image={Fashion} name="Fashion" />
          </div>
        </section>
        <section ref={thirdPin} className="h-[100vh] w-[100vw]">
          <div className="img absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[100%] h-[100%]">
            <Categories image={Weeding} name="Weeding" />
          </div>
        </section>
        <section ref={fourthPin} className="h-[100vh] w-[100vw]">
          <div className="img absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[100%] h-[100%]">
            <Categories image={Media}  name="Media"/>
          </div>
        </section>
        <section ref={lastCard} className="h-[100vh] w-[100vw] relative">
          <div className="img absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[100%] h-[100%]">
            <Categories image={Product} name="Product" />
          </div>
        </section>
        <section
          ref={footer}
          className=" w-[100%] h-[100vh] flex justify-center items-center"
        >
          <h1 className="text-[48px] font-[400] ">Footer</h1>
        </section>
      </div>
    </>
  );
}

export default App;
