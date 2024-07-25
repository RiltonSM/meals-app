import FavoritesContextProvider from '@/store/context/favorites-context';
import { getStoredFavorites } from '@/store/redux/favoritesSlice';
import { store } from '@/store/redux/store';
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';

const Layout = () => {
    return (
        <Provider store={store}>
            <FavoritesContextProvider>
                <Stack screenOptions={{
                    headerShown: true, 
                    headerStyle: {
                        backgroundColor: '#351401',
                    },
                    headerTintColor: 'white',
                    contentStyle: {
                        backgroundColor: '#3f2f25'
                    },
                    statusBarStyle: 'light'
                }}>
                    <Stack.Screen
                        name='(drawer)'
                        options={{
                            headerShown: false
                        }}
                    />

                    <Stack.Screen 
                        name='[meals]' 
                    />
                </Stack>
            </FavoritesContextProvider>
        </Provider>
    )
}

export default Layout