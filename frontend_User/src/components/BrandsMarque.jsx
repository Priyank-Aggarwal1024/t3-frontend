import { useEffect, useState } from "react";
import { client } from "../utils/sanity/client";
import Marquee from "react-fast-marquee";
function BrandsMarquee({ windowWidth }) {
  const [brands, setBrands] = useState([]);
  const fetchBrands = async () => {
    try {
      const brands = await client.fetch(`*[_type == "brand"] {
              name,
              "smallImageUrl": small.asset->url,
              "largeImageUrl": large.asset->url
            }`);
      setBrands(brands);
    } catch (error) {
      console.error("Error fetching brands:", error);
    }
  };
  useEffect(() => {
    fetchBrands();
  }, []);
  return (
    <div className="w-full max-w-full bg-pure_white">
      <Marquee speed={50} gradient={false} pauseOnHover>
        {brands.map((brand, index) => (
          <img
            src={windowWidth < 780 ? brand.smallImageUrl : brand.largeImageUrl}
            alt={brand.name}
            key={index}
            className="aspect-[326/200] md:aspect-[200/100] md:mx-2 mix-blend-multiply mx-1 md:w-[200px] xs:w-[163px] w-[150px] "
          />
        ))}
      </Marquee>
    </div>
  );
}

export default BrandsMarquee;
