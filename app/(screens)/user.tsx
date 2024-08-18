import { ScrollView } from 'react-native'
import React from 'react'
import UserInfo from '@/components/screens/user/UserInfo'
import UserStats from '@/components/screens/user/UserStats'
import UserStatsNavigations from '@/components/screens/user/UserStatsNavigations'

export default function UserScreen() {
    return (
        <ScrollView className='h-full w-full bg-white py-2 px-3 relative'>
            <UserInfo />
            <UserStats />
            <UserStatsNavigations />
        </ScrollView>
    )
}