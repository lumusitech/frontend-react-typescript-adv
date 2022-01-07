import {
  ProductImage,
  ProductTitle,
  ProductButtons,
  ProductCard,
} from '../components/index';

import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: 'coffee-mug.png',
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        <ProductCard product={product}>
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title title={'Custom title'} className="text-bold" />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage className="custom-image" />
          <ProductTitle className="text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard
          product={product}
          style={{ background: 'tomato', color: 'white', fontWeight: 'bold' }}
        >
          <ProductImage
            style={{
              boxShadow: '10px 10px 10px rgba(0,0,0,.3)',
              borderRadius: '20px',
              margin: '60px',
              width: '50%',
            }}
          />
          <ProductTitle
            title="Card width inline-styles"
            style={{ fontSize: '20px' }}
          />
          <ProductButtons style={{ display: 'flex', justifyContent: 'end' }} />
        </ProductCard>
      </div>
    </div>
  );
};
