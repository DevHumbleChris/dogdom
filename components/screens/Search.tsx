import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SearchIcon } from '../svg/Search'
import { VoiceIcon } from '../svg/Voice'

export default function Search() {
    return (
        <View className='bg-[#FAFAFA]/50 items-center justify-between flex-row rounded-full px-4 py-3'>
            <TouchableOpacity className='flex-row items-center gap-1'>
                <SearchIcon />
                <Text className='font-sfProRegular text-[#BBBBBB] text-sm'>Send the sample</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <VoiceIcon />
            </TouchableOpacity>
        </View>
    )
}