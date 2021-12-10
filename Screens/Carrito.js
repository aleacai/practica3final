import React, { useContext } from 'react';
import {View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Card, Text, Button, Icon } from 'react-native-elements';

import { FontAwesome } from '@expo/vector-icons';

import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { LibreriaContext } from '../Context/LibreriaContext';

export default function Wishlist() {
  const { carrito, total, eliminarCarrito, comprarCarrito, eliminarCarro } = useContext(LibreriaContext);

  return (
    <View style={styles.container22}>   
    <Text h1>Carrito</Text>   
        {
        carrito.length === 0 
        ? 
          <View >
            <Image
              style={styles.logo}
              source={require('../Imagenes/Emptycarrito.png')}
            />
            <Text style={styles.paragraph}>No hay nada en tu carrito</Text>
          </View>
        :
          <ScrollView>
          <View>
            <Text style={styles.paragraph}>Total: $ {total}</Text>
            <View style={styles.container2}>
            <FontAwesome.Button name="cc-mastercard" backgroundColor="black" onPress={()=>comprarCarrito()}>
              Pagar con Mastercard
            </FontAwesome.Button>
            <Text style={styles.paragraph}>____________________</Text>
            <FontAwesome.Button name="remove" backgroundColor="#c33d3c" onPress={()=>eliminarCarrito()}>
              Vaciar carrito
            </FontAwesome.Button>
          </View>
        </View>
          {
            carrito.map((a,i)=>
            <Card containerStyle={{
              backgroundColor: '#fffbbb',
              minWidth: 300}}>
            <Card.Title>{a.titulo}</Card.Title>
            <Text style={{textAlign:'center'}} key={i}>Cantidad = {a.cantidad} </Text>
            <Text style={{textAlign:'center'}} key={i}>Precio = $ {a.precio} c/u </Text>
            <Text style={{textAlign:'center'}} key={i}>Importe = $ {a.importe}  </Text>
            <View style={styles.container}>
              <TouchableHighlight onPress={() => eliminarCarro(a)}>
                <Ionicons name={'remove-circle'} size={22} color={'red'} />
              </TouchableHighlight>
            </View>
            </Card>)
          }
           </ScrollView>      
        }      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 24,
    flexDirection: 'row',
  },
  container22: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#fff',
    paddingTop: 30,

  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paragraph: {
    margin: 24,
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 200,
    width: 225,
    margin: 50,
  },
});
