const Contact = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">Contact Me</h1>

      <div className=" p-3 rounded-lg mt-5 flex flex-col gap-10 bg-[#3c4e80] shadow-lg">
        <div>
          <h1>ADDRESS</h1>
          <p>Aurangabad, Maharashtra</p>
        </div>

        <div>
          <h1>CONTACT NUMBER</h1>
          <p>+ 1235 2355 98</p>
        </div>

        <div>
          <h1>EMAIL ADDRESS</h1>
          <p>imumairshaikh@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
