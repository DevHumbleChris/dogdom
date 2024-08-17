import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { RankingIcon } from '@/components/svg/Ranking'
import { DiscussIcon } from '@/components/svg/Discuss'
import { SurroundingIcon } from '@/components/svg/Surrounding'
import SelectCarousel from './SelectCarousel'
import Search from '../Search'

export default function SelectListHeader() {
    return (
        <View className='pb-6 space-y-5'>
            <Search />
            <View className='flex-row justify-evenly gap-x-10'>
                <TouchableOpacity className='items-center'>
                    <RankingIcon />
                    <Text className='text-base font-sfProRegular'>Ranking</Text>
                </TouchableOpacity>
                <TouchableOpacity className='items-center'>
                    <DiscussIcon />
                    <Text className='text-base font-sfProRegular'>Discuss</Text>
                </TouchableOpacity>
                <TouchableOpacity className='items-center'>
                    <SurroundingIcon />
                    <Text className='text-base font-sfProRegular'>Surrounding</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={[{ id: '1' }, { id: '2' }]}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <SelectCarousel />
                )}
                horizontal
                className='flex-1 w-full pb-3'
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}