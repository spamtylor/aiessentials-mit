import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Vibe Kit: GlowCard
 * A card component with a deep shadow and accent border for that premium AI-app feel.
 */
export const GlowCard = ({ title, children, subtitle }) => {
    return (
        <View style={styles.card}>
            {title && <Text style={styles.title}>{title}</Text>}
            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
            <View style={styles.content}>{children}</View>
            <View style={styles.glow} />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#1e293b',
        borderRadius: 24,
        padding: 24,
        borderWidth: 1,
        borderColor: '#334155',
        shadowColor: "#6366f1",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 20,
        elevation: 10,
        marginVertical: 10,
        position: 'relative',
        overflow: 'hidden',
    },
    title: {
        fontSize: 18,
        fontWeight: '800',
        color: '#fff',
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 12,
        color: '#94a3b8',
        marginBottom: 16,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    content: {
        zIndex: 2,
    },
    glow: {
        position: 'absolute',
        top: -20,
        right: -20,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#6366f1',
        opacity: 0.1,
        zIndex: 1,
    },
});
