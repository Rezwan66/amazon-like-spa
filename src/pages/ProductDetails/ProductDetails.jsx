import { useLoaderData, useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const productDetails = useLoaderData();
  //   console.log(productDetails);
  const { brand, category, description, images, price, title } = productDetails;
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="grid gap-4">
        <div className="flex justify-between">
          <img className="h-80 max-w-full rounded-lg" src={images[0]} alt="" />
          <div className="w-[60%] flex gap-40 items-center">
            <div className="space-y-4">
              <h1 className="text-2xl font-medium">{brand}</h1>
              <h2 className="text-5xl font-bold">{title}</h2>
              <i>#{category}</i>
              <p>{description}</p>
            </div>
            <div>
              <strong className="text-8xl">${price}</strong>
            </div>
          </div>
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
      <div className="mt-24">
        <button
          onClick={handleGoBack}
          type="button"
          className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
