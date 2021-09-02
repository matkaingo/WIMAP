import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { useDispatch } from 'react-redux'
import tailwind from 'tailwind-react-native-classnames'

const data = [
    {
        id: '3423',
        icon: 'star',
        color: 'orange',
        type: 'feather',
        location: 'Valoranos',
        screen: "RatingScreen"
    },
    {
        id: '36567',
        icon: 'help-circle',
        type: 'feather',
        color: 'black',
        location: "Ayuda y Soporte",
        screen: "HelpScreen"
    },
]

const RatingHelp = () => {

    const navigation = useNavigation();
    
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                
                <TouchableOpacity 
                    style={tailwind`flex-row items-center py-3`}
                    onPress={() => navigation.push(item.screen)}
                >
                    <Icon 
                        style={tailwind`rounded-full bg-white pl-4`}
                        name={item.icon}
                        type={item.type}
                        color={item.color}
                        size={18}
                    />
                    
                    <Text style={tailwind`font-bold text-lg p-3`}>{item.location}</Text>
                    
                </TouchableOpacity>
            )}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={() => (
                <View
                    style={[tailwind`bg-gray-200`, { height: 0.5 }]}
                />
            )}
            keyExtractor={item => item.id.toString()}
            horizontal
      />
    )
}

export default RatingHelp

const styles = StyleSheet.create({})
