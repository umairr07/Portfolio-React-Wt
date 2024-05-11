const Siderbar = () => {
  return (
    <div className="p-5 w-[30%] flex flex-col justify-between">
      <div className="">
        <h1 className="text-5xl font-bold">Umer Shaikh</h1>
        <p className="text-lg font-semibold italic">Frontend Developer</p>
        <p>I build live & unique projects </p>
      </div>

      <div>
        <ul className="flex flex-col gap-5 mt-10 cursor-pointer">
          <li>About</li>
          <li>Certificates</li>
          <li>Projects</li>
          <li>More</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Siderbar;
