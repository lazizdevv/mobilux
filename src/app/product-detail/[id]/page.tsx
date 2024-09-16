import { DetailCard } from "@/components/product-detail-card/detail-card";
import { getProductById } from "@/service/query/get-all";

const ProductDetail = async ({ params }: any) => {
  const { id } = params;

  const product = await getProductById(id);

  return (
    <div className="">
      {product.map((prod) => (
        <>
          <DetailCard key={prod.id} {...prod} />
        </>
      ))}
    </div>
  );
};

export default ProductDetail;
