import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Scan } from '@/components/svg/Scan'
import { CogIcon } from '@/components/svg/CogIcon'

export default function UserHeaderRight() {
    return (
        <View className='flex-row items-center gap-5 mr-3'>
            <TouchableOpacity>
                <Scan />
            </TouchableOpacity>
            <TouchableOpacity>
                <CogIcon />
            </TouchableOpacity>
        </View>
    )
}