import React from 'react';
import {
  SafeAreaView,
  Text,
  Linking,
  StyleSheet,
  Image,
  Button,
} from 'react-native';
import Product from '../../components/Product/index';

const Details = ({route, navigation}) => {
  const {product, final, isDiscount} = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button onPress={() => navigation.goBack()} title="Back"></Button>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{uri: product.image}}
        resizeMode="cover"
        style={styles.img}
      />

      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.priceContainer}>
        {isDiscount ? (
          <>
            <Text
              style={[
                styles.price,
                {textDecorationLine: 'line-through'},
              ]}>{`£${(product.price.original / 100).toFixed(2)}`}</Text>{' '}
            <Text style={styles.price}>{final}</Text>
          </>
        ) : (
          <>
            {
              <Text style={styles.price}>
                {final === '0.00' ? 'FREE' : `£${final}`}
              </Text>
            }
          </>
        )}
      </Text>

      <Text style={styles.text}>{product.description}</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  img: {
    height: undefined,
    width: '100%',
    aspectRatio: 4 / 3,
    justifyContent: 'flex-end',
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 28,
    margin: 20,
    marginBottom: 10,
  },
  priceContainer: {
    marginHorizontal: 20,
    marginVertical: 0,
  },
  price: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 14,
  },
  text: {
    color: 'black',
    fontSize: 12,
    margin: 20,
    marginTop: 10,
  },
});

export default Details;
