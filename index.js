import React from "react";
import { AppRegistry } from "react-native";
import { Provider as StoreProvider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import { name as appName } from "./app.json";
import store from "./store/configStore";
import RootNavigator from "./src/navigators/RootNavigator";
import NavigationService from "./src/navigators/NavigationService";
import "./src/i18n/i18nConfig"; // TODO: Add lazy loading for i18Next
import theme from "./configs/theme/theme";

const RNRedux = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <RootNavigator ref={navRef => NavigationService.setTopLevelNavigator(navRef)} />
      </PaperProvider>
    </StoreProvider>
  );
};

AppRegistry.registerComponent(appName, () => RNRedux);
