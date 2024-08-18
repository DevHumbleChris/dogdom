import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Users } from '@/components/svg/Users'
import { ChevronRight } from '@/components/svg/ChevronRight'
import AntDesign from '@expo/vector-icons/AntDesign';
import { formatNumber } from '@/utils'

export default function UserStatsNavigations() {
    return (
        <View className='my-6 flex-1 space-y-7'>
            <TouchableOpacity className='flex-row items-center justify-between'>
                <View className='flex-row items-center space-x-2'>
                    <Users />
                    <Text className='font-sfProTextRegular text-xl'>Followers</Text>
                </View>
                <View className='flex-row items-center space-x-1'>
                    <Text className='font-sfProRegular text-sm text-gray-500'>677</Text>
                    <ChevronRight />
                </View>
            </TouchableOpacity>
            <TouchableOpacity className='flex-row items-center justify-between'>
                <View className='flex-row items-center space-x-2'>
                    <AntDesign name="user" size={23} />
                    <Text className='font-sfProTextRegular text-xl'>Following</Text>
                </View>
                <View className='flex-row items-center space-x-1'>
                    <Text className='font-sfProRegular text-sm text-gray-500'>
                        {formatNumber(26)}
                    </Text>
                    <ChevronRight />
                </View>
            </TouchableOpacity>
            <TouchableOpacity className='flex-row items-center justify-between'>
                <View className='flex-row items-center space-x-2'>
                    <AntDesign name="staro" size={23} />
                    <Text className='font-sfProTextRegular text-xl'>Collections</Text>
                </View>
                <View className='flex-row items-center space-x-1'>
                    <Text className='font-sfProRegular text-sm text-gray-500'>
                        {formatNumber(536)}
                    </Text>
                    <ChevronRight />
                </View>
            </TouchableOpacity>
            <TouchableOpacity className='flex-row items-center justify-between'>
                <View className='flex-row items-center space-x-3'>
                    <AntDesign name="setting" size={23} />
                    <Text className='font-sfProTextRegular text-xl'>Settings</Text>
                </View>
                <View className='flex-row items-center space-x-1'>
                    <ChevronRight />
                </View>
            </TouchableOpacity>
        </View>
    )
}