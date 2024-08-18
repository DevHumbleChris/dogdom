import { View, Text, Image } from "react-native";
import React from "react";

export default function CircleInfo() {
    return (
        <View className="pt-5 flex-row gap-3">
            <Image
                source={{
                    uri: "https://images.unsplash.com/photo-1685343425149-b4934140a2e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGRvZ3N8ZW58MHx8MHx8fDA%3D",
                }}
                resizeMode="cover"
                className="w-20 h-20 rounded-full"
            />
            <View className="flex-1 space-y-2">
                <View>
                    <Text className="text-white font-sfProMedium text-lg">
                        Dog's Life
                    </Text>
                    <Text className="-mt-1 font-sfProRegular text-gray-300 text-xs">
                        Dog knowledge sharing, irregularly organized offline exchanges and
                        group buying.
                    </Text>
                </View>
                <View className="flex-row items-center justify-between">
                    <Text className="text-gray-300 font-sfProRegular text-xs">548 Members</Text>
                    <Text className="text-gray-300 font-sfProRegular text-xs">Joined</Text>
                </View>
            </View>
        </View>
    );
}
