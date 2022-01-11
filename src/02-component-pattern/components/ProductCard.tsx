import styles from '../styles/styles.module.css';
import { createContext } from 'react';
import {
  Product,
  onChangeArgs,
  ProductCardHandlers,
  ProductContextProps,
} from '../interfaces/interfaces';

import { useProduct } from '../hooks/useProduct';
import { InitialValues } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;
export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } =
    useProduct({
      product,
      onChange,
      value,
      initialValues,
    });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        maxCount,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          maxCount: initialValues?.maxCount,
          isMaxCountReached,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
