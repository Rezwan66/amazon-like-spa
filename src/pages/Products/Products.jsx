import { useLoaderData } from 'react-router-dom';
import ProductsCard from './ProductsCard';

const Products = () => {
  const { products } = useLoaderData();
  console.log(products);

  return (
    <div>
      <div className="grid grid-cols-4 gap-6">
        {products?.map(product => (
          <ProductsCard key={product.id} product={product}></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
