/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import Header from '../../components/Header/HeaderHome';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
const HomeScreen = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const carousel = useRef();
  const entries = [
    {
      imageURL:
        'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    },
    {
      imageURL:
        'https://jasa-catering.com/wp-content/uploads/2019/01/banner2.jpg',
    },
    {
      imageURL:
        'https://www.adorama.com/alc/wp-content/uploads/2016/03/shutterstock_376872745.jpg',
    },
  ];
  const slides = [];

  const entriesSplitter = () => {
    let size = 1; //Based on the size you want
    while (entries.length > 0) {
      slides.push(entries.splice(0, size));
    }
  };

  const _renderItem = ({item, index}) => {
    return (
      <View
        style={{
          marginTop: 20,
          borderRadius: 10,
          backgroundColor: 'grey',
        }}>
        {item.map(item => {
          return (
            <Image
              style={{
                height: '100%',
                width: '100%',
                resizeMode: 'cover',
                borderRadius: 10,
              }}
              key={index}
              source={{uri: item.imageURL}}
            />
          );
        })}
      </View>
    );
  };
  return (
    <ScrollView
      stickyHeaderIndices={[1]}
      style={styles.container}
      showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor={'#25274D'} />
      <Header />
      <View style={styles.carouselContainer}>
        {entriesSplitter()}
        <Carousel
          ref={carousel}
          data={slides}
          renderItem={_renderItem}
          onSnapToItem={index => setActiveSlide(index)}
          sliderWidth={screenWidth}
          sliderHeight={screenHeight}
          itemWidth={screenWidth - 20}
        />
        <Pagination
          dotsLength={3} // also based on number of sildes you want
          activeDotIndex={activeSlide}
          dotStyle={{
            width: 8,
            height: 8,
            borderRadius: 4,
            marginHorizontal: 1,
            backgroundColor: '#25274D',
          }}
          inactiveDotStyle={{
            backgroundColor: 'white',
          }}
          inactiveDotOpacity={1}
          inactiveDotScale={1}
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.vendorListContainer}>
          <View style={styles.vendorSectionHeader}>
            <Text style={{fontSize: 20}}>Vendor Lists</Text>
          </View>

          <View style={styles.vendorList}>
            <TouchableOpacity style={styles.vendorItem}>
              <Image
                source={require('../../public/icons/vendor-gifts-icon.png')}
              />
              <Text style={styles.vendorText}>Gifts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.vendorItem}>
              <Image
                source={require('../../public/icons/vendor-catering-icon.png')}
              />
              <Text style={styles.vendorText}>Catering</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.vendorItem}>
              <Image
                source={require('../../public/icons/vendor-photographer-icon.png')}
              />
              <Text style={styles.vendorText}>Photograper</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.vendorItem}>
              <Image
                source={require('../../public/icons/vendor-music-icon.png')}
              />
              <Text style={styles.vendorText}>Music</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.vendorItem}>
              <Image
                source={require('../../public/icons/vendor-venue-icon.png')}
              />
              <Text style={styles.vendorText}>Venue</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.vendorItem}>
              <Image
                source={require('../../public/icons/vendor-invitations-icon.png')}
              />
              <Text style={styles.vendorText}>Invitations</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.vendorItem}>
              <Image
                source={require('../../public/icons/vendor-decoration-icon.png')}
              />
              <Text style={styles.vendorText}>Decoration</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.vendorItem}>
              <Image
                source={require('../../public/icons/vendor-others-icon.png')}
              />
              <Text style={styles.vendorText}>Others</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.vendorContentContainer}>
          <View style={styles.vendorContentHeader}>
            <Text style={{fontSize: 20}}>Photograper Vendors</Text>
            <Text>See All</Text>
          </View>
          <View style={styles.vendorContentSubHeader}>
            <Text>Showing recommendations with All Budgets</Text>
          </View>
          <View style={styles.vendorContentCardListSection}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.vendorContentCardList}>
                <View style={styles.vendorContentCardListHeader}>
                  <View style={styles.vendorProfileImage}>
                    <Image
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 15,
                        resizeMode: 'center',
                      }}
                      source={{
                        uri:
                          'https://www.calistaphoto.com/wp-content/uploads/2019/01/logoweb-calistaphoto.png',
                      }}
                    />
                  </View>
                  <View style={styles.vendorContentCardListTextHeader}>
                    <Text>Calista Photo Studio</Text>
                    <Text style={{fontSize: 12}}>
                      Photograper Vendor - Sleman
                    </Text>
                  </View>
                </View>
                <View style={styles.vendorImageContainer}>
                  <Image
                    style={{width: '100%', height: '100%'}}
                    source={{
                      uri:
                        'https://unycommunity.com/wp-content/uploads/2019/10/Calista-Photo-Yogyakarta.jpg',
                    }}
                  />
                </View>
                <View style={styles.vendorContentCardListRatingSection}>
                  <Image
                    source={require('../../public/icons/rating-stars.png')}
                  />
                  <Text>305 Reviews</Text>
                </View>
              </View>
              <View style={styles.vendorContentCardList}>
                <View style={styles.vendorContentCardListHeader}>
                  <View style={styles.vendorProfileImage}>
                    <Image
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 15,
                        resizeMode: 'center',
                      }}
                      source={{
                        uri:
                          'https://www.calistaphoto.com/wp-content/uploads/2019/01/logoweb-calistaphoto.png',
                      }}
                    />
                  </View>
                  <View style={styles.vendorContentCardListTextHeader}>
                    <Text>Calista Photo Studio</Text>
                    <Text style={{fontSize: 12}}>
                      Photograper Vendor - Sleman
                    </Text>
                  </View>
                </View>
                <View style={styles.vendorImageContainer}>
                  <Image
                    style={{width: '100%', height: '100%'}}
                    source={{
                      uri:
                        'https://unycommunity.com/wp-content/uploads/2019/10/Calista-Photo-Yogyakarta.jpg',
                    }}
                  />
                </View>
                <View style={styles.vendorContentCardListRatingSection}>
                  <Image
                    source={require('../../public/icons/rating-stars.png')}
                  />
                  <Text>305 Reviews</Text>
                </View>
              </View>
              <View style={styles.vendorContentCardList}>
                <View style={styles.vendorContentCardListHeader}>
                  <View style={styles.vendorProfileImage}>
                    <Image
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 15,
                        resizeMode: 'center',
                      }}
                      source={{
                        uri:
                          'https://www.calistaphoto.com/wp-content/uploads/2019/01/logoweb-calistaphoto.png',
                      }}
                    />
                  </View>
                  <View style={styles.vendorContentCardListTextHeader}>
                    <Text>Calista Photo Studio</Text>
                    <Text style={{fontSize: 12}}>
                      Photograper Vendor - Sleman
                    </Text>
                  </View>
                </View>
                <View style={styles.vendorImageContainer}>
                  <Image
                    style={{width: '100%', height: '100%'}}
                    source={{
                      uri:
                        'https://unycommunity.com/wp-content/uploads/2019/10/Calista-Photo-Yogyakarta.jpg',
                    }}
                  />
                </View>
                <View style={styles.vendorContentCardListRatingSection}>
                  <Image
                    source={require('../../public/icons/rating-stars.png')}
                  />
                  <Text>305 Reviews</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={styles.vendorContentContainer}>
          <View style={styles.vendorContentHeader}>
            <Text style={{fontSize: 20}}>Catering Vendors</Text>
            <Text>See All</Text>
          </View>
          <View style={styles.vendorContentSubHeader}>
            <Text>Showing recommendations with All Budgets</Text>
          </View>
          <View style={styles.vendorContentCardListSection}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.vendorContentCardList}>
                <View style={styles.vendorContentCardListHeader}>
                  <View style={styles.vendorProfileImage}>
                    <Image
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 15,
                        resizeMode: 'center',
                      }}
                      source={{
                        uri:
                          'https://www.calistaphoto.com/wp-content/uploads/2019/01/logoweb-calistaphoto.png',
                      }}
                    />
                  </View>
                  <View style={styles.vendorContentCardListTextHeader}>
                    <Text>Calista Photo Studio</Text>
                    <Text style={{fontSize: 12}}>
                      Photograper Vendor - Sleman
                    </Text>
                  </View>
                </View>
                <View style={styles.vendorImageContainer}>
                  <Image
                    style={{width: '100%', height: '100%'}}
                    source={{
                      uri:
                        'https://unycommunity.com/wp-content/uploads/2019/10/Calista-Photo-Yogyakarta.jpg',
                    }}
                  />
                </View>
                <View style={styles.vendorContentCardListRatingSection}>
                  <Image
                    source={require('../../public/icons/rating-stars.png')}
                  />
                  <Text>305 Reviews</Text>
                </View>
              </View>
              <View style={styles.vendorContentCardList}>
                <View style={styles.vendorContentCardListHeader}>
                  <View style={styles.vendorProfileImage}>
                    <Image
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 15,
                        resizeMode: 'center',
                      }}
                      source={{
                        uri:
                          'https://www.calistaphoto.com/wp-content/uploads/2019/01/logoweb-calistaphoto.png',
                      }}
                    />
                  </View>
                  <View style={styles.vendorContentCardListTextHeader}>
                    <Text>Calista Photo Studio</Text>
                    <Text style={{fontSize: 12}}>
                      Photograper Vendor - Sleman
                    </Text>
                  </View>
                </View>
                <View style={styles.vendorImageContainer}>
                  <Image
                    style={{width: '100%', height: '100%'}}
                    source={{
                      uri:
                        'https://unycommunity.com/wp-content/uploads/2019/10/Calista-Photo-Yogyakarta.jpg',
                    }}
                  />
                </View>
                <View style={styles.vendorContentCardListRatingSection}>
                  <Image
                    source={require('../../public/icons/rating-stars.png')}
                  />
                  <Text>305 Reviews</Text>
                </View>
              </View>
              <View style={styles.vendorContentCardList}>
                <View style={styles.vendorContentCardListHeader}>
                  <View style={styles.vendorProfileImage}>
                    <Image
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 15,
                        resizeMode: 'center',
                      }}
                      source={{
                        uri:
                          'https://www.calistaphoto.com/wp-content/uploads/2019/01/logoweb-calistaphoto.png',
                      }}
                    />
                  </View>
                  <View style={styles.vendorContentCardListTextHeader}>
                    <Text>Calista Photo Studio</Text>
                    <Text style={{fontSize: 12}}>
                      Photograper Vendor - Sleman
                    </Text>
                  </View>
                </View>
                <View style={styles.vendorImageContainer}>
                  <Image
                    style={{width: '100%', height: '100%'}}
                    source={{
                      uri:
                        'https://unycommunity.com/wp-content/uploads/2019/10/Calista-Photo-Yogyakarta.jpg',
                    }}
                  />
                </View>
                <View style={styles.vendorContentCardListRatingSection}>
                  <Image
                    source={require('../../public/icons/rating-stars.png')}
                  />
                  <Text>305 Reviews</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD700',
    height: '100%',
  },
  carouselContainer: {
    height: 250,
    alignItems: 'center',
  },
  vendorListContainer: {
    marginBottom: 25,
  },
  contentContainer: {
    height: '100%',
    backgroundColor: '#FFF',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  vendorSectionHeader: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  vendorList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  vendorItem: {
    flexDirection: 'column',
    width: '25%',
    alignItems: 'center',
    paddingVertical: 5,
  },
  vendorText: {
    textAlign: 'center',
    marginTop: -10,
  },
  vendorContentContainer: {
    // backgroundColor: '#FFF',
  },
  vendorContentHeader: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    alignItems: 'center',
  },
  vendorContentSubHeader: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  vendorContentCardListSection: {
    paddingVertical: 10,
  },
  vendorContentCardList: {
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: '#ACACAC',
    height: 230,
    width: 250,
    paddingVertical: 10,
    marginHorizontal: 20,
    backgroundColor: '#FFF',
  },
  vendorContentCardListHeader: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  vendorProfileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    marginRight: 5,
    borderWidth: 0.4,
    borderColor: '#ACACAC',
  },
  vendorImageContainer: {
    backgroundColor: '#F2F2F2',
    height: '65%',
    marginBottom: 5,
  },
  vendorContentCardListRatingSection: {
    paddingHorizontal: 10,
    marginBottom: 5,
    height: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
