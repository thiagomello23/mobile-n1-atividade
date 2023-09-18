import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function Home({route}: {route: any}) {

  const [data, setData] = useState()

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setData(res.data))
  }, [])

  return (
    <View style={styles.container}>
      {data ? (
        <>
          <Text style={styles.userTitle}>Bem vindo(a) {route.params.email}</Text>
          <FlatList 
            style={styles.flatContainer}
            data={data}
            renderItem={({item}) => (
              <View style={styles.itemContainer}>
                <Text style={styles.labelText}>Nome: <Text style={{fontWeight: '400'}}>{item.name}</Text></Text>
                <Text style={styles.labelText}>Nickname: <Text style={{fontWeight: '400'}}>{item.username}</Text></Text>
                <Text style={styles.labelText}>Email: <Text style={{fontWeight: '400'}}>{item.email}</Text></Text>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </>
      ): (
        <ActivityIndicator size={40} color={'#fff'} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: '#495057',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemContainer: {
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 8
  },
  labelText: {
    fontWeight: '600',
    fontSize: 18
  },
  flatContainer: {
    gap: 12,
     width: '80%', 
     marginRight: 'auto', 
     marginLeft: 'auto'
  },
  userTitle: {
    fontSize: 20,
    paddingBottom: 10, 
    fontWeight: '700',
    color: '#fff'
  }
})