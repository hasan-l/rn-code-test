import React from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  BackHandler,
  Image,
  Text,
  ImageBackground,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import data from '../../../data';

console.log('data: ', data);
const Product = () => {
  return (
    <ScrollView style={styles.container}>
      {data.map(product => {
        return (
          <View style={styles.imgContainer} key={product.title}>
            <ImageBackground
              source={{uri: product.image}}
              resizeMode="cover"
              style={styles.img}>
              <View style={styles.infoBar}>
                <View>
                  <Text style={styles.title}>{product.title}</Text>
                  <Text style={styles.price}>
                    {product.price.discount ? (
                      <>
                        <Text
                          style={[
                            styles.price,
                            {textDecorationLine: 'line-through'},
                          ]}>{`${calculatePrice(
                          product.price.original,
                        )} `}</Text>

                        <Text>
                          {' '}
                          {`${calculatePrice(
                            product.price.original - product.price.discount,
                          )}`}
                        </Text>
                      </>
                    ) : product.price.discountPercent ? (
                      <>
                        <Text
                          style={[
                            styles.price,
                            {textDecorationLine: 'line-through'},
                          ]}>{`${calculatePrice(
                          product.price.original,
                        )} `}</Text>

                        <Text>{`${calculatePrice(
                          product.price.original -
                            product.price.original *
                              product.price.discountPercent,
                        )}`}</Text>
                      </>
                    ) : (
                      `${calculatePrice(product.price.original)}`
                    )}
                  </Text>
                  <Text style={styles.text}>{product.description}</Text>
                </View>
                <Ionicons
                  name="md-person-circle-outline"
                  size={24}
                  color="tomato"
                />
              </View>
            </ImageBackground>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  infoBar: {
    height: '25%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 10,
  },
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
    color: 'white',
    fontSize: 14,
    marginBottom: 2,
  },
  price: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 14,
    marginBottom: 2,
  },
  text: {
    color: 'white',
    fontSize: 12,
  },
});

function calculatePrice(num) {
  if (num === 0) {
    return 'FREE';
  } else {
    return `£${(num / 100).toFixed(2)}`;
  }
}

export default Product;
