import image from "../../../assets/product/product (13).jpg";

const Benefit = () => {
  return (
    <section className="pb-5">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-4xl md:text-5xl font-bold pt-8 md:pt-10 pb-2 md:pb-4">
          Benefits of Chef Cook
        </h1>
        <p className="text-center text-base md:text-lg pb-4 md:pb-5">
          Chef is the star of the restaurant, so it can attract more customers,
          <br className="hidden md:block" /> if you are unsuccessful with
          choosing, your business might be ruined.
        </p>
      </div>
      <div className="flex items-center justify-center flex-col md:flex-row space-x-5 ">
        <div className="md:w-4/12 w-11/12">
          <h1 className="text-3xl font-bold pb-4">Importance of the Recipes</h1>
          <h1 className="text-justify">
            Recipes are guides for cooking. It is important to read the whole
            recipe before you begin cooking. This helps you know how the dish is
            made. All recipes start with the name of the dish.
          </h1>
        </div>
        <div className="md:w-6/12 w-11/12">
          <img className="w-11/12 rounded" src={image} alt="image" />
        </div>
      </div>
    </section>
  );
};

export default Benefit;
