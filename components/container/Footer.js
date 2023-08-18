import Social from "../elements/Socials";

export default function Footer() {
  return (
    <>
      <footer
        id="footer"
        className="flex flex-row justify-around w-full h-32 py-10 bg-my-bg-light footer dark:bg-my-bg-dark text-my-text-light dark:text-my-text-dark font-open phone:flex-col phone:h-1/2"
      >
        <div className="flex flex-col items-start justify-center w-1/2 h-full pl-20 phone:pl-10 ">
          <span className="footer-title">Services</span>

          <p className="link link-hover">Design</p>

          <p className="link link-hover">Web Development</p>
        </div>
        <div className="flex flex-col items-start justify-center w-1/2 h-full pl-20 phone:pl-10 tablet:pl-5">
          <span className="footer-title">Social</span>

          <Social />
        </div>
        {/* <div className="hidden">
          <span className="footer-title">Contact Me</span>
          <form className="flex flex-row gap-4">
            <input
              className="w-full max-w-xs input input-bordered"
              placeholder="Your Email"
            />
            <button className="btn btn-md btn-neutral dark:btn">Submit</button>
          </form>
        </div> */}
      </footer>
    </>
  );
}
