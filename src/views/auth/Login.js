import React, { Component } from "react";
import { View, Image, TouchableHighlight } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { actions } from "@reducers/auth";
// import logo from "@res/images/whiteLogo.png";

const inputs = {
  width: 300,
  height: 50,
  backgroundColor: "white",
  marginTop: 10,
  textAlign: "center",
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", showToast: false };
  }

  static propTypes = {
    isLoggedIn: PropTypes.bool,
    loading: PropTypes.bool,
    error: PropTypes.string,
  };
  static navigationOptions = {
    header: null,
  };

  render() {
    const { username, password } = this.state;
    return (
      <View>
        {/* <Image source={logo} /> */}
        <View>
          <TextInput
            value={username}
            placeholder="Email"
            onChangeText={text => this.setState({ username: text })}
          />
          <TextInput
            value={password}
            placeholder="Password"
            onChangeText={text => this.setState({ password: text })}
            secureTextEntry
          />
        </View>

        <View>
          <Text onPress={() => this.props.navigation.navigate("ForgotPassword")}>
            Forgot password
          </Text>
        </View>

        <Button
          mode="contained"
          onPress={() => {
            this.props.testme();
          }}
        >
          Login
        </Button>

        <View style={{ flexDirection: "row", marginTop: 25 }}>
          <Text>Don't have an account?</Text>
          <TouchableHighlight
            onPress={() => {
              this.props.navigation.navigate("Register");
            }}
          >
            <Text>{"  "}Sign Up</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    user: auth.user,
    loading: auth.loading,
    error: auth.error,
    isLoggedIn: auth.isLoggedIn,
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      submitLoginWithAwsCognito: actions.submitLoginWithAwsCognito,
      testme: actions.testme,
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
