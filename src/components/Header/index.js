import React from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import styles from './styles'

const Header = () => (
  <View style={styles.mainContainer}>
    <WhatshotIcon color="secondary" />
    <Text>FLAMES</Text>
  </View>
)

export default Header
