import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const FooterTab = () => {
  return (
    <View style={styles.footerBarContainer} position="static">
      <Text>copyright (c) Jijo Bose 2021</Text>
    </View>
  )
}

export default FooterTab

const styles = StyleSheet.create({
  footerBarContainer: {
    left: 0,
    right: 0,
    backgroundColor: 'white',
    position: 'fixed',
    bottom: 0,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    zIndex: 10,
  },
})
