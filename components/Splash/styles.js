import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  Root: {
    alignItems: 'stretch',
    backgroundColor: '#fff',
    flex: 1,
    flexDirection : 'column',
    justifyContent: 'flex-start',
    paddingBottom: 45,
    paddingLeft: 60,
    paddingRight: 60,
    paddingTop: 45,
    width: '100%',
  },

  Title: {
    fontSize: 75,
    textAlign: 'left',
  },

  Callout: {
    alignItems: 'stretch',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 165,
  },

  FacebookButton: {
    backgroundColor: '#3b5998',
    borderRadius: 4,
    marginTop: 10,
    overflow: 'hidden',
    padding: 20,
  },

  FacebookButtonText: {
    color: '#ffffff',
    textAlign: 'center',
  },
});
