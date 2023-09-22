import React from 'react';
import { View, StyleSheet, useWindowDimensions, Pressable, Text, Dimensions } from 'react-native';
import { data } from '../utils/images';
import { globalStyles, normalize, PHONE_VIEW_SCREEN_HEIGHT_FULL, PHONE_VIEW_SCREEN_WIDTH_FULL, TABLET_VIEW_SCREEN_HEIGHT_FULL, TABLET_VIEW_SCREEN_WIDTH_FULL } from '../utils/utils';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Card from './Card';
import { SafeAreaView } from 'react-native-safe-area-context';

interface FullScreenViewProps {
    cardId: number;
    setShowFullScreenView: React.Dispatch<React.SetStateAction<boolean>>;
    deviceType: string;
    showBack: boolean;
}

export default function FullScreenView({ cardId, setShowFullScreenView, deviceType, showBack }: FullScreenViewProps) {
    const { height, width } = useWindowDimensions();
    const card = data.filter((card) => card.id === cardId)[0];

    const cardHeight = deviceType === 'phone' ? PHONE_VIEW_SCREEN_HEIGHT_FULL : TABLET_VIEW_SCREEN_HEIGHT_FULL;
    const cardWidth = deviceType === 'phone' ? PHONE_VIEW_SCREEN_WIDTH_FULL : TABLET_VIEW_SCREEN_WIDTH_FULL;

    return (
        <View style={[StyleSheet.absoluteFillObject, {
            zIndex: 100,
            justifyContent: 'center',
            alignItems: 'center',
        }]}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{
                    width: width,
                    height: '100%',
                    justifyContent: 'space-between',
                    paddingTop: height * 0.05,
                    alignItems: 'center',
                }}>
                    <View
                        style={[globalStyles.cardShadow, {
                            zIndex: 100,
                            width: cardWidth,
                            height: cardHeight,
                            borderRadius: 16,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }]}
                    >
                        <Card frontImage={card.frontImage} backImage={card.backImage} id={card.id} showBack={showBack} />
                    </View >
                    <View style={{
                        width: width,
                        alignItems: "center",
                        justifyContent: "space-around",
                        display: "flex",
                        flexDirection: "row",
                    }}>
                        <Pressable
                            style={[globalStyles.shadow]}
                            onPress={() => setShowFullScreenView(false)}
                        >
                            <View style={{ justifyContent: "center", alignItems: "center", }}>
                                <MaterialCommunityIcons
                                    style={globalStyles.shadow}
                                    name="fullscreen-exit"
                                    size={deviceType === "phone" ? 32 : 40}
                                    color="white"
                                />
                                <Text
                                    style={[
                                        globalStyles.shadow,
                                        { fontSize: normalize(14, deviceType), marginTop: 5, color: 'white' },
                                    ]}
                                >
                                    Exit Full Screen
                                </Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </SafeAreaView>
        </View >

    )
}