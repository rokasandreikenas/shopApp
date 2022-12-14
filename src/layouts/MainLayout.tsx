import React from 'react';
import {StyleSheet, View} from 'react-native';
import {bgColor} from '../consts/colors';

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({children}: Props) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {padding: 16, backgroundColor: bgColor, height: '100%'},
});

export default MainLayout;
