import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Clases(props) {
  return (
    <View style={[styles.group, styles.group_layout]}>
      <Text>
        Checky
      </Text>
    </View>
  );
}

Clases.inStorybook = true;
Clases.fitScreen = false;
Clases.scrollHeight = 731;

const styles = StyleSheet.create({
  group: {
    width: '100%',
    backgroundColor: '#f4f0f6ff',
    overflow: 'hidden'
  },
  group_layout: {
    overflow: 'hidden',
    marginTop: 0,
    marginBottom: 0,
    minHeight: 731,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  }
});
