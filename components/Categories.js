import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {/* category card */}
      <CategoryCard imgURl="../assets/images/jumia-test.png" title="testing" />
      <CategoryCard imgURl="../assets/images/jumia-test.png" title="testing" />
      <CategoryCard imgURl="../assets/images/jumia-test.png" title="testing" />
      <CategoryCard imgURl="../assets/images/jumia-test.png" title="testing" />
      <CategoryCard imgURl="../assets/images/jumia-test.png" title="testing" />
      <CategoryCard imgURl="../assets/images/jumia-test.png" title="testing" />
    </ScrollView>
  );
};

export default Categories;
