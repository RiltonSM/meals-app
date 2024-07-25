import { View, Text, StyleSheet, ViewProps } from 'react-native'

interface MealDetailProps {
    duration: string;
    complexity: string;
    affordability: string;
    textStyle?: any
}

export const MealDetails = ({
    affordability,
    complexity,
    duration,
    textStyle
}: MealDetailProps) => {
    return (
        <View style={styles.details}>
            <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
            <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 8
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    }
})