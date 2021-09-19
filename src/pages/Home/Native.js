import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  NativeModules,
  ScrollView,
  Platform,
} from 'react-native';

const Native = () => {
  const [key, setKey] = useState('');

  useEffect(() => {
    if (Platform.OS === 'ios') {
      setKey(NativeModules.ServiceKey.serviceKey);
    } else {
      NativeModules.ServiceKey.getServiceKey(
        err => {
          console.log(err);
        },
        data => {
          console.log('data: ', data);
          setKey(data);
        },
      );
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>{`Service Key: ${key}`}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 28,
    margin: 20,
    marginBottom: 10,
  },
});

export default Native;
