import React from 'react'
import { Tabs } from 'expo-router'
import TabBarIcon from '@/components/navigation/TabBarIcon'
import { IconName } from '@/types'
import { StatusBar } from 'expo-status-bar'
import { Text } from 'react-native'
import CircleHeaderRight from '@/components/screens/circle/CircleHeaderRight'

export default function ScreenLayout() {
    return (
        <>
            <Tabs screenOptions={{
                tabBarActiveTintColor: '#FA6650',
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 65,
                    backgroundColor: "#FFF",
                    borderTopWidth: 0.5,
                    borderTopColor: "#FCFCFC",
                }
            }}>
                <Tabs.Screen name='index' options={{
                    headerShown: false,
                    tabBarIcon: (icon) => (
                        <TabBarIcon {...icon} name={IconName.HOME} />
                    )
                }} />
                <Tabs.Screen name='circle' options={{
                    tabBarIcon: (icon) => (
                        <TabBarIcon {...icon} name={IconName.CIRCLE} />
                    ),
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerLeft: () => (
                        <Text className='text-2xl ml-3 font-sfProSemibold'>Circle</Text>
                    ),
                    headerTitleStyle: {
                        display: 'none'
                    },
                    headerShadowVisible: false,
                    headerRight: () => (
                        <CircleHeaderRight />
                    )
                }} />
                <Tabs.Screen name='release' options={{
                    headerShown: false,
                    tabBarIcon: (icon) => (
                        <TabBarIcon {...icon} name={IconName.RELEASE} />
                    ),
                    tabBarStyle: {
                        display: 'none'
                    }
                }} />
                <Tabs.Screen name='message' options={{
                    headerShown: false,
                    tabBarIcon: (icon) => (
                        <TabBarIcon {...icon} name={IconName.MESSAGE} />
                    )
                }} />
                <Tabs.Screen name='user' options={{
                    headerShown: false,
                    tabBarIcon: (icon) => (
                        <TabBarIcon {...icon} name={IconName.USER} />
                    )
                }} />
            </Tabs>
            <StatusBar style='dark' />
        </>
    )
}