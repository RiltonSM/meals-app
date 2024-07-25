import { ReactNode } from "react"
import { View, Text, StyleSheet } from "react-native"

interface SubTitleProps {
    children: ReactNode
}

export const SubTitle = ({ children }: SubTitleProps) => {
    return (
        <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    subTitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subTitleContainer: {
        marginVertical: 4,
        marginHorizontal: 12,
        padding: 6,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2
    }
})