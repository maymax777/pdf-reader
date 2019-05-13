import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import { fromRight, fromLeft, fromBottom, fromTop } from 'react-navigation-transitions';

import Home from "@views/Home";
import Profile from "@views/Profile";
import Login from "@views/auth/Login";

import PDFReader from "@views/pdf/PDFReader";
import PDFEditor from "@views/pdf/PDFEditor";
import PDFFlipField from "@views/pdf/PDFFlipField";

//////////////////////////////////////////////////////
//. pdf navigator , added by Luter
// @PDFReader
// @PDFEditor
const DELAY_TIME = 700;
const PDFNavigator = createSwitchNavigator(
	{
		PDFReader :{
			screen : PDFReader
		},
		PDFEditor:{
			screen : PDFEditor
		},
		PDFFlipField:{
			screen : PDFFlipField
		},
	},
	{      
      headerMode: 'float',
	  navigationOptions:({navigation}) => ({
	    header: null,
	  }),
      transitionConfig: () => fromBottom(DELAY_TIME),
  	},  	
);
//////////////////////////////////////////////////////

const StartNavigator = createStackNavigator({
  Home: { screen: Home },
  Profile: { screen: Profile },
  Login: { screen: Login },

  PDFNavigatorr :PDFNavigator,// added by Luter
});

export default StartNavigator;
