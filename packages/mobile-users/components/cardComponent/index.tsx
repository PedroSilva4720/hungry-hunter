import { View, Text } from 'react-native';
import * as SecureStore from 'expo-secure-store';

import { axiosInstance } from '../../axios';

import { Product } from '../../types/Product';
import { SubmitButtonComponent } from '../submitButtonComponent';

import { styles } from './styles';
import { useState } from 'react';

export const CardComponent = ({ product }: { product: Product }) => {
  const [userId, setUserId] = useState<string | null>();

  const orderSubmit = () => {
    SecureStore.getItemAsync('userId').then(setUserId);
    axiosInstance
      .post(`/order/${userId}/${product.id}`)
      .then(response => console.log(response.status))
      .catch(console.log);

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
