import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Screen from '../components/Screen'

const EatsScreen = () => {
    return (
        <Screen style={tw`bg-white h-full`}>
            <Text>Metodo de Pago</Text>
        </Screen>
    )
}

export default EatsScreen

const styles = StyleSheet.create({})
