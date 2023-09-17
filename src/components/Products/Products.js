import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products] = useState(productsData);

  return (
    /** 
In this way (map method), the Products component will generate the appropriate
number of Product components based on the data contained in the array. */
    <section>
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </section>
  );
};

export default Products;
