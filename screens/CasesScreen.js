import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import firebase from "firebase";
import { db } from "../config";

export default class CasesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCitiesLoaded: false,
      cities: []
    };
  }

  componentDidMount() {
    this.loadCases();
  }

  loadCases = () => {
    let cities = [];
    //fetch every document in collection
    db.collection("New York")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          const city = doc.data();
          cities.push(city);
        });
      })
      .then(() => this.setState({ cities, isCitiesLoaded: true }));
  };

  render() {
    console.log("cases ", this.state.cities);
    console.log("loaded ", this.state.isCitiesLoaded);
    if (this.state.isCitiesLoaded) {
      return (
        <View>
          {this.state.cities.length > 0 ? (
            this.state.cities.map(city => {
              return (
                <View>
                  <Text>{`${city.City} : ${city.NumOfCases}`}</Text>
                </View>
              );
            })
          ) : (
            <View>
              <Text>No cases in your area</Text>
            </View>
          )}
        </View>
      );
    } else {
      return (
        <View>
          <Text>LOADING</Text>
        </View>
      );
    }
  }
}
