import anisha from "../image/avatar-anisha.png";
import ali from "../image/avatar-ali.png";
import richard from "../image/avatar-richard.png";

const Testimonials = () => {
  return (
    <section id="testimonials">
      {/* Container to heading and testimonials blocks */}
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center">
          What's Different About Manage?
        </h2>
        {/* Testimonials Container */}
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {/* Testimonial 1 */}
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img src={anisha} className="w-16 -mt-14" alt="" />
            <h5 className="text-lg font-bold">Anisha Li</h5>
            <p className="text-sm text-darkGrayishBlue">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              ipsam deleniti magni accusantium praesentium dignissimos neque
              dolore veniam esse"
            </p>
          </div>
          {/* Testimonial 2 */}
          <div className="hidden flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
            <img src={ali} className="w-16 -mt-14" alt="" />
            <h5 className="text-lg font-bold">Ali Bravo</h5>
            <p className="text-sm text-darkGrayishBlue">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              ipsam deleniti magni accusantium praesentium dignissimos neque
              dolore veniam esse"
            </p>
          </div>
          {/* Testimonial 3 */}
          <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
            <img src={richard} className="w-16 -mt-14" alt="" />
            <h5 className="text-lg font-bold">Richard Watts</h5>
            <p className="text-sm text-darkGrayishBlue">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              ipsam deleniti magni accusantium praesentium dignissimos neque
              dolore veniam esse"
            </p>
          </div>
        </div>
        {/* Button */}
        <div className="my-16">
          <a
            href="#"
            className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
