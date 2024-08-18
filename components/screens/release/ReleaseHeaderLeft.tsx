import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function ReleaseHeaderLeft() {
    const navigate = useRouter()
    return (
        <TouchableOpacity onPress={() => navigate.back()}>
            <Text className='text-base ml-3 font-sfProRegular'>Cancel</Text>
        </TouchableOpacity>
    )
}