/* Custom Button */
import React from "react";
import { Button } from "react-native-paper";

const buttonAction = props => {
  const obj = Object.keys(props);
  const filter = obj.filter(k => {
    return (
      // k === "mode" ||
      // k === "dark" ||
      k === "compact" ||
      k === "color" ||
      k === "loading" ||
      k === "icon" ||
      k === "disabled" ||
      k === "uppercase" ||
      k === "accessibilityLabel" ||
      k === "onPress" ||
      k === "contentStyle" ||
      k === "style" ||
      k === "theme"
    );
  });
  const forwardProps = filter.reduce((res, key) => ((res[key] = props[key]), res), {});

  return (
    <Button mode="contained" dark={true} {...forwardProps}>
      {props.children}
    </Button>
  );
};

export default buttonAction;
