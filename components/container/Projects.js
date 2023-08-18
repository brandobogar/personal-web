import projects from "@/public/assets/data/projects.json";
import icons from "@/public/assets/data/icons.json";
import Image from "next/image";

export default function Project() {
  function getIcon(tech) {
    const matchedIcon = icons.find((icon) => icon.name === tech);
    return matchedIcon ? matchedIcon.src : null;
  }

  return (
    <>
      <div
        id="project"
        className="flex flex-col items-center w-full h-screen justify-evenly phone:h-max tablet:h-max"
      >
        <h1 className="text-3xl underline font-open text-my-text-light dark:text-my-text-dark phone:mb-5 tablet:mb-5">
          PROJECT
        </h1>

        <ul className="grid grid-cols-3 gap-5 phone:grid-cols-1 tablet:grid-cols-2">
          {projects.slice(0, 6).map((project, index) => {
            return (
              <li
                key={project.name}
                className="bg-white border-[1px] border-slate-400 w-72 rounded-3xl h-56 p-2 font-open dark:text-black"
              >
                <div
                  className={`flex flex-col w-full gap-6 px-2 h-3/4 rounded-2xl  ${
                    index < 3 ? "bg-blue-100" : "bg-amber-100"
                  }`}
                >
                  <div className="flex flex-col items-center justify-center h-10 px-2 mt-4 bg-white rounded-full max-w-fit">
                    <p className="text-sm font-semibold">{project.date}</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-bold text-md">{project.topics}</p>
                    <p className="text-sm">{project.name}</p>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-full px-1 mt-1 h-1/4 ">
                  <ul className="flex flex-row items-center justify-start w-full h-full gap-x-4 ">
                    {project.techs.map((tech, index) => (
                      <li key={index}>
                        <Image
                          src={String(getIcon(tech))}
                          alt="img"
                          width={30}
                          height={30}
                        />
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.link}
                    target="blank"
                    className="flex items-center justify-center w-24 h-8 text-white bg-black rounded-full"
                  >
                    Details
                  </a>
                </div>
              </li>
            );
          })}
          <li className="col-span-3 phone:col-span-1 tablet:col-span-2">
            <div className="flex items-end justify-end w-full h-full ">
              <a
                href="https://github.com/brandobogar"
                className="text-lg font-semibold"
              >
                View more..
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
