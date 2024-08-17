import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { RankingIcon } from '@/components/svg/Ranking'
import { DiscussIcon } from '@/components/svg/Discuss'
import { SurroundingIcon } from '@/components/svg/Surrounding'
import Search from '../Search'
import { Nearby } from '@/components/svg/Nearby'
import { Revelation } from '@/components/svg/Revelation'
import { Sample } from '@/components/svg/Sample'

export default function DiscoverListHeader() {
    return (
        <View className='pb-6 space-y-5'>
            <Search />
            <View className='flex-row justify-evenly gap-x-10'>
                <TouchableOpacity className='items-center'>
                    <Nearby />
                    <Text className='text-base font-sfProRegular'>Nearby</Text>
                </TouchableOpacity>
                <TouchableOpacity className='items-center'>
                    <Revelation />
                    <Text className='text-base font-sfProRegular'>Revelation</Text>
                </TouchableOpacity>
                <TouchableOpacity className='items-center'>
                    <Sample />
                    <Text className='text-base font-sfProRegular'>Foster care</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}