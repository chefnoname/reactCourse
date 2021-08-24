import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <h1>The Products Plug</h1>
      <ul>
        <li>
          <Link to="products/p1"> A Book </Link>
        </li>
        <li>
          <Link to="products/p2"> Fruits from France </Link>
        </li>
        <li>
          <Link to="products/p3"> TARMAC!!!! </Link>
        </li>
      </ul>
    </>
  );
};

export default Products;
