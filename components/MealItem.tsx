import Meal from "@/models/meal"
import { router } from "expo-router"
import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native"
import { MealDetails } from "./MealsDetails"

interface MealItemProps extends Meal {
    
}

export const MealItem = ({ title, imageUrl, duration, affordability, complexity, id  }: MealItemProps) => {
    const handleOnClick = () => {
        router.push(`/mealDetail/${id}`)
    }

    return(
        <View style={styles.mealItem}>
            <Pressable 
                android_ripple={{ color: '#ccc'}} 
                style={({ pressed }) => pressed ? styles.buttonPressed : null}
                onPress={handleOnClick}
            >
                <View style={styles.innerContainer}>
                    <Image source={{uri: imageUrl}} style={styles.image}/>
                    <Text style={styles.title}>{title}</Text>
                </View>

                <MealDetails
                    affordability={affordability}
                    complexity={complexity}
                    duration={duration}
                />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 16,
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
})