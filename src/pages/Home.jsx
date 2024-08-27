import { Fragment } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import Section from "../components/Section";
import { products, discoutProducts } from "../utils/products";
import SliderHome from "../components/Slider";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";

const Home = () => {
  const newArrivalData = products.filter(
    (item) => item.category === "mobile" || item.category === "wireless"
  );
  const bestSales = products.filter((item) => item.category === "sofa");
  useWindowScrollToTop();
  return (
    <Fragment>
      <SliderHome />
      <Wrapper />
      <Section
        title="Big Discount"
        bgColor="white"
        productItems={discoutProducts}
      />
      <Section
        title="New Arrivals"
        bgColor=" #f9f8f8"
        productItems={newArrivalData}
      />
      <Section title="Best Sales Products" bgColor="white" productItems={bestSales} />
    </Fragment>
  );
};

export default Home;
