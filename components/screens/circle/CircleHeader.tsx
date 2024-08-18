import { View, Image } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur'
import CircleHeaderNavigations from './CircleHeaderNavigations'
import CircleInfo from './CircleInfo'

export default function CircleHeader() {
    return (
        <View className='relative'>
            <Image
                source={{
                    uri: 'https://images.unsplash.com/photo-1601758066233-2dc181fb3380?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRvZ3N8ZW58MHx8MHx8fDA%3D'
                }}
                resizeMode='cover'
                className='absolute h-full w-full'
            />
            <BlurView intensity={100} tint='systemChromeMaterialDark'>
                <View className='px-4 pt-[50px] pb-4'>
                    <CircleHeaderNavigations />
                    <CircleInfo />
                </View>
            </BlurView>
        </View>
    )
}