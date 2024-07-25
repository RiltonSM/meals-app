import { createContext, ReactNode, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavoritesContext = createContext({
    ids: [] as Array<string>,
    addFavorite: (id: string) => {},
    removeFavorite:(id: string) => {}
})

interface FavoritesContextProviderProps {
    children: ReactNode
} 

function FavoritesContextProvider({ children }: FavoritesContextProviderProps){
    const [favorites, setFavorites] = useState<Array<string>>([]);

    useEffect(() => {
        const getStoredFavorites = async () => {
            const storedValue = JSON.parse (await AsyncStorage.getItem('favorites') || '[]')

            setFavorites(storedValue)
        }

        getStoredFavorites()
    }, [])

    const addFavorite = async (id: string) => {
        try {
            await AsyncStorage.setItem('favorites', JSON.stringify([...favorites, id]))
            setFavorites([...favorites, id])
        } catch (error) {
            console.log(error)
        }
    }

    const removeFavorite = async (id: string) => {
        const newFavoriteList = favorites.filter(mealId => mealId !== id)
        
        setFavorites(newFavoriteList)
        try {
            await AsyncStorage.setItem('favorites', JSON.stringify(newFavoriteList))
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <FavoritesContext.Provider value={{
            ids: favorites,
            addFavorite,
            removeFavorite
        }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContextProvider