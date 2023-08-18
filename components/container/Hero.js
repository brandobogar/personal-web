import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="flex flex-row items-center w-full h-screen justify-evenly bg-my-bg-light dark:bg-my-bg-dark phone:flex-col">
        <div className="flex flex-col items-start justify-center w-1/2 gap-5 pl-20 text-5xl text-left font-open dark:text-my-text-dark phone:text-2xl phone:p-0 phone:w-3/4 tablet:pl-10">
          <h1>Hello there!!</h1>
          <div className="w-fit">
            <p className="pr-4 overflow-hidden font-bold border-r-4 font-oswald animate-typing whitespace-nowrap border-r-my-bg-dark ">
              I&apos;m Brando
            </p>
          </div>
          <div>
            <a className="btn dark:btn btn-md btn-neutral" href="#footer">
              Contact me
              <span>
                <i className="ri-arrow-right-line"></i>
              </span>
            </a>
          </div>
        </div>
        <div className="w-1/2 pl-20 phone:order-first phone:p-0 phone:w-full phone:h-1/2 tablet:pl-10">
          <Image
            src={"/assets/landing2.svg"}
            alt={"image"}
            width={300}
            height={300}
          />
        </div>
        {/* <Color /> */}
      </div>
    </>
  );
}
