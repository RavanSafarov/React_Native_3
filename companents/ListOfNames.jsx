import { FlatList, Text, View } from "react-native";
const users = [
  { id: '1', name: 'Alex' },
  { id: '2', name: 'Maria' },
  { id: '3', name: 'John' },
  { id: '4', name: 'Anna' },
  { id: '5', name: 'David' },
];
export default function ListOfNames(){
    return(
        <FlatList data={users} renderItem={({item})=>(
            console.log(users),
            <View>
            <Text>{item.name}</Text>
             </View>
        )} keyExtractor={(item) => item.id}/>
    )
}