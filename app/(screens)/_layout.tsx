import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabBarIcon from '@/components/navigation/TabBarIcon'
import { IconName } from '@/types'

export default function ScreenLayout() {
    return (
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
                headerShown: false,
                tabBarIcon: (icon) => (
                    <TabBarIcon {...icon} name={IconName.CIRCLE} />
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
    )
}