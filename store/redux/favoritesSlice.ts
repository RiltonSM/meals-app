import AsyncStorage from '@react-native-async-storage/async-storage'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

interface FavoritesState {
    value: Array<string>
}
const initialState: FavoritesState = {
    value: []
}

export const getStoredFavorites = createAsyncThunk(
    'favorites/getStored',
    async () => {
        const initialFavorited = JSON.parse(await AsyncStorage.getItem('favorites') || '[]')
        return initialFavorited
    }
)

export const addFavorite = createAsyncThunk(
    'favorites/add',
    async (mealId: string, thunkAPI) => {
        const state = thunkAPI.getState() as RootState
        await AsyncStorage.setItem('favorites', JSON.stringify([...state.favorites.value, mealId]))
        return mealId
    }
)

export const removeFavorite = createAsyncThunk(
    'favorites/remove',
    async (mealId: string, thunkAPI) => {
        const state = thunkAPI.getState() as RootState
        const newFavoriteList = state.favorites.value.filter(favoriteId => favoriteId !== mealId )
            
        await AsyncStorage.setItem('favorites', JSON.stringify(newFavoriteList))
        return mealId
    }
)

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getStoredFavorites.fulfilled, (state, action) => {
            state.value = action.payload
        }),
        builder.addCase(addFavorite.fulfilled, (state, action) => {
            state.value = [...state.value, action.payload]
        }),
        builder.addCase(removeFavorite.fulfilled, (state, action) => {
            const newFavoriteList = state.value.filter(favoriteId => favoriteId !== action.payload )
            state.value = newFavoriteList
        })
    }
})

export default favoritesSlice.reducer