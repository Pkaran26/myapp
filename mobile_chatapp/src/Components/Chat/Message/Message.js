import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';

const Message: () => React$Node = () => {
  return (
    <View style={ styles.main }>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    padding: 15
  }
})

export default Message;
