import React from 'react';
import {SafeAreaView, Text, StyleSheet, View, FlatList} from 'react-native';
import data from '../../../data';

const Info = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.text}>Title</Text>
        <Text style={styles.text}>Price</Text>
        <Text style={styles.text}>Description</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.column}>{item.title}</Text>
            <View style={styles.column}>
              <Text>{item.price.original}</Text>
              {(item.price.discount || item.price.discountPercent) && (
                <Text>
                  Discount{' '}
                  {`${
                    item.price.discount
                      ? `- ${item.price.discount}`
                      : `- ${item.price.discountPercent * 100}%`
                  }`}
                </Text>
              )}
            </View>
            <Text style={styles.column}>{item.description}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    //height: 44,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    flexWrap: 'wrap',
  },
  column: {flexBasis: '33%'},
});

export default Info;
