import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import CircleHeaderRight from '@/components/screens/circle/CircleHeaderRight'

export default function CircleLayout() {
    return (
        <Stack screenOptions={{
            headerStyle: {
                backgroundColor: 'white'
            },
            headerShadowVisible: false,
        }}>
            <Stack.Screen name='index'
                options={{
                    headerLeft: () => (
                        <Text className='text-2xl font-sfProSemibold'>Circle</Text>
                    ),
                    headerRight: () => (
                        <CircleHeaderRight />
                    ),
                    title: '',
                }}
            />
            <Stack.Screen name='[id]' />
        </Stack>
    )
}