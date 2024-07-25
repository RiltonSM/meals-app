import { StyleSheet, Text, View } from 'react-native'

interface ListProps {
    data: Array<string>
}

export const List = ({ data }: ListProps) => {
    return (
        data.map((dataPoint: string) => {
            return (
                <View key={dataPoint} style={styles.listItem}>
                    <Text style={styles.itemText}>{dataPoint}</Text>
                </View>
            )
        })
    )
}

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#e2b497'
    },
    itemText: {
        color: '#351401',
        textAlign: 'center'
    }
})

