import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Product from '../../components/Product/index';

const Market = () => (
  <SafeAreaView style={styles.container}>
    <Product />
  </SafeAreaView>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Market;
