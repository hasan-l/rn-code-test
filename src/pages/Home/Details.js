import React from 'react';
import {SafeAreaView, Text, StyleSheet, Image, Button} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Details = ({route, navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MaterialIcons
          name="arrow-back"
          size={28}
          color="black"
          style={{marginLeft: 15}}
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation]);

  if (!route.params?.product) {
    return <Text style={styles.title}>No product has been selected!</Text>;
  }
  const {product = null, final, isDiscount} = route.params;

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
