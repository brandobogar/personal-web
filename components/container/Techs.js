/* eslint-disable @next/next/no-img-element */
import icons from "@/public/assets/data/icons.json";
import Image from "next/image";

export default function Techs() {
  const skills = [
    "react",
    "photoshop",
    "tailwind",
    "illustrator",
    "flask",
    "tensorflow",
    "flutter",
    "python",
  ];

  function getIcon(tech) {
    const matchedIcon = icons.find((icon) => icon.name === tech);
    return matchedIcon ? matchedIcon.src : null;
  }
  return (
    <>
      <div
        className="flex flex-col items-center justify-evenly w-full h-fit mt-20"
        id="skills"
      >
        <div className="flex items-center justify-evenly w-full h-screen flex-col">
          <h1 className="text-3xl underline text-my-text-light dark:text-my-text-dark font-open phone:mb-10 tablet:mb-10">
            TECHS
          </h1>
          <ul className="grid grid-cols-4 gap-x-16 gap-y-20 phone:grid-cols-2 phone:gap-x-4 tablet:grid-cols-3">
            {skills.map((skill) => (
              <li key={skill} className="h-24 hover:scale-110">
                <Image
                  src={getIcon(skill)}
                  alt="skill"
                  className="h-full bg-transparent cursor-default animate-float drop-shadow-3xl btn btn-ghost hover:bg-transparent"
                  width={150}
                  height={150}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
