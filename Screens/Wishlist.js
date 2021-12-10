import React, { useContext } from 'react';
import {View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Card, Text, Button, Icon } from 'react-native-elements';

import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { LibreriaContext } from '../Context/LibreriaContext';

export default function Wishlist() {
  const { wishList, eliminarWishList, agregarCarro } = useContext(LibreriaContext);

  return (
    <View style={styles.container}>
      <Text h1>Wishlist</Text>
      <ScrollView>
        {wishList.length === 0 ? (
          <View>
            <Image
              style={styles.logo}
              source={require('../Imagenes/EmptyWishlist.png')}
            />
            <Text h2>No hay nada en tu Wishlist</Text>
          </View>
        ) : (
          wishList.map((a, i) =>
            <Card containerStyle={{
              backgroundColor: '#fffbbb',
              minWidth: 300,
            }}>
              <Card.Title>{a.titulo}</Card.Title>
              <Text style={{textAlign:'center'}} key={i}>Precio = ${a.precio} </Text>
              <Text style={{textAlign:'center'}} key={i + 10}>Idioma = {a.idioma}</Text>
              <View style={styles.container2} >
                <TouchableHighlight onPress={() => agregarCarro(a)}>
                  <Ionicons name={'cart-outline'} size={22} color={'green'} />
                </TouchableHighlight>
                <TouchableHighlight onPress={() => eliminarWishList(a)}>
                  <Ionicons name={'heart-dislike-outline'} size={22} color={'red'} />
                </TouchableHighlight>
              </View>
            </Card>
          )
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 30,
    backgroundColor:'#fff'
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',

  },
  paragraph: {
    margin: 24,
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 400,
    width: 300,
  },
});
