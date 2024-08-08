import { useEffect, useState } from "react";
import Category from "../category/Category";
import HomeSlider from "./HomeSlider";

export default function HomePage() {
  const [lstCarousel, setLstCarousel] = useState<any>(null);
  function getData() {
    fetch("https://ecommerce-rest-api-y2lw.onrender.com/api/getCarousel")
      .then((response) => response.json())
      .then((res) => setLstCarousel(res.data));
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <HomeSlider lstCarousel={lstCarousel} />
      <Category />
    </div>
  );
}
