import React from 'react'
import { Tabs, useSegments } from 'expo-router'
import TabBarIcon from '@/components/navigation/TabBarIcon'
import { IconName } from '@/types'
import { StatusBar } from 'expo-status-bar'
import { Text } from 'react-native'
import NoticeHeaderRight from '@/components/screens/notice/NoticeHeaderRight'

export default function ScreenLayout() {
    const segment = useSegments();

    // Function to check if arrays are equal
    function arraysEqual(a: string[], b: string[]): boolean {
        return a.length === b.length && a.every((val, index) => val === b[index]);
    }

    // Check if segments match the expected array
    const expectedSegments = ["(screens)", "circle", "[id]"];
    const segmentsMatch = arraysEqual(segment, expectedSegments)

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
                    headerShadowVisible: false,
                    headerShown: false,
                    tabBarStyle: {
                        display: segmentsMatch ? 'none' : 'flex',
                        height: 65,
                        backgroundColor: "#FFF",
                        borderTopWidth: 0.5,
                        borderTopColor: "#FCFCFC",
                    }
                }} />
                <Tabs.Screen name='release' options={{
                    headerShown: false,
                    tabBarIcon: (icon) => (
                        <TabBarIcon {...icon} name={IconName.RELEASE} />
                    ),
                    tabBarStyle: {
                        display: 'none'
                    },
                }} />
                <Tabs.Screen name='notice' options={{
                    tabBarIcon: (icon) => (
                        <TabBarIcon {...icon} name={IconName.MESSAGE} />
                    ),
                    headerLeft: () => (
                        <Text className='text-2xl font-sfProSemibold ml-3'>Message</Text>
                    ),
                    headerRight: () => (
                        <NoticeHeaderRight />
                    ),
                    headerShadowVisible: false,
                    headerTitleStyle: {
                        display: 'none',
                    },
                    headerStyle: {
                        backgroundColor: 'white'
                    }
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