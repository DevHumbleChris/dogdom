import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { QRCode } from '@/components/svg/QRCode'

export default function UserInfo() {
    return (
        <View className='flex-row items-center justify-between mt-2 mb-3'>
            <View className='flex-row items-center space-x-3'>
                <Image
                    source={{
                        uri: "https://images.unsplash.com/profile-1636845830684-1e9199e57a5d?w=64&dpr=2&crop=faces&bg=%23fff&h=64&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                    }}
                    resizeMode="cover"
                    className="w-16 h-16 rounded-full"
                />
                <View>
                    <Text className='text-lg font-sfProRegular'>Kelly Goldsmith</Text>
                    <Text className='text-sm text-gray-500 font-sfProRegular'>Golden Retriever · Mobile </Text>
                </View>
            </View>
            <TouchableOpacity>
                <QRCode />
            </TouchableOpacity>
        </View>
    )
}