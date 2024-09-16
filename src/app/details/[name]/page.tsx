import { Navbar } from "@/components/navbar/navbar";
import { ProductCard } from "@/components/product-card/product-card";
import { getCatalogByName } from "@/service/query/get-catalog-name";

const CatalogSingle = async ({ params }: any) => {
  const { name } = params;

  const product = await getCatalogByName(name);

  return (
    <div className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-5">
        {product.map((catalog) => (
          <>
            <ProductCard key={catalog.id} {...catalog} />
          </>
        ))}
      </div>
    </div>
  );
};

export default CatalogSingle;
