import { View, FlatList } from 'react-native'
import React from 'react'
import Search from '../Search'
import CircleCarousel from './CircleCarousel'
import PopularCircle from './PopularCircle'

export default function CircleListHeader() {
    return (
        <View className='pb-6 space-y-5'>
            <Search />
            <View>
                <FlatList
                    data={[{ id: '1' }, { id: '2' }]}
                    keyExtractor={(item) => item.id}
                    renderItem={() => (
                        <CircleCarousel />
                    )}
                    horizontal
                    className='flex-1 w-full pb-3'
                    showsHorizontalScrollIndicator={false}
                />
                <PopularCircle />
            </View>
        </View>
    )
}