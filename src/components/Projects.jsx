import { RESUME_AI, CALENDLY } from "../constants/data";

const Projects = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">PROJECTS</h1>

      <div className=" p-3 rounded-lg mt-5 flex flex-col gap-10 bg-[#3c4e80] shadow-lg">
        <div>
          <a href={RESUME_AI} target="blank">
            Interview ready wiht Ai
          </a>{" "}
          <br />
          <a href={CALENDLY} target="blank">
            Clone a calendly ui
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
