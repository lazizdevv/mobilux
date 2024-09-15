import { ProductCard } from "@/components/product-card/product-card";
import { getCatalogByName } from "@/service/query/get-catalog-name";

const CatalogSingle = async ({ params }: any) => {
  const { name } = params;

  const product = await getCatalogByName(name);

  return (
    <div className="container">
      {product.map((catalog) => (
        <>
          <ProductCard key={catalog.id} {...catalog} />
        </>
      ))}
    </div>
  );
};

export default CatalogSingle;
