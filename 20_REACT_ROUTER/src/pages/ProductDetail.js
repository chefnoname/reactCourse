import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  console.log(params.productId);

  return (
    <>
      <h1> Product Detail...</h1>
      <p>{params.productId}</p>
    </>
  );
};

export default ProductDetail;
