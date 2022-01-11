import {
  ProductImage,
  ProductTitle,
  ProductButtons,
  ProductCard,
} from '../components/index';

import '../styles/custom-styles.css';
import { products } from '../data/products';
import { Product } from '../interfaces/interfaces';

const product: Product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark text-white"
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, increaseBy, count, isMaxCountReached, maxCount }) => (
          <>
            <ProductImage
              className="custom-image"
              style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
            />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />

            <button onClick={reset}>Reset</button>

            {!!maxCount && count + 2 <= maxCount && (
              <button onClick={() => increaseBy(2)}>+2</button>
            )}
            {count - 2 >= 0 && (
              <button onClick={() => increaseBy(-2)}> -2</button>
            )}
            <span>{count}</span>
          </>
        )}
      </ProductCard>
    </div>
  );
};
