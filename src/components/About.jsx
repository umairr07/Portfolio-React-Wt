export const About = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">ABOUT ME</h1>

      <div className=" p-3 rounded-lg mt-5 flex flex-col gap-10 bg-[#3c4e80] shadow-lg">
        <div>
          <p>
            Hello there, I am Umer Shaikh an Aspiring Frontend Developer from
            Aurangabad, Maharashtra, a frontend whiz who loves making websites
            look awesome and easy to use. I play around with colors, shapes, and
            buttons to create fun online spaces. Come along and lets make the
            web a cooler place together, one site at a time!
          </p>
          <p>
            In my free time, I enjoy exploring my other passions, such as
            photography and music production, which provide me with creative
            outlets. I am also very passionate about Web3 and everything related
            to crypto, NFTs and blockchain technology as I believe they have the
            potential to revolutionize business and online interactions.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <p>Name : Umer Shaikh</p>
          <p>Date of Birth : September 26, 2003</p>
          <p>Address : Aurangabad, Maharashtra</p>
          <p>Email : imumairshaikh@gmail.com</p>
          <p>Contact : +91-2234-5678-9-0</p>
        </div>
      </div>
    </div>
  );
};
