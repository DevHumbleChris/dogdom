import { View, Text, ScrollView, FlatList } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PagerView from 'react-native-pager-view';
import Header from '@/components/screens/home/Header';
import SelectTab from '@/components/screens/home/SelectTab';
import DiscoverTab from '@/components/screens/home/DiscoverTab';

export default function HomeScreen() {
    const [activeTab, setActiveTab] = useState<number>(0);
    const pagerRef = useRef<PagerView>(null);

    const onTabPress = (index: number) => {
        setActiveTab(index);
        pagerRef.current?.setPage(index);
    };

    const onPageSelected = (e: any) => {
        setActiveTab(e.nativeEvent.position);
    };

    return (
        <SafeAreaView className='bg-white h-full'>
            <Header onTabPress={onTabPress} activeTab={activeTab} />
            <PagerView ref={pagerRef} className='flex-1' initialPage={0} onPageSelected={onPageSelected}>
                <SelectTab key={1} />
                <DiscoverTab key={2} />
            </PagerView>
        </SafeAreaView>
    )
}