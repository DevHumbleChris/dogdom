import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Scan } from '@/components/svg/Scan'
import { SearchBigDarkIcon } from '@/components/svg/SearchBigDark'

export default function NoticeHeaderRight() {
    return (
        <View className='flex-row items-center gap-5 mr-3'>
            <TouchableOpacity>
                <Scan />
            </TouchableOpacity>
            <TouchableOpacity>
                <SearchBigDarkIcon />
            </TouchableOpacity>
        </View>
    )
}