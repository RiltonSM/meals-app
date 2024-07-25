import { FlatList, ListRenderItemInfo } from 'react-native';
import { CATEGORIES } from '@/data/dummy-data'
import Category from '@/models/category';
import { CategoryGridTile } from '@/components/CategoryGridTile';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getStoredFavorites } from '@/store/redux/favoritesSlice';
import { AppDispatch } from '@/store/redux/store';

const renderCategoryItem = (itemData: ListRenderItemInfo<Category>) => {
    return <CategoryGridTile id={itemData.item.id} title={itemData.item.title} color={itemData.item.color}/>
}

const Home = () => {
    const dispatch = useDispatch<AppDispatch>()
    
    useEffect(() => {
        dispatch(getStoredFavorites())
    }, []);
    return (
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item) => item.id} 
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    )
}

export default Home;