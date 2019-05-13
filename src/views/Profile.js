import React from "react";
import { Button, View } from "react-native";

class Profile extends React.Component {
  static navigationOptions = {
    title: "ProfileX",
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button title="Go to Home screen" onPress={() => this.props.navigation.navigate("Home")} />
      </View>
    );
  }
}

export default Profile;
