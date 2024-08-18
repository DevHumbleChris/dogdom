import { FlatList } from 'react-native'
import React from 'react'
import NoticeNavigations from '@/components/screens/notice/NoticeNavigations'
import NoticeCard from '@/components/screens/notice/NoticeCard'
import { notications } from '@/types'

export default function MessageScreen() {
    return (
        <FlatList
            data={notications}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <NoticeCard notice={item} />
            )}
            className='flex-1 bg-white px-3 py-3'
            ListHeaderComponent={() => (
                <NoticeNavigations />
            )}
            showsVerticalScrollIndicator={false}
        />
    )
}