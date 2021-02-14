import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import Header from '../../components/Header'
import FooterTab from '../../components/FooterMenu'
import { TextField } from '@material-ui/core'

const Home = () => {
  const [yourName, setYourName] = useState('')
  const [partnerName, SetPartnerName] = useState('')
  const [answer, setAnswer] = useState('')

  const updateYourName = (event) => {
    setYourName(event.target.value)
  }

  const updatePartnerName = (event) => {
    SetPartnerName(event.target.value)
  }

  const heartBeat = () => {
    var inputOne = yourName;
    var inputTwo = partnerName;
    var flames = ['Friends', 'Love', 'Affair', 'Marriage', 'Enemy', 'Sister'];
    if (inputOne != "" && inputTwo != "") {
      var lengthInput = inputOne.length + inputTwo.length;
      while (flames.length != 1) {
        flames = flames.splice(lengthInput % 6, 1);
      }
      return flames[0]
    }
    else {
      alert("Fill out both the fields");
    }
  }

  const calculateFlame = async () => {
    const finalResult = await heartBeat()
    if (finalResult !== undefined) {
      setAnswer(finalResult)
    } else {
      setAnswer('')
    }
    console.log(finalResult)
  }

  const renderFlameBox = () => {
    return (
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
        <View style={
          answer.length > 0 && answer.charAt(0) === 'F' ?
            styles.enabledAnswer :
            styles.disabledAnswer
        }>
          <Text style={{ fontSize: 35, textAlign: 'center' }}>F</Text>
        </View>
        <View style={
          answer.length > 0 && answer.charAt(0) === 'L' ?
            styles.enabledAnswer :
            styles.disabledAnswer
        }>
          <Text style={{ fontSize: 35, textAlign: 'center' }}>L</Text>
        </View>
        <View style={
          answer.length > 0 && answer.charAt(0) === 'A' ?
            styles.enabledAnswer :
            styles.disabledAnswer
        }>
          <Text style={{ fontSize: 35, textAlign: 'center' }}>A</Text>
        </View>
        <View style={
          answer.length > 0 && answer.charAt(0) === 'M' ?
            styles.enabledAnswer :
            styles.disabledAnswer
        }>
          <Text style={{ fontSize: 35, textAlign: 'center' }}>M</Text>
        </View>
        <View style={
          answer.length > 0 && answer.charAt(0) === 'E' ?
            styles.enabledAnswer :
            styles.disabledAnswer
        }>
          <Text style={{ fontSize: 35, textAlign: 'center' }}>E</Text>
        </View>
        <View style={
          answer.length > 0 && answer.charAt(0) === 'S' ?
            styles.enabledAnswer :
            styles.disabledAnswer
        }>
          <Text style={{ fontSize: 35, textAlign: 'center' }}>S</Text>
        </View>
      </View>
    )
  }

  const renderEmojiBox = () => {
    return (
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10
      }}>
        <View style={
          answer.length > 0 && answer.charAt(0) === 'F' ?
            styles.enabledAnswer :
            styles.disabledAnswer
        }>
          <Text style={{ fontSize: 35, textAlign: 'center' }}>😅</Text>
        </View>
        <View style={
          answer.length > 0 && answer.charAt(0) === 'L' ?
            styles.enabledAnswer :
            styles.disabledAnswer
        }>
          <Text style={{ fontSize: 35, textAlign: 'center' }}>😍</Text>
        </View>
        <View style={
          answer.length > 0 && answer.charAt(0) === 'A' ?
            styles.enabledAnswer :
            styles.disabledAnswer
        }>
          <Text style={{ fontSize: 35, textAlign: 'center' }}>😙</Text>
        </View>
        <View style={
          answer.length > 0 && answer.charAt(0) === 'M' ?
            styles.enabledAnswer :
            styles.disabledAnswer
        }>
          <Text style={{ fontSize: 35, textAlign: 'center' }}>👰🏻</Text>
        </View>
        <View style={
          answer.length > 0 && answer.charAt(0) === 'E' ?
            styles.enabledAnswer :
            styles.disabledAnswer
        }>
          <Text style={{ fontSize: 35, textAlign: 'center' }}>😱</Text>
        </View>
        <View style={
          answer.length > 0 && answer.charAt(0) === 'S' ?
            styles.enabledAnswer :
            styles.disabledAnswer
        }>
          <Text style={{ fontSize: 35, textAlign: 'center' }}>🤯</Text>
        </View>
      </View>
    )
  }

  return (
    <>
      <Header />
      <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
        <TextField
          error={yourName.length > 0}
          label='Your Name'
          InputLabelProps={{
            style: { color: '#909090' }
          }}
          required
          defaultValue={yourName}
          placeholder='Your Name'
          inputProps={{
            value: yourName,
            inputMode: 'text'
          }}
          value={yourName}
          onChange={updateYourName}
          helperText={yourName.length > 1 && yourName.length <= 2 ? 'So your name is just 2 letters.. Fake!' : null}
        />
      </View>
      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <TextField
          error={partnerName.length > 0}
          label='Your Partner Name'
          InputLabelProps={{
            style: { color: '#909090' }
          }}
          required
          defaultValue={partnerName}
          placeholder='Your Partner Name'
          inputProps={{
            value: partnerName,
            inputMode: 'text'
          }}
          value={partnerName}
          onChange={updatePartnerName}
          helperText={partnerName.length > 1 && partnerName.length <= 2 ? 'So your partner name is just 2 letters.. Fake!' : null}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => calculateFlame()}
          style={styles.otpButton}
        >
          <Text
            style={{ color: 'white', fontWeight: 'bold' }}>Calculate
          </Text>
        </TouchableOpacity>
        <Text>We dont save your data or your relationship</Text>
      </View>

      {renderFlameBox()}
      {renderEmojiBox()}
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>{answer}</Text>
      </View>
      <FooterTab />
    </>
  )
}

const styles = StyleSheet.create({
  enabledAnswer: {
    width: 50,
    height: 50
  },
  disabledAnswer: {
    width: 50,
    height: 50,
    opacity: 0.1
  },
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  flamesText: {
    letterSpacing: 25,
    fontSize: 30,
  },
  link: {
    color: 'blue',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    justifyContent: 'center'
  },
  text: {
    alignItems: 'center',
    fontSize: 24,
    marginBottom: 24,
  },
  buttonContainer: {
    height: 'calc((15vh))',
    justifyContent: 'center',
    alignItems: 'center'
  },
  otpButton: {
    flexDirection: 'row',
    backgroundColor: 'red',
    width: 'calc((85vw))',
    padding: 15,
    justifyContent: 'center',
    borderRadius: 5
  },
})

export default Home
