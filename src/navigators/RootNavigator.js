import { createAppContainer, createSwitchNavigator } from "react-navigation";

import StartNavigator from "@navigators/StartNavigator";

export default createAppContainer(
  createSwitchNavigator({
    Start: StartNavigator,
  })
);
