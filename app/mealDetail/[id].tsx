import { IconButton } from "@/components/IconButton"
import { List } from "@/components/MealDetail/List"
import { SubTitle } from "@/components/MealDetail/SubTitle"
import { MealDetails } from "@/components/MealsDetails"
import { MEALS } from "@/data/dummy-data"
import { FavoritesContext } from "@/store/context/favorites-context"
import { addFavorite, removeFavorite } from "@/store/redux/favoritesSlice"
import { AppDispatch, RootState } from "@/store/redux/store"
import { useLocalSearchParams, useNavigation } from "expo-router"
import { useContext, useEffect, useState } from "react"
import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"

export default function MealDetail () {
    const { id: mealId } = useLocalSearchParams()
    const [isFavorited, setIsFavorited] = useState(false);
    const meal = MEALS.find(meal => meal.id === mealId)

    const ids = useSelector((state: RootState) => state.favorites)
    const dispatch = useDispatch<AppDispatch>()

    // const { addFavorite, ids, removeFavorite} = useContext(FavoritesContext)

    const { setOptions } = useNavigation()

    const headerButtonPressHandler = () => {
        const isAlreadyFavorited = ids.value.includes(mealId as string)

        if(isAlreadyFavorited){
        //     removeFavorite(mealId as string)
            dispatch(removeFavorite(mealId as string))
            return;
        } 

        // addFavorite(mealId as string)
        dispatch(addFavorite(mealId as string))
    }

    useEffect(() => {
        setIsFavorited(() => {
            return ids.value.includes(mealId as string)
        })
    }, [ids])

    useEffect(() => {
        setOptions({
            title: meal?.title || 'Meal Detail',
            headerRight: () => {
                return(
                    isFavorited ? 
                    <IconButton icon="star" color="white" onPress={headerButtonPressHandler}/> : 
                    <IconButton icon="star-outline" color="white" onPress={headerButtonPressHandler}/>
                )
            }
        })    
    }, [setOptions, headerButtonPressHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image source={{ uri: meal?.imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{meal?.title}</Text>
            <MealDetails affordability={meal?.affordability} complexity={meal?.complexity} duration={meal?.duration} textStyle={styles.details}/>
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <SubTitle>Ingredients</SubTitle>
                    <List data={meal?.ingredients}/>
                    <SubTitle>Steps</SubTitle>
                    <List data={meal?.steps}/>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    details: {
        color: 'white'
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    listOuterContainer: {
       alignItems: 'center' 
    },
    listContainer: {
       width: '80%' 
    }
    
})