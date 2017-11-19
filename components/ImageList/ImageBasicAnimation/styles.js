import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
  Root: {
    alignItems: 'stretch',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    width: Dimensions.get('window').width,
  },

  HeadlineWrapper: {
    height: 72,
    paddingBottom: 24,
    paddingTop: 24,
  },

  Headline: {
    fontSize: 24,
    textAlign: 'center',
  },

  ImageWrapper: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    flex: 1,
    flexDirection: 'column',
    marginLeft: 20,
    marginRight: 20,
    overflow: 'hidden',
    width: Dimensions.get('window').width - 40,
  },

  Image: {
    height: '100%',
    width: '100%',
  },
});
