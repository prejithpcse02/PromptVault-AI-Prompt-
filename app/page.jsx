import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head-text text-center">Discover & Share</h1>
      <br className="max-md:hidden" />
      <span className="sub-text text-center text-white ">
        AI-Powered Prompts
      </span>
      <p className="text-center desc">
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>
      <Feed />
    </section>
  );
};

export default Home;
