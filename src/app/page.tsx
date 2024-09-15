import { Banner } from "@/components/banner/banner";
import { ProductCard } from "@/components/product-card/product-card";
import { Aside } from "@/layouts/aside";
import { getBanners } from "@/service/query/get-banners";
import { getPhones } from "@/service/query/get-phones";
import { getProducts } from "@/service/query/get-products";

export default async function Home() {
  const data = (await getProducts()).slice(0,8);
  const phones = (await getPhones()).slice(0,8);
  const banner = await getBanners();
  return (
    <div className="flex">
     <div className="w-64 p-4 bg-white">
      <Aside/>
     </div>
      <div className="w-fit max-w-[1086px] pl-6 pt-6">
        <div className=""></div>
        <div className="">
          <Banner banners={banner} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {data?.map((item) => (
            <div className="" key={item.id}>
              <ProductCard key={item.id} {...item} />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {phones?.map((item) => (
            <div className="" key={item.id}>
              <ProductCard key={item.id} {...item} />
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
}
