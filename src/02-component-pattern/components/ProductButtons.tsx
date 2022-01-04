import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export const ProductButtons = () => {
  const { handleAmount, counter } = useContext(ProductContext);

  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => handleAmount(-1)}>
        -
      </button>
      <div className={styles.countLabel}> {counter} </div>
      <button className={styles.buttonAdd} onClick={() => handleAmount(1)}>
        +
      </button>
    </div>
  );
};
