import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";


const App = () => {
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
            uri: "https://bella.pixfs.net/files/1(40).jpg"
          }}
        />
        <View style={styles.headerContentStyle}>
          <Text style={styles.textStyle1}>Eric Chou</Text>
          <Text style={styles.textStyle2}>小時候的我們</Text>
        </View>
      </View>
      <View style={styles.cardSectionStyle}>
        <Image
          style={styles.imageStyle}
          source={{
            uri:
              "https://i.kfs.io/album/global/67722838,0v1/fit/500x500.jpg"
          }}
        />
      </View>
    </View>
    <View style={styles.cardContainerStyle}>
      <View style={styles.thumbnailContainerStyle}>
        <Image
          style={styles.thumbnailStyle}
          source={{
            uri: "https://bella.pixfs.net/files/1(40).jpg"
          }}
        />
        <View style={styles.headerContentStyle}>
          <Text style={styles.textStyle1}>Eric Chou</Text>
          <Text style={styles.textStyle2}>終於了解自由</Text>
        </View>
      </View>
      <View style={styles.cardSectionStyle}>
        <Image
          style={styles.imageStyle}
          source={{
            uri:
              "https://i.kfs.io/album/global/45771662,1v1/fit/500x500.jpg"
          }}
        />
      </View>
    </View>
    <View style={styles.cardContainerStyle}>
      <View style={styles.thumbnailContainerStyle}>
        <Image
          style={styles.thumbnailStyle}
          source={{
            uri: "https://bella.pixfs.net/files/1(40).jpg"
          }}
        />
        <View style={styles.headerContentStyle1}>
          <Text style={styles.textStyle1}>Eric Chou</Text>
          <Text style={styles.textStyle3}>Something about LA</Text>
        </View>
      </View>
      <View style={styles.cardSectionStyle}>
        <Image
          style={styles.imageStyle}
          source={{
            uri:
              "https://i.kfs.io/album/global/60325573,0v1/fit/500x500.jpg"
          }}
        />
      </View>
    </View>
    <View style={styles.cardContainerStyle}>
      <View style={styles.thumbnailContainerStyle}>
        <Image
          style={styles.thumbnailStyle}
          source={{
            uri: "https://bella.pixfs.net/files/1(40).jpg"
          }}
        />
        <View style={styles.headerContentStyle2}>
          <Text style={styles.textStyle1}>Eric Chou</Text>
          <Text style={styles.textStyle2}>如果雨之後</Text>
        </View>
      </View>
      <View style={styles.cardSectionStyle}>
        <Image
          style={styles.imageStyle}
          source={{
            uri:
              "https://i.kfs.io/album/global/30791798,1v1/fit/500x500.jpg"
          }}
        />
      </View>
    </View>
    <View style={styles.cardContainerStyle}>
      <View style={styles.thumbnailContainerStyle}>
        <Image
          style={styles.thumbnailStyle}
          source={{
            uri: "https://bella.pixfs.net/files/1(40).jpg"
          }}
        />
        <View style={styles.headerContentStyle2}>
          <Text style={styles.textStyle1}>Eric Chou</Text>
          <Text style={styles.textStyle2}>你，好不好</Text>
        </View>
      </View>
      <View style={styles.cardSectionStyle}>
        <Image
          style={styles.imageStyle}
          source={{
            uri:
              "https://i.kfs.io/album/global/17250268,1v1/fit/500x500.jpg"
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
  headerStyle: {
    backgroundColor: "#81C3D7",
    justifyContent: "center",
    alignItems: "center",
    height: 90,
    paddingTop: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // Android Only
    elevation: 2
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

export default App;