import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Scan } from '@/components/svg/Scan'
import { Add } from '@/components/svg/Add'

export default function CircleHeaderRight() {
    return (
        <View className='mr-4 flex-row items-center gap-5'>
            <TouchableOpacity>
                <Scan />
            </TouchableOpacity>
            <TouchableOpacity>
                <Add />
            </TouchableOpacity>
        </View>
    )
}