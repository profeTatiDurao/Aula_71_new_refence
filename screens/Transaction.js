import React, { Component } from "react";
import { 
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Text,
    ImageBackground,
    Image
} from "react-native";
import { db } from "../config";
import { collection, doc, setDoc, getDoc } from "firebase/firestore"; 



const bgImage = require("../assets/background2.png");
const appIcon = require("../assets/appIcon.png");
const appName = require("../assets/appName.png");

export default class TransactionScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          bookId: "",
          studentId: "",
        };
      }

    handleTransaction = async() => {

        var { bookId } = this.state;
        const docRef = doc(db, "books", bookId);
        const docSnap = await getDoc(docRef);
        console.log(docSnap.data())
        var dadosDoLivro = docSnap.data()
       
        
        if (dadosDoLivro.is_book_available) {    
            this.initiateBookIssue();   
        } else {
            this.initiateBookReturn();
        }
          
    };
    initiateBookIssue = () => {
        alert("Livro entregue para o aluno!");
    };
      
    initiateBookReturn = () => {
        alert("Livro devolvido à biblioteca!");
    };

  render() {
    const { bookId, studentId } = this.state;
    return (
        <View style={styles.container}>
        <ImageBackground source={bgImage} style={styles.bgImage}>
          <View style={styles.upperContainer}>
            <Image source={appIcon} style={styles.appIcon} />
            <Image source={appName} style={styles.appName} />
          </View>
          <View style={styles.lowerContainer}>
            <View style={styles.textinputContainer}>
              <TextInput
                style={styles.textinput}
                placeholder={"ID do Livro"}
                placeholderTextColor={"#FFFFFF"}
                onChangeText={(text)=>{this.setState({bookId: text})}}
                value={bookId}
              />
              <View
                style={styles.scanbutton}
              >
                <Text style={styles.scanbuttonText}>Livro</Text>
              </View>
            </View>
            <View style={[styles.textinputContainer, { marginTop: 25 }]}>
              <TextInput
                style={styles.textinput}
                placeholder={"ID do Estudante"}
                placeholderTextColor={"#FFFFFF"}
                onChangeText={(text)=>{this.setState({studentId: text})}}
                value={studentId}
              />
              <View
                style={styles.scanbutton}
              >
                <Text style={styles.scanbuttonText}>Aluno</Text>
              </View>
            </View>
            <TouchableOpacity
                style={[styles.button, {marginTop: 20}]}
                onPress={this.handleTransaction}
          >
              <Text style={styles.buttonText}>Buscar</Text>
          </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#5653D4"
    },
    text: {
      color: "#ffff",
      fontSize: 15
    },
    button: {
      width: "43%",
      height: 55,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F48D20",
      borderRadius: 15
    },
    buttonText: {
      fontSize: 15,
      color: "#FFFFFF"
    },
    bgImage: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    upperContainer: {
      flex: 0.5,
      justifyContent: "center",
      alignItems: "center"
    },
  appIcon: {
      width: 200,
      height: 200,
      resizeMode: "contain",
      marginTop: 20
    },
  appName: {
      width: 180,
      resizeMode: "contain"
    },
    lowerContainer: {
      flex: 0.5,
      alignItems: "center"
    },
  textinputContainer: {
      borderWidth: 2,
      borderRadius: 10,
      flexDirection: "row",
      backgroundColor: "#9DFD24",
      borderColor: "#FFFFFF"
    },
  textinput: {
      width: "57%",
      height: 50,
      padding: 10,
      borderColor: "#FFFFFF",
      borderRadius: 10,
      borderWidth: 3,
      fontSize: 18,
      backgroundColor: "#5653D4",
      fontFamily: "Rajdhani_600SemiBold",
      color: "#FFFFFF"
    },
    scanbutton: {
      width: 100,
      height: 50,
      backgroundColor: "#9DFD24",
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      justifyContent: "center",
      alignItems: "center"
    },
  scanbuttonText: {
      fontSize: 20,
      color: "#0A0101",
      fontFamily: "Rajdhani_600SemiBold"
    }
  });