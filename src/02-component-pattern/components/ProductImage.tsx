import { useContext } from 'react';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';
import { ProductContext } from './ProductCard';

export const ProductImage = ({ img = '' }) => {
  const { product } = useContext(ProductContext);

  return (
    <img
      className={styles.productImg}
      src={img || product.img || noImage}
      alt="Product img"
    />
  );
};
