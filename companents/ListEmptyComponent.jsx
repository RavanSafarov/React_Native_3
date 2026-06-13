import { View, Text } from 'react-native';

export default function ListEmptyComponent() {
    return (
        <View style={{
            padding: 20,
            marginTop: 50,
            alignItems: 'center',
        }}>
            <Text>Пусто</Text>
        </View>
    );
}