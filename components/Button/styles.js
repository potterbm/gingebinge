import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  Root: {
    alignItems: 'stretch',
    borderRadius: 22.5,
    flexBasis: 'auto',
    flexDirection: 'column',
    flexGrow: 0,
    flexShrink: 0,
    height: 45,
    justifyContent: 'center',
  },

  Text: {
    fontSize   : 16,
    fontWeight : '500',
    textAlign: 'center',
  },

  transparentView: {
    backgroundColor : '#ffffff',
  },

  transparentText: {
    color: '#F03030',
    fontWeight: '300',
  },

  redView: {
    backgroundColor : '#F03030',
  },

  redText: {
    color           : '#ffffff',
  },
});
