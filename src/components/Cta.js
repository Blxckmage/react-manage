const Cta = () => {
  return (
    <section id="cta" className="bg-brightRed">
      {/* Flex Container */}
      <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
        {/* Heading */}
        <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
          Simplify how your team works today
        </h2>
        {/* Button */}
        <div>
          <a
            href="#"
            className="p-3 px-6 pt-2 bg-white text-brightRed rounded-full baseline shadow-2xl hover:bg-gray-900"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cta;
