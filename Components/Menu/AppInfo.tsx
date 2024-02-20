import React from "react";
import Animated, { SlideInRight, SlideOutRight } from "react-native-reanimated";
import { View, Text, StyleSheet, useWindowDimensions, Pressable, ScrollView } from "react-native";
import { COLOR_VIOLET_DARK, COLOR_VIOLET_LIGHT, COLOR_VIOLET_LIGHT_CONTRAST_TEXT, IconNames, normalize } from "../../utils/utils";
import IconHeader from "../IconHeader";
import { Link, router, useRouter } from "expo-router";
import Divider from "../Divider";

interface AppInfoProps {
    setMenuIndex: React.Dispatch<React.SetStateAction<number>>;
    deviceType: string;
}

export default function AppInfo({
    setMenuIndex,
    deviceType,
}: AppInfoProps) {
    const router = useRouter();
    return (
        <Animated.View
            entering={SlideInRight}
            style={{ height: '100%' }}
        >
            <IconHeader
                onClose={() => setMenuIndex(0)}
                deviceType={deviceType}
                iconName={IconNames.chevronLeft}
                alignLeft
            />
            <ScrollView bounces={false} style={{ height: '100%', alignSelf: 'center', width: deviceType === "tablet" ? "85%" : "100%" }}>
                <View style={{ borderRadius: 10, padding: 20 }}>
                    <Text style={[styles.headerText, { fontSize: normalize(14, deviceType) }]}>
                        We hope you enjoyed this Namaste Enrichment Center Inc. product. For more information, please visit our website.
                    </Text>
                </View>
                <Divider />
                <View style={{
                    marginBottom: '25%', borderRadius: 14, width: '100%', padding: 20, justifyContent: 'center'
                }}>
                    <Text style={[styles.headerText, { fontSize: normalize(18, deviceType) }]}>
                        Links
                    </Text>
                    <Pressable onPress={() => router.push('https://namasteconsciousness.com/')}>
                        <View style={[styles.button]}>
                            <Text style={[{ fontSize: normalize(14, deviceType), color: 'white', alignSelf: 'center' }]}>Our website</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => router.push('https://iainblack.dev')}>
                        <View style={[styles.button]}>
                            <Text style={[{ fontSize: normalize(14, deviceType), color: 'white', alignSelf: 'center' }]}>App developer's website</Text>
                        </View>
                    </Pressable>
                </View>
            </ScrollView>
        </Animated.View >
    );
}

const styles = StyleSheet.create({
    headerText: {
        color: "white",
        marginBottom: 20,
    },
    text: {
        color: "white",
        marginVertical: 18,
    },
    button: {
        backgroundColor: COLOR_VIOLET_DARK,
        padding: 10,
        borderRadius: 16,
        marginTop: 15,
    },
});
