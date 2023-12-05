import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Chip, List} from 'react-native-paper';
import moment from 'moment';
import {useSelector} from 'react-redux';
import {ReduxType} from '../../stores/reducers/ReduxType';
import News from './News';
import Saved from './Saved';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('screen');

const HomePage = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image
          source={{uri: 'https://www.thehindu.com/theme/images/og-image.png'}}
          style={styles.imageBanner}
          resizeMode="cover"
        />
        <View style={styles.banner}>
          <Chip style={styles.categoryBanner}>News of the day</Chip>
          <Text style={styles.titleBanner}>
            Assault case: Forest official transferred.
          </Text>
          <Text style={styles.learnMoreBanner}>Learn more</Text>
        </View>
        <View style={styles.overlay} />
      </View>
      {/** news */}
      <News />
      {/** saved */}
      <Saved />
    </ScrollView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: SCREEN_HEIGHT,
    backgroundColor: '#F6F6F6',
  },
  imageBanner: {
    height: 400,
    width: SCREEN_WIDTH,
    backgroundColor: 'white',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset',
  },
  banner: {
    paddingLeft: 30,
    position: 'absolute',
    bottom: 30,
    zIndex: 1,
  },
  titleBanner: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryBanner: {
    backgroundColor: '#E8E8E8',
    width: '45%',
    marginBottom: 10,
    borderRadius: 20,
  },
  category: {
    color: 'white',
    fontSize: 18,
  },
  learnMoreBanner: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  imageNews: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  newsView: {
    width: 300,
    height: 300,
    backgroundColor: 'transparent',
    // borderWidth: 1,
    marginHorizontal: 5,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#4D4D4D',
    opacity: 0.3,
    zIndex: 0,
  },
});
