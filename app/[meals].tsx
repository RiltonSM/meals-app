import { useLocalSearchParams, useNavigation } from "expo-router"
import { FlatList, ListRenderItemInfo, View } from "react-native"

import { MEALS, CATEGORIES } from "@/data/dummy-data"
import Meal from "@/models/meal"
import { MealItem } from "@/components/MealItem"
import { useLayoutEffect } from "react"

const MealPage = () => {
    const { meals: mealCategoryId } = useLocalSearchParams() 
    const params = useLocalSearchParams();
    const { setOptions }= useNavigation()

    useLayoutEffect(() => {
        setOptions({
            title: CATEGORIES.find((category) => category.id === params.meals)?.title
        })
    }, [])

    const displayedMeals = MEALS.filter((meal) => meal.categoryIds.includes(mealCategoryId)) 
    
    const renderMealItem = (itemData: ListRenderItemInfo<Meal>) => {
        return(
            <MealItem  {...itemData.item}/>
        )
    }

    return(
        <View>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item)=> item.id}
                renderItem={renderMealItem}
            />
        </View>
    )
}

export default MealPage