import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { SearchIcon } from '@/components/svg/Search'
import { VoiceIcon } from '@/components/svg/Voice'
import { RankingIcon } from '@/components/svg/Ranking'
import { DiscussIcon } from '@/components/svg/Discuss'
import { SurroundingIcon } from '@/components/svg/Surrounding'
import SelectCarousel from './SelectCarousel'

export default function SelectListHeader() {
    return (
        <View className='pb-6 space-y-5'>
            <View className='bg-[#FAFAFA]/50 items-center justify-between flex-row rounded-full px-4 py-3'>
                <TouchableOpacity className='flex-row items-center gap-1'>
                    <SearchIcon />
                    <Text className='font-sfProRegular text-[#BBBBBB] text-sm'>Send the sample</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <VoiceIcon />
                </TouchableOpacity>
            </View>
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