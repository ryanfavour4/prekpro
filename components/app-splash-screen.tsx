import { images } from "@/constants/images";
import { useTheme } from "@/contexts/theme";
import { useEffect, useState } from "react";
import { View, Text, Image, ActivityIndicator, StyleSheet } from "react-native";
import { Video, ResizeMode } from 'expo-av'
import loaderVideo from '../assets/images/loader.mp4'

export default function AppSplashScreen({
    onFinish,
}: {
    onFinish: () => void;
}) {
    const [loading, setLoading] = useState(true);
    const { colors } = useTheme();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            onFinish();
        }, 3000);
    }, []);

    return (
        <View style={styles.viewBox} className="">
            <View className="flex items-center justify-center gap-2">
                <Image
                    resizeMode="contain"
                    style={styles.logo}
                    className=""
                    source={images.logo}
                />
                {loading && (
                    // <ActivityIndicator size="large" color={colors.primary} />
                    <View className='flex-row justify-center'>
                        <Video
                            source={loaderVideo}
                            resizeMode={ResizeMode.CONTAIN}
                            shouldPlay
                            isLooping
                            isMuted
                            className="rounded-lg"
                            style={{ width: 50, height: 50 }} // Add dimensions
                        />
                    </View>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 200,
        height: 100,
    },
    viewBox: {
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        flex: 1,
        position: "absolute",
        width: "100%",
        height: "100%",
        padding: 20,
        margin: "auto",
        elevation: 5,
    },
    viewBoxContainer: {
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    },
});
