module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@components": "Certul/src/components",
          "@navigators": "Certul/src/navigators",
          "@reducers": "Certul/src/reducers",
          "@res": "Certul/src/res",
          "@sagas": "Certul/src/sagas",
          "@services": "Certul/src/services",
          "@themes": "Certul/src/themes",
          "@views": "Certul/src/views",
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ["react-native-paper/babel"],
    },
  },
};
