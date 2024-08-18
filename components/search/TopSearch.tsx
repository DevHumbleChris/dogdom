import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { DeleteIcon } from '../svg/Delete'
import { topSearch } from '@/types'

export default function TopSearch() {
    return (
        <View className='mb-4 space-y-2'>
            <View className='flex-row items-center justify-between'>
                <Text className='text-xl font-sfProMedium'>Top search🔥</Text>
                <TouchableOpacity>
                    <DeleteIcon />
                </TouchableOpacity>
            </View>

            <View className='flex-row items-center flex-wrap gap-3'>
                {
                    topSearch.map((search, index) => (
                        <TouchableOpacity key={index} className='bg-[#FAFAFA] w-fit px-5 py-2 shadow rounded-full' style={{
                            shadowColor: '#FAFAFA'
                        }}>
                            <Text className='text-md font-sfProRegular'>
                                {search}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    )
}