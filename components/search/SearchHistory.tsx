import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { DeleteIcon } from '../svg/Delete'
import { searchHistory } from '@/types'

export default function SearchHistory() {
    return (
        <View className='my-5 space-y-2'>
            <View className='flex-row items-center justify-between'>
                <Text className='text-xl font-sfProMedium'>Search history</Text>
                <TouchableOpacity>
                    <DeleteIcon />
                </TouchableOpacity>
            </View>

            <View className='flex-row items-center flex-wrap gap-3'>
                {
                    searchHistory.map((history, index) => (
                        <TouchableOpacity key={index} className='bg-[#FAFAFA] w-fit px-5 py-2 shadow rounded-full' style={{
                            shadowColor: '#FAFAFA'
                        }}>
                            <Text className='text-md font-sfProRegular'>
                                {history}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    )
}