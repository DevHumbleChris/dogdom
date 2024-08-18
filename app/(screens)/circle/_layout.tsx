import { Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import CircleHeaderRight from '@/components/screens/circle/CircleHeaderRight'
import CircleHeader from '@/components/screens/circle/CircleHeader';
import { StatusBar } from 'expo-status-bar';

export default function CircleLayout() {
    return (
        <>
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
                <Stack.Screen name='[id]' options={{
                    header: () => (
                        <CircleHeader />
                    )
                }} />
            </Stack>
            <StatusBar style='light' />
        </>
    )
}