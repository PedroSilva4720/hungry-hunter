import { View, Text } from 'react-native';

import { axiosInstance } from '../../axios';

import { Product } from '../../types/Product';
import { SubmitButtonComponent } from '../submitButtonComponent';

import { styles } from './styles';

export const CardComponent = ({ product }: { product: Product }) => {
  const orderSubmit = () => {
    console.log(product.id);
    // should open a new screen to confirm user wants to order this product.
  };

  return (
    <>
      <View style={styles.cardContainer}>
        <Text>{product.name}</Text>
        <Text>{product.restaurant.name}</Text>
        <Text>{product.description}</Text>
        <Text>R$ {product.price}</Text>
        <SubmitButtonComponent label='Pedir já' submitFunction={orderSubmit} />
      </View>
    </>
  );
};
