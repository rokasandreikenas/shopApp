import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {ItemDefinition} from '../../types/item';

interface Props {
  image: ItemDefinition['image'];
}

const CartItemImage = ({image}: Props) => {
  return <Image source={{uri: image}} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 80,
    marginBottom: 8,
  },
});

export default CartItemImage;
