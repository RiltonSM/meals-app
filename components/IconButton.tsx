import { Pressable, PressableProps, StyleSheet } from "react-native"
import { Ionicons } from '@expo/vector-icons'

interface IconButtonProps extends PressableProps {
    color: string;
    icon: any;
}

export const IconButton = ({ onPress, color, icon }: IconButtonProps) => {
    return(
        <Pressable onPress={onPress} style={({ pressed }) =>  pressed && styles.pressed}>
            <Ionicons name={icon} size={24} color={color}/>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
})