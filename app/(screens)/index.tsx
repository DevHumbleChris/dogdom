import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PagerView from 'react-native-pager-view';
import Header from '@/components/screens/home/Header';

export default function HomeScreen() {
    return (
        <SafeAreaView className='bg-white h-full'>
            <Header />
            <FlatList
                data={[{ id: '1' }, { id: '2' }]}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.id}</Text>
                    </View>
                )}
                ListHeaderComponent={() => (
                    <Header />
                )}
            />
            {/* <PagerView className='w-full h-full' initialPage={0}>
                <View key={1}>
                    <Text>Hello</Text>
                </View>
                <View key={2}>
                    <Text>Hello</Text>
                </View>
            </PagerView>
            <ScrollView className='w-full h-full'>
            </ScrollView> */}
        </SafeAreaView>
    )
}