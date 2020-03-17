import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import albumData from "../src/json/albums";


const albumData = () => {
  return (
    <ScrollView style={styles.page}>
    <View style={styles.headerStyle}>
      <Text style={styles.textStyle}>Albums</Text>
    </View>
    <View style={styles.cardContainerStyle}>
      <View style={styles.thumbnailContainerStyle}>
        <Image
          style={styles.thumbnailStyle}
          source={{
            uri: albumData[0].thumbnail_image
          }}
        />
        <View style={styles.headerContentStyle}>
          <Text style={styles.textStyle1}>{albumData[0].artist}</Text>
          <Text style={styles.textStyle2}>{albumData[0].title}</Text>
        </View>
      </View>
      <View style={styles.cardSectionStyle}>
        <Image
          style={styles.imageStyle}
          source={{
            uri:albumData[0].image
          }}
        />
      </View>
    </View>
    <View style={styles.cardContainerStyle}>
      <View style={styles.thumbnailContainerStyle}>
        <Image
          style={styles.thumbnailStyle}
          source={{
            uri: albumData[1].thumbnail_image
          }}
        />
        <View style={styles.headerContentStyle}>
          <Text style={styles.textStyle1}>{albumData[1].artist}</Text>
          <Text style={styles.textStyle2}>{albumData[1].title}</Text>
        </View>
      </View>
      <View style={styles.cardSectionStyle}>
        <Image
          style={styles.imageStyle}
          source={{
            uri:albumData[1].image
          }}
        />
      </View>
    </View>
    <View style={styles.cardContainerStyle}>
      <View style={styles.thumbnailContainerStyle}>
        <Image
          style={styles.thumbnailStyle}
          source={{
            uri: albumData[2].thumbnail_image
          }}
        />
        <View style={styles.headerContentStyle1}>
          <Text style={styles.textStyle1}>{albumData[2].artist}</Text>
          <Text style={styles.textStyle3}>{albumData[2].title}</Text>
        </View>
      </View>
      <View style={styles.cardSectionStyle}>
        <Image
          style={styles.imageStyle}
          source={{
            uri:albumData[2].image
          }}
        />
      </View>
    </View>
    <View style={styles.cardContainerStyle}>
      <View style={styles.thumbnailContainerStyle}>
        <Image
          style={styles.thumbnailStyle}
          source={{
            uri: albumData[3].thumbnail_image
          }}
        />
        <View style={styles.headerContentStyle2}>
          <Text style={styles.textStyle1}>{albumData[3].artist}</Text>
          <Text style={styles.textStyle2}>{albumData[3].title}</Text>
        </View>
      </View>
      <View style={styles.cardSectionStyle}>
        <Image
          style={styles.imageStyle}
          source={{
            uri:albumData[3].image
          }}
        />
      </View>
    </View>
    <View style={styles.cardContainerStyle}>
      <View style={styles.thumbnailContainerStyle}>
        <Image
          style={styles.thumbnailStyle}
          source={{
            uri: albumData[4].thumbnail_image
          }}
        />
        <View style={styles.headerContentStyle2}>
          <Text style={styles.textStyle1}>{albumData[4].artist}</Text>
          <Text style={styles.textStyle2}>{albumData[4].title}</Text>
        </View>
      </View>
      <View style={styles.cardSectionStyle}>
        <Image
          style={styles.imageStyle}
          source={{
            uri:albumData[4].image
          }}
        />
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  page:{
    backgroundColor:"#8DABC2"
  },
  textStyle: {
    fontSize: 20,
    color:"#16425B",
    fontWeight: "bold"
  },
  textStyle1:{
    fontSize: 17,
    color:"#406478",
    fontWeight: "bold"
  },
  textStyle2:{
    fontSize: 17,
    color:"#406478",
    fontWeight: "bold",
    marginTop:-18
  },
  textStyle3:{
    fontSize: 15,
    color:"#406478",
    fontWeight: "bold",
    marginTop:-15
  },
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor:"#9EA19C"
  },
  thumbnailStyle: {
    height: 60,
    width: 60,
    margin: 5
  },
  headerContentStyle: {
    backgroundColor:"#D9DCD6",
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 15,
    paddingRight: 203
  },
  headerContentStyle1: {
    backgroundColor:"#D9DCD6",
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 15,
    paddingRight: 149
  },
  headerContentStyle2: {
    backgroundColor:"#D9DCD6",
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 15,
    paddingRight: 220
  },
  cardContainerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#4B87AD",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15
  },
  cardSectionStyle: {
    paddingTop: 15,
    paddingBottom: 15,
    padding: 7,
    backgroundColor: "#EAEBE8",
    borderColor: "#ddd",
    borderBottomWidth: 0
  },
  imageStyle: {
    height: 380,
    width: null
  }
  });
  
  export default albumData;