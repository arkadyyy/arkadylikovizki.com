import Image from "next/image";
import github from "@/public/github_dark.svg";
import vue from "@/public/vue.svg";
import styles from "./styles.module.css";
import yad2_bg from "@/public/yad2_bg.jpg";
import useCenterIntersection from "@/app/hooks/useCenterIntersection";
import useIsMobile from "@/app/hooks/useIsMobile";
import { Ref, RefObject } from "react";

function Card({
  animationDelay,
  rootRef,
}: {
  animationDelay: number;
  rootRef: RefObject<HTMLElement>;
}) {
  const isMobile = useIsMobile();
  const [cardRef, isCentered] = useCenterIntersection(rootRef);

  const activeOnMobileCard = `${isCentered ? "glowing_element_mobile" : ""}`;

  return (
    <li
      ref={cardRef as Ref<HTMLLIElement>}
      style={{ animationDelay: `${777 + animationDelay * 200}ms` }}
      className={`relative inline-block mr-2 md:mr-6 h-5/6 w-92 md:w-100 2xl:w-xl lg:w-lg  md:h-[80%] rounded-xl shadow-lg  overflow-hidden drop-shadow-md ${styles.card} ${styles.activeOnMobileCard}  `}
    >
      {/* background layer */}
      {/* <div
        style={{
          backgroundImage: `url(${yad2_bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(6px)", //
          opacity: 0.16, //
          // borderRadius: "12px",
          // zIndex: 2,
          // backdropFilter: blur("40px"),
        }}
        className={`absolute inset-0 bg-white/6 p-12 isolate ${styles.card_video} `}
      ></div> */}
      <div className=" w-[36rem] h-[50rem] rounded-xl bg-white/6 p-12 isolate aspect-video opacity-100 z-10">
        <a className="absolute right-6 top-6 md:right-8 md:top-8 rounded-sm p-2 bg-white flex items-center justify-center cursor-pointer ring-2 ring-gray-200/80 drop-shadow-md">
          <Image alt="github" src={github} />
        </a>
        <div className="absolute inset-y-60 md:inset-y-70 m-auto">
          <div className="w-[16rem] md:w-[20rem] h-[1px] bg-gray-100"></div>
          <h1 className=" text-xl md:text-2xl 2xl:text-3xl font-semibold pt-2">
            Yad2 Supercopy
          </h1>
          <h2 className=" text-md md:text-lg 2xl:text-xl pt-4 md:pt-10 mb-4">
            Technologies
          </h2>
          <div className="flex flex-wrap w-90">
            <div className="flex items-center justify-between bg-gray-100 rounded-xl md:rounded-2xl px-4 h-7 md:h-8 w-fit mr-2 mb-2">
              <Image className="relative right-1 w-4 h-4" alt="vue" src={vue} />
              <p className="text-dark font-bold text-[12px] md:text-[0.8rem]">
                Vue
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.glowing_element}`}></div>
        <button className="absolute m-auto inset-x-0 bottom-12 bg-gray-100 rounded-md p-2 w-80 cursor-pointer drop-shadow-md">
          <h3 className="text-dark font-medium">Open Project</h3>
        </button>
      </div>
    </li>
  );
}

export default Card;
