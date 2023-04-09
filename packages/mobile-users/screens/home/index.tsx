import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';

import { styles } from './styles';

import { axiosInstance } from '../../axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Product } from '../../types/Product';
import { CardComponent } from '../../components/cardComponent';

export const Home = ({ navigation }: { navigation: any }) => {
  const [products, setProducts] = useState<Product[]>();
  const [auth, setAuth] = useState<string>();

  useEffect(() => {
    AsyncStorage.getItem('token').then(token => {
      if (token) {
        setAuth(token);
      } else {
        navigation.push('Login');
      }
    });
    axiosInstance.get('/product').then(data => {
      if (data) {
        setProducts(data.data.products);
      }
    });
  }, []);

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
