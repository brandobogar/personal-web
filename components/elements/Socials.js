import socials from "@/public/assets/data/socials.json";

export default function Social() {
  return (
    <>
      <div className="z-0 flex flex-col items-center justify-center text-center">
        <ul className="flex flex-row items-center gap-8 phone:gap-4">
          <li
            className={
              "w-12 h-12 flex items-center justify-center  dark:border-my-bg-light border-my-bg-dark border-solid border-[2px]  rounded-full hover:bg-white dark:hover:bg-black    hover:scale-110"
            }
          >
            <a
              href={socials[0].link}
              target="blank"
              className="flex items-center justify-center "
            >
              <i className="ri-github-line text-3xl"></i>
            </a>
          </li>
          <li
            className={
              "w-12 h-12 flex items-center justify-center rounded-full dark:border-my-bg-light border-my-bg-dark border-solid border-[2px]  hover:bg-twitter  hover:scale-110"
            }
          >
            <a
              href={socials[1].link}
              target="blank"
              className="flex items-center justify-center "
            >
              <i className="ri-twitter-line text-3xl"></i>
            </a>
          </li>
          <li
            className={
              "w-12 h-12  border-my-bg-dark border-solid border-[2px]    dark:border-my-bg-light flex items-center bg-gradient-conic justify-center rounded-full hover:scale-110 hover:bg-instagram"
            }
          >
            <a
              href={socials[2].link}
              target="blank"
              className="flex items-center justify-center "
            >
              <i className="ri-instagram-line text-3xl"></i>
            </a>
          </li>
          <li
            className={
              "w-12 h-12  border-my-bg-dark border-solid border-[2px]   dark:border-white flex items-center justify-center rounded-full hover:bg-linkedin  hover:scale-110"
            }
          >
            <a
              href={socials[3].link}
              target="blank"
              className="flex items-center justify-center "
            >
              <i className="ri-linkedin-fill text-3xl"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
