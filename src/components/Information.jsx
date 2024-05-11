import { About } from "./About";
import Certificates from "./Certificates";
import Contact from "./Contact";
import Projects from "./Projects";

const Information = () => {
  return (
    <div className="p-5  w-[60%]">
      <About />
      <Certificates />
      <Projects />
      <Contact />
    </div>
  );
};

export default Information;
