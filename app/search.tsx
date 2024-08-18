import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchInput from '@/components/search/SearchInput'
import SearchHistory from '@/components/search/SearchHistory'
import TopSearch from '@/components/search/TopSearch'
import { useRouter } from 'expo-router'
import HotCircle from '@/components/search/HotCircle'
import PopularQA from '@/components/search/PopularQA'

export default function SearchScreen() {
    const navigate = useRouter()

    return (
        <SafeAreaView className='flex-1 bg-white'>
            <ScrollView className='flex-1 px-3.5 py-4'>
                <View className='flex-row items-center space-x-2'>
                    <SearchInput />
                    <TouchableOpacity onPress={() => navigate.back()}>
                        <Text className='text-sm font-sfProRegular'>Cancel</Text>
                    </TouchableOpacity>
                </View>
                <SearchHistory />
                <TopSearch />
                <HotCircle />
                <PopularQA />
            </ScrollView>
        </SafeAreaView>
    )
}