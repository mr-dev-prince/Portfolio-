const IntroSection = () => {
  return (
    <>
      <div className="font-slabo mt-8">
        <p className="text-4xl text-white font-bold">Hey, I'm Prince,</p>
        <p className="text-2xl text-white font-bold mt-3">
          Welcome to my little dev world on the internet.
        </p>
      </div>
      <div className=" JetBrains text-gray-300">
        <p className="mt-4">
          I'm a software engineer with a passion for building things that live
          on the internet. I enjoy creating delightful user experiences and
          exploring new technologies.
        </p>
        <p className="mt-2">
          When I'm not coding, you can find me exploring the latest tech trends,
          reading about software architecture, or contributing to open-source
          projects.
          <span>
            Read more about me{" "}
            <a href="about" className="text-blue-500 underline">
              here
            </a>
            .
          </span>
        </p>
      </div>
    </>
  );
};

export default IntroSection;
