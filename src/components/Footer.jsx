import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function Footer() {
  return (
    <div className={'w-full h-fit flex mt-5 gap-4 items-center justify-center text-lg tracking-wider pb-3'}>
        <p>Created By - Saksham Jain</p>
        <a
          href="https://github.com/sakshamjain0464/ShufflIt"
          target="_blank"
          rel="noreferrer"
          className="hover:text-purple-800"
          >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/saksham-jain-15bab2205/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-purple-800"
          >
          <FaLinkedin />
        </a>
      </div>
  )
}

export default Footer
