import { View, Text, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import PagerView from 'react-native-pager-view';
import CircleDynamic from '@/components/screens/circle/CircleDynamic';
import CircleSelect from '@/components/screens/circle/CircleSelect';
import CircleDiscuss from '@/components/screens/circle/CircleDiscuss';
import { QuestionsIcon } from '@/components/svg/Questions';
import { ArticleIcon } from '@/components/svg/Article';
import { DynamicIcon } from '@/components/svg/Dynamic';

export default function Circle() {
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
        <View className='bg-white flex-1 px-4 relative'>
            <View className='pt-4'>
                <Text className='font-sfProRegular text-sm text-gray-600'>
                    Notice Group buying dog food.
                </Text>
            </View>
            <View className='flex-row items-center gap-4 border-b border-gray-50 pt-1'>
                <TouchableOpacity className='items-center self-start' onPress={() => onTabPress(0)}>
                    <Text className='font-sfProRegular text-base'>Dynamic</Text>
                    {
                        activeTab === 0 && (
                            <View className='h-1 w-5 bg-red-400 rounded-full' />
                        )
                    }
                </TouchableOpacity>
                <TouchableOpacity className='items-center self-start' onPress={() => onTabPress(1)}>
                    <Text className='font-sfProRegular text-base'>Discuss</Text>
                    {
                        activeTab === 1 && (
                            <View className='h-1 w-5 bg-red-400 rounded-full' />
                        )
                    }
                </TouchableOpacity>
                <TouchableOpacity className='items-center self-start' onPress={() => onTabPress(2)}>
                    <Text className='font-sfProRegular text-base'>Select</Text>
                    {
                        activeTab === 2 && (
                            <View className='h-1 w-5 bg-red-400 rounded-full' />
                        )
                    }
                </TouchableOpacity>
            </View>
            <PagerView ref={pagerRef} className='flex-1' initialPage={0} onPageSelected={onPageSelected}>
                <CircleDynamic key={0} />
                <CircleDiscuss key={1} />
                <CircleSelect key={2} />
            </PagerView>
            <View className='flex-row items-center justify-evenly bg-white drop-shadow-sm shadow-sm p-3 rounded-full absolute bottom-2 left-5 right-5' style={{
                shadowColor: '#000'
            }}>
                <TouchableOpacity className='items-center space-y-1'>
                    <QuestionsIcon />
                    <Text>Questions</Text>
                </TouchableOpacity>
                <TouchableOpacity className='items-center space-y-1'>
                    <ArticleIcon />
                    <Text>Article</Text>
                </TouchableOpacity>
                <TouchableOpacity className='items-center space-y-1'>
                    <DynamicIcon />
                    <Text>Dynamic</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}