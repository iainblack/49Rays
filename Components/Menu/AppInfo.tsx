import React from "react";
import Animated, { SlideInRight, SlideOutRight } from "react-native-reanimated";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { IconNames, normalize } from "../../utils/utils";
import IconHeader from "../IconHeader";
import { Link } from "expo-router";

interface AppInfoProps {
    setMenuIndex: React.Dispatch<React.SetStateAction<number>>;
    deviceType: string;
}

export default function AppInfo({
    setMenuIndex,
    deviceType,
}: AppInfoProps) {
    const { height } = useWindowDimensions();
    return (
        <Animated.View entering={SlideInRight} exiting={SlideOutRight}>
            <IconHeader
                onClose={() => setMenuIndex(0)}
                deviceType={deviceType}
                iconName={IconNames.chevronLeft}
                alignLeft
            />
            <View>
                <View style={{ marginBottom: 30 }}>
                    <Text
                        style={[
                            styles.headerText,
                            { fontSize: normalize(18, deviceType) },
                        ]}
                    >
                        More App Info
                    </Text>
                    <Text style={[styles.text, { fontSize: normalize(14, deviceType), marginBottom: height * 0.05 }]}>
                        We hope you enjoyed this Namaste Inc. product. For more information, please visit our website.
                    </Text>
                    <Text style={[styles.headerText, { fontSize: normalize(18, deviceType), textAlign: 'left' }]}>Links</Text>
                    <Link
                        style={[
                            styles.text,
                            {
                                fontSize: normalize(14, deviceType),
                                textDecorationLine: "underline",
                                marginBottom: 10,
                            },
                        ]}
                        href="https://namasteconsciousness.com/"
                    >
                        namasteconsciousness.com
                    </Link>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Link href={'https://iainblack.dev/'} style={[styles.text, { textDecorationLine: 'underline', fontSize: normalize(14, deviceType), marginBottom: height * 0.05 }]}>www.iainblack.dev </Link>
                        <Text style={[styles.text, { fontSize: normalize(12, deviceType) }]}>(Developer Website) </Text>
                    </View>
                </View>
            </View>
        </Animated.View >
    );
}

const styles = StyleSheet.create({
    headerText: {
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
    },
    text: {
        color: "white",
        fontWeight: '300',
        textAlign: 'left'
    },
});
