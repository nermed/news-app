import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeTabBar} from './navigations';
import * as SplashScreen from 'expo-splash-screen';
import {requestUrl} from './utils/requestUrl';
import {ArticleType} from './types/ArticleType';
import { useDispatch } from 'react-redux';
import { getNews } from './stores/reducers/articleReducer';

SplashScreen.preventAutoHideAsync();

export type RootParamList = {
  Home: undefined;
  Search: undefined;
  Account: undefined;
};

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    async function prepare() {
      try {
        const resultRequest = await requestUrl({requestType: 'getArticles'});
        if (resultRequest.status === 200) {
          const data = await resultRequest.json();
          const res: ArticleType[] = data.articles.results;
          if (
            res !== undefined &&
            res.length > 0
          ) {
            const results = res;
            dispatch(getNews({ results }))
          }
        } else {
          Alert.alert('Error', 'Error: Mauvaise connexion');
        }
      } catch (e) {
        console.warn(e);
        Alert.alert('Error', 'Problem with the connexion');
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <View style={{flex: 1}} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <HomeTabBar />
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
