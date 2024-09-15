import { DetailCard } from "@/components/product-detail-card/detail-card";
import { getProductById } from "@/service/query/get-all";

const ProductDetail = async ({params}:any) => {
 
  
  const {id} = params
  
  console.log(id);
const product = await getProductById(id)

console.log(product);

 

  return (
    <div className="container">

      {product.map((prod)=> (
        <>
        <DetailCard key={prod.id} {...prod} />
        </>
      ))}
    </div>
  );
};

export default ProductDetail;
