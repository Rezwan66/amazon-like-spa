import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
  const productDetails = useLoaderData();
  //   console.log(productDetails);
  const { brand, category, description, images, price, title } = productDetails;
  return (
    <div>
      <h1>{brand}</h1>
      <h2>{title}</h2>
    </div>
  );
};

export default ProductDetails;
