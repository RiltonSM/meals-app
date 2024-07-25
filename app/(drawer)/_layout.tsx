import { Drawer } from 'expo-router/drawer'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'


export default function DrawerLayout () {
    return(
        <GestureHandlerRootView>
            <Drawer screenOptions={{
                headerShown: true, 
                headerStyle: {
                    backgroundColor: '#351401',
                },
                headerTintColor: 'white',
                sceneContainerStyle: {
                    backgroundColor: '#3f2f25'
                },
                drawerContentStyle: {
                    backgroundColor: '#3f2f25',
                },
                drawerActiveTintColor: '#3f2f25',
                drawerInactiveTintColor: '#e4baa1',
                drawerActiveBackgroundColor: '#e4baa1'
            }}>
                <Drawer.Screen 
                    name='index' 
                    options={{ 
                        title: 'All categories',
                        drawerIcon: ({color, size}) => <Ionicons name='list' size={size} color={color}/>
                    }}

                />
                <Drawer.Screen 
                    name='favorites'
                    options={{
                        title: 'Favorites',
                        drawerIcon: ({color, size}) => <Ionicons name='star' size={size} color={color}/>
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    )
}