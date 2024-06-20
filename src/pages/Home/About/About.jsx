import useScrollGrow from "../../../components/useScrollGrow/useScrollGrow";
import { motion } from "framer-motion";
import image1 from "../../../assets/product/product (7).jpg";
import image2 from "../../../assets/product/product (12).jpg";

const About = () => {
  const { style, componentRef } = useScrollGrow();

  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="hero min-h-screen bg-base-200"
    >
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={image1} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={image2}
            className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 space-y-5 p-4">
          <h1 className="text-3xl text-orange-500 font-bold">About Us</h1>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="text-justify">
            Discover our mission to promote food accessibility and
            sustainability through innovative solutions and community
            engagement. Learn about our team is dedication to fostering positive
            change in food distribution and supply management.
          </p>
          <p className="text-justify">
            Join us in our quest to create a world where food distribution is
            equitable, sustainable, and accessible to all. Together, we can make
            a lasting impact on global food systems and build a brighter future
            for generations to come.
          </p>
          <button className="btn btn-primary">Get More Info</button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
