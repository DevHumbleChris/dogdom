import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { NoticeLike } from '@/components/svg/NoticeLike'
import { NoticeMessages } from '@/components/svg/NoticeMessages'
import { NoticeComments } from '@/components/svg/NoticeComments'
import { NoticeHelp } from '@/components/svg/NoticeHelp'

export default function NoticeNavigations() {
    return (
        <View className='flex-row items-center bg-white px-5 py-3 rounded-md justify-between mb-5'>
            <View className='items-center space-y-1'>
                <TouchableOpacity className='bg-primary p-4 rounded-full h-[50px] w-[50px] items-center'>
                    <NoticeLike />
                </TouchableOpacity>
                <Text className='text-sm font-sfProRegular'>Praise</Text>
            </View>
            <View className='items-center space-y-1'>
                <TouchableOpacity className='bg-[#6AB5F9] p-4 rounded-full h-[50px] w-[50px] items-center'>
                    <NoticeMessages />
                </TouchableOpacity>
                <Text className='text-sm font-sfProRegular'>Messages</Text>
            </View>
            <View className='items-center space-y-1'>
                <TouchableOpacity className='bg-[#FD8415] p-4 rounded-full h-[50px] w-[50px] items-center'>
                    <NoticeComments />
                </TouchableOpacity>
                <Text className='text-sm font-sfProRegular'>Comments</Text>
            </View>
            <View className='items-center space-y-1'>
                <TouchableOpacity className='bg-[#5470F6] p-4 rounded-full h-[50px] w-[50px] items-center'>
                    <NoticeHelp />
                </TouchableOpacity>
                <Text className='text-sm font-sfProRegular'>Help</Text>
            </View>
        </View>
    )
}