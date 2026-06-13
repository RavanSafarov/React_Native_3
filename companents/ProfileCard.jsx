import {StyleSheet,Image,Text, View, Pressable } from "react-native";
export default function ProfileCard({id,avatar,name,role,selectId,onPres}){
    return(
    console.log(id,selectId,onPres),
    <Pressable onPress={onPres}>
    <View style={[styles.card,selectId === id && styles.selectedCard]}>
    <Image source={{ uri: avatar }} style={styles.avatar} />
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.role}>{role}</Text>
    </View>
    </Pressable>           
              
    )
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 15,
    margin: 30,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
    gap: 50
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  role: {
    color: 'gray',
  },
  selectedCard: {
    backgroundColor: '#d4edda',
    borderColor: 'green',
    borderWidth: 2,
  },
});