import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import tw from 'tailwind-react-native-classnames'
import Rating from '../components/Rating'
import { selectOrigin } from '../redux/slices/navSlice'
import { useSelector } from 'react-redux'


const RatingScreen = () => {

    return (
        <View style={tw`bg-white h-full`}>
            <View>
                <Rating />
            </View>

        </View>
    )
}

export default RatingScreen

const styles = StyleSheet.create({})
