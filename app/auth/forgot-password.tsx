import { Image, ScrollView, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { images } from "@/constants/images";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/contexts/theme";
import Button from "@/components/buttons/button";
import PasswordInput from "@/components/inputs/password";

export default function ForgotPassword() {
    const { colors } = useTheme();
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [step, setStep] = useState(1);

    return (
        <SafeAreaView className="flex-1  bg-white">
            <ScrollView className="px-10">
                <View className="flex flex-col gap-4 items-center h-full pt-4">
                    <Image
                        resizeMode="contain"
                        className="w-32 h-32"
                        source={images.logo}
                    />

                    <Text className="text-xl font-bold mb-3">Forgot Password</Text>

                    {step === 1 && (
                        <View className="w-full flex flex-col gap-1">
                            <Text className="text-base mb-1 text-dark-100">
                                Enter your email
                            </Text>
                            <View className="border border-[#0415FE] rounded-lg w-full px-4 flex flex-row items-center gap-3">
                                <TextInput
                                    placeholder="Email address"
                                    className="py-4 text-base focus:border-none focus:outline-none rounded-lg flex-1 border-none outline-none"
                                    value={email}
                                    keyboardType="email-address"
                                    onChangeText={setEmail}
                                />
                                <Ionicons
                                    name="mail-outline"
                                    size={24}
                                    color={colors.text}
                                />
                            </View>
                            <Button
                                title="Next"
                                className="mt-4"
                                onPress={() => setStep(2)}
                            />
                        </View>
                    )}

                    {step === 2 && (
                        <View className="w-full  flex flex-col gap-2">
                            <Text className="text-base mb-1 text-dark-100">
                                Enter OTP Code
                            </Text>
                            <TextInput
                                placeholder="OTP Code"
                                className="py-4 text-base focus:border-none focus:outline-none rounded-lg flex-1 border border-[#0415FE] px-4 outline-none"
                                value={otp}
                                keyboardType="number-pad"
                                onChangeText={setOtp}
                            />
                            <Button
                                title="Verify"
                                className="mt-4"
                                onPress={() => setStep(3)}
                            />
                        </View>
                    )}

                    {step === 3 && (
                        <View className="w-full flex flex-col gap-2">
                            <Text className="text-base mb-1 text-dark-100">
                                Enter New Password
                            </Text>
                            <PasswordInput
                                placeholder="New Password"
                                value={newPassword}
                                onChangeText={setNewPassword}
                            />
                            <Button
                                title="Reset Password"
                                className="mt-4"
                                onPress={() => { }}
                            />
                        </View>
                    )}

                    <Text className="mt-3">
                        Remembered your password?{" "}
                        <Link className="text-primary-100" href="/">
                            Login Here
                        </Link>
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
