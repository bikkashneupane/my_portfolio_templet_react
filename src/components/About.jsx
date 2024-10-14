import portfolio from "../assets/bikash.png";

const About = () => {
  return (
    <section className="mt-10 text-gray-700 dark:text-gray-400" id="about">
      <div className="mx-auto max-w-5xl px-3 lg:px-0">
        <h2 className="mb-5 text-xl font-bold text-yellow-500 dark:text-yellow-600 text-center">
          About
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 ">
          <div className="py-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              facilis commodi et suscipit eveniet eaque, maxime magnam eius
              quisquam obcaecati.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              tempore dolores sit accusamus error ad laboriosam obcaecati
              laborum. Sunt, alias. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Soluta dolorum delectus dolorem aliquid
              provident sint sapiente quis obcaecati minima pariatur.
              <br />
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptas, dolor!
            </p>
            <div className="mt-3">
              <h3 className="font-semibold dark:text-teal-500 text-teal-600">
                Qualification
              </h3>
              <p>Bachelors Degree, Central Queensland University</p>
              <h3 className="font-semibold dark:text-teal-500 text-teal-600 mt-2">
                Location
              </h3>
              <p>Sydney, Australia</p>
            </div>
            <div className="mt-3 w-full border dark:border-gray-700 border-gray-300 py-4 rounded-md flex justify-between px-5 items-center font-semibold text-teal-600 dark:text-teal-500">
              <div className="flex flex-col lg:flex-row lg:gap-1 items-center">
                <span className="text-yellow-500">IT</span>
                <span>Graduate</span>
              </div>
              <div className="flex flex-col lg:flex-row lg:gap-1 items-center">
                <span className="text-yellow-500">2+ Years</span>
                <span>Experience</span>
              </div>
              <div className="flex flex-col lg:flex-row lg:gap-1 items-center">
                <span className="text-yellow-500">10+</span>
                <span>Projects</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={portfolio}
              alt="Bikash"
              className="h-[350px] lg:h-[380px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
