import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
  const productDetails = useLoaderData();
  //   console.log(productDetails);
  const { brand, category, description, images, price, title } = productDetails;
  return (
    <div>
      <div className="grid gap-4">
        <div className="flex justify-between">
          <img className="h-80 max-w-full rounded-lg" src={images[0]} alt="" />
          <h1>{brand}</h1>
          <h2>{title}</h2>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <img
              className="h-48 max-w-full rounded-lg"
              src={images[1]}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-48 max-w-full rounded-lg"
              src={images[2]}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-48 max-w-full rounded-lg"
              src={images[3]}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-48 max-w-full rounded-lg"
              src={images[4]}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
