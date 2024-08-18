import { View, Text, ScrollView, TextInput } from 'react-native'
import React from 'react'

export default function ReleaseScreen() {
    return (
        <ScrollView className='flex-1 py-3 bg-white px-3'>
            <Text className='text-2xl font-sfProMedium'>Release something new</Text>
            <TextInput multiline placeholder="What are you thinking now?" className='font-sfProRegular' />
        </ScrollView>
    )
}