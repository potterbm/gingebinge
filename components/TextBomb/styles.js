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
    fontSize: 50,
    textAlign: 'left',
  },

  SubTitle: {
    fontSize: 25,
    textAlign: 'left',
  },

  Callout: {
    alignItems: 'stretch',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 165,
  },

  ContactsButton: {
    borderRadius: 30,
    borderColor: '#222222',
    borderStyle: 'solid',
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },

  ContactsButtonText: {
    textAlign: 'center',
  },
});
