import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

export default function CategoryCard({ imgURl, title }) {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={require('../assets/images/jumia-test.png')}
        className="h-20 w-20 rounded-lg"
      />
      <Text className="absoulte bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
}
