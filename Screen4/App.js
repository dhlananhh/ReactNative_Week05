import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { ScrollView } from "react-native-web";
import AntDesign from '@expo/vector-icons/AntDesign';


const Screen4 = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('./assets/images/vsmart_red.png')}
        style={styles.productImage}
      />
      <Text style={styles.productName}>
        Điện thoại Vsmart Joy 3 - Hàng chính hãng
      </Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>
          ★★★★★
        </Text>
        <Text style={styles.ratingCount}>
          (Xem 828 đánh giá)
        </Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>
          1.790.000 ₫
        </Text>
        <Text style={styles.discountedPrice}>
          1.790.000 ₫
        </Text>
      </View>
      <Text style={styles.promotion}>
        Ở ĐÂU RẺ HƠN HOÀN TIỀN
      </Text>
      <TouchableOpacity style={styles.colorButton}>
        <View style={styles.colorButtonContent}>
          <Text style={styles.colorButtonText}>
            4 MÀU - CHỌN MÀU
          </Text>
          <AntDesign name="right" size={20} color="black" style={styles.arrow} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonText}>
          CHỌN MUA
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignSelf: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  rating: {
    color: 'gold'
  },
  ratingCount: {
    marginLeft: 4,
    color: 'gray'
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red'
  },
  discountedPrice: {
    fontSize: 18,
    color: 'gray',
    textDecorationLine: 'line-through',
    marginLeft: 8
  },
  promotion: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#f00',
    marginVertical: 8
  },
  colorButton: {
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 4,
    marginTop: 8,
  },
  colorButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  colorButtonText: {
    textAlign: 'center'
  },
  arrow: {
    marginLeft: 8,
  },
  buyButton: {
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 4,
    marginTop: 8,
  },
  buyButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  
});


export default Screen4;