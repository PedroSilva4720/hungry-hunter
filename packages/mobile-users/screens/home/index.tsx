import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, SafeAreaView } from 'react-native';

import { styles } from './styles';

import { axiosInstance } from '../../axios';
import { Product } from '../../types/Product';
import { CardComponent } from '../../components/cardComponent';
import { SubmitButtonComponent } from '../../components/submitButtonComponent';

export const Home = () => {
  const [products, setProducts] = useState<Product[]>();
  useEffect(() => {
    axiosInstance.get('/product').then(data => {
      if (data) {
        setProducts(data.data.products);
      }
    });
  }, []);

  const orderSubmit = () => {};

  return (
    <>
      <SafeAreaView style={styles.container}>
        {products && (
          <FlatList
            data={products}
            renderItem={({ item }) => <CardComponent product={item} />}
            keyExtractor={item => item.id}
          />
        )}
      </SafeAreaView>
    </>
  );
};
