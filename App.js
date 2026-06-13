import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, Text, View,  Pressable } from 'react-native';
import ProfileCard from './companents/ProfileCard';
import ListEmptyComponent from './companents/ListEmptyComponent';
import ItemSeparatorComponent from './companents/ItemSeparatorComponent';
import ListHeaderComponent from './companents/ListHeaderComponent';
import { useState } from 'react';
const users = [
  { id: '1', avatar:'https://i.pravatar.cc/150?img=1', name: 'Alex', role: 'Frontend' },
  { id: '2', avatar:'https://i.pravatar.cc/150?img=2', name: 'Maria', role: 'Backend' },
  { id: '3', avatar:'https://i.pravatar.cc/150?img=3', name: 'John', role: 'Designer' },
  { id: '4', avatar:'https://i.pravatar.cc/150?img=4', name: 'Anna' , role: 'Programer'  },
  { id: '5', avatar:'https://i.pravatar.cc/150?img=5', name: 'David', role: 'Programer' },
];
export default function App() {
  const [selectId,setselectId] = useState(null)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Task1,4:</Text>
      <FlatList data={users}  renderItem={({item})=>(
        console.log(users),
        <ProfileCard id={item.id} avatar={item.avatar} name={item.name} role={item.role} selectId={selectId} onPres={()=> setselectId(item.id)}/>
        )} keyExtractor={(item) => item.id}/>
      <Text style={styles.text}>Task2,3,4:</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <ProfileCard id={item.id} avatar={item.avatar} name={item.name} role={item.role} selectId={selectId} onPres={()=> setselectId(item.id)}/>
        )}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={ListEmptyComponent}
        ItemSeparatorComponent={ItemSeparatorComponent}
        ListHeaderComponent={ListHeaderComponent}
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 50,
    marginBottom: 20
  }
});
