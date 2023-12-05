import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Button, List} from 'react-native-paper';
import moment from 'moment';
import {useSelector} from 'react-redux';
import {ReduxType} from '../../stores/reducers/ReduxType';
import MyIcon from "react-native-vector-icons/AntDesign";

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('screen');

const News = () => {
  const news = useSelector((state: ReduxType) => state.article.news);
  return (
    <View>
      <View style={{marginTop: 5}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '700', color: '#1f1f1f'}}>
            Breaking News
          </Text>
          <Text style={{fontSize: 14, fontWeight: '700', color: '#1f1f1f'}}>
            More
          </Text>
        </View>
        <ScrollView
          horizontal
          style={{paddingHorizontal: 5}}
          showsHorizontalScrollIndicator={false}>
          {news.length > 0 ? (
            news.map((res, indx) => (
              <View key={indx} style={styles.newsView}>
                <Image
                  source={{
                    uri: res.image,
                  }}
                  style={styles.imageNews}
                  resizeMode="cover"
                />
                <View style={{}}>
                  <List.Item
                    title={res.title}
                    titleNumberOfLines={2}
                    titleStyle={{fontWeight: '700'}}
                    description={
                      <View>
                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: '400',
                            color: '#A8A8A8',
                            marginVertical: 5,
                          }}>
                          {moment(res.dateTimePub).fromNow()}
                        </Text>
                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: '400',
                            color: '#A8A8A8',
                          }}>
                          by {res.source.title}
                        </Text>
                      </View>
                    }
                  />
                </View>
              </View>
            ))
          ) : (
            <View
              style={{
                height: styles.imageNews.height,
                justifyContent: 'center',
                alignItems: 'center',
                width: SCREEN_WIDTH,
              }}>
                <MyIcon name='warning' size={100} />
              <Button
                mode="outlined"
                // buttonColor="#613838"
                textColor="#613838"
                icon="reload"
                style={{borderRadius: 5}}>
                Reload again
              </Button>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default News;

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
