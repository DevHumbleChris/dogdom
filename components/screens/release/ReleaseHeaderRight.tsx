import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ReleaseHeaderRight() {
    return (
        <TouchableOpacity disabled>
            <Text className='text-base text-rose-300 mr-3 font-sfProRegular'>Release</Text>
        </TouchableOpacity>
    )
}