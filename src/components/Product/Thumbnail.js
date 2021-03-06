import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Animated,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';

const Thumbnail = ({product}) => {
  const navigation = useNavigation();
  const [final, setFinal] = useState(0);
  const [isDiscount, setIsDiscount] = useState(false);
  const animation = new Animated.Value(0);
  const inputRange = [0, 1];
  const outputRange = [1, 1.1];
  const scale = animation.interpolate({inputRange, outputRange});

  const onPressIn = () => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  const onPressOut = product => {
    Animated.spring(animation, {
      toValue: 0,
      useNativeDriver: true,
      speed: 24,
      //restDisplacementThreshold: 0.9999,
    }).start(() => {
      navigation.navigate('Details', {
        product: product,
        final: final,
        isDiscount: isDiscount,
      });
    });
  };

  useEffect(() => {
    let num = 0;
    if (product.price.discount) {
      setIsDiscount(true);
      num = (product.price.original - product.price.discount) / 100;
    } else if (product.price.discountPercent) {
      setIsDiscount(true);
      num =
        (product.price.original -
          product.price.original * product.price.discountPercent) /
        100;
    } else {
      setIsDiscount(false);
      num = product.price.original / 100;
    }

    setFinal(`${num.toFixed(2)}`);
  }, []);

  return (
    <View key={product.title}>
      <Animated.View
        style={{transform: [{scale}], margin: 20, marginBottom: 10}}>
        <TouchableWithoutFeedback
          onPressIn={onPressIn}
          onPressOut={() => onPressOut(product)}>
          <ImageBackground
            source={{uri: product.image}}
            resizeMode="cover"
            style={styles.img}
            imageStyle={{borderRadius: 10}}>
            <View style={styles.infoBar}>
              <View>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>
                  {isDiscount ? (
                    <>
                      <Text
                        style={[
                          styles.price,
                          {textDecorationLine: 'line-through'},
                        ]}>{`??${(product.price.original / 100).toFixed(
                        2,
                      )}`}</Text>{' '}
                      <Text style={styles.price}>{final}</Text>
                    </>
                  ) : (
                    <>
                      {
                        <Text style={styles.price}>
                          {final === '0.00' ? 'FREE' : `??${final}`}
                        </Text>
                      }
                    </>
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
        </TouchableWithoutFeedback>
      </Animated.View>
    </View>
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
    paddingTop: Platform.OS === 'ios' ? 10 : 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
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
    color: 'white',
    fontSize: 14,
  },
  price: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 14,
  },
  text: {
    color: 'white',
    fontSize: 12,
  },
});

export default Thumbnail;
