import React, { Animated } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

/**
 * Vibe Kit: SparkleButton
 * A premium button with smooth hover/press scaling and a "sparkle" vibration effect.
 */
export const SparkleButton = ({ title, onPress }) => {
    const scale = new Animated.Value(1);

    const handlePressIn = () => {
        Animated.spring(scale, {
            toValue: 0.95,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scale, {
            toValue: 1,
            friction: 3,
            tension: 40,
            useNativeDriver: true,
        }).start();
    };

    return (
        <Animated.View style={{ transform: [{ scale }] }}>
            <TouchableOpacity
                activeOpacity={1}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                onPress={onPress}
                style={styles.button}
            >
                <Text style={styles.text}>{title || "Vibe Check"}</Text>
            </TouchableOpacity>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#6366f1',
        paddingVertical: 14,
        paddingHorizontal: 28,
        borderRadius: 16,
        borderBottomWidth: 4,
        borderBottomColor: '#4f46e5',
        shadowColor: "#6366f1",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 6,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '800',
        textAlign: 'center',
        letterSpacing: 0.5,
    },
});
