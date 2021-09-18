import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import data from '../../../data';
import Thumbnail from './Thumbnail';

const Product = () => {
  return (
    <ScrollView style={styles.container}>
      {data.map((product, index) => {
        return (
          <Thumbnail product={product} key={`${product.title}-${index}`} />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Product;
