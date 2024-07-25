import { MealItem } from "@/components/MealItem";
import { MEALS } from "@/data/dummy-data";
import Meal from "@/models/meal";
import { FavoritesContext } from "@/store/context/favorites-context";
import { RootState } from "@/store/redux/store";
import { useContext, useEffect, useState } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";

export default function FavoritesPage() {
    const [favorites, setFavorites] = useState<Array<Meal>>([]);
    // const { ids } = useContext(FavoritesContext)
    const ids = useSelector((state: RootState) => state.favorites)

    useEffect(() => {
        const favoriteList = MEALS.filter(meal => ids.value.includes(meal.id))
        setFavorites(favoriteList)
    }, [ids])

    if(ids.value.length === 0) {
        return (
            <View style={styles.textContainer}>
                <Text style={styles.text}>You have no favorites yet</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={favorites}
                renderItem={(dataItem) => <MealItem {...dataItem.item}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})