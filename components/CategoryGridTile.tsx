import { router } from 'expo-router';
import { View, Pressable, StyleSheet, Text, Platform } from 'react-native'

interface CategoryGridTileProps {
    id: string;
    title: string;
    color: string;
}

export const CategoryGridTile = ({ color, title, id }: CategoryGridTileProps) => {
    const redirectToTheSpecificPage = () => {
        router.push(`${id}`)
    }
    return(
        <View style={[styles.gridItem, {backgroundColor: color}]}>
            <Pressable onPress={redirectToTheSpecificPage} android_ripple={{ color: '#ccc'}} style={({pressed}) => [styles.button, pressed && Platform.OS === 'ios' ? styles.buttonPressed : null]}>
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    }
})