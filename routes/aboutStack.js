import { createStackNavigator } from "react-navigation-stack";
import About from "../Screens/About";
const screens = {
  Home: {
    screen: About,
    navigationOptions: {
      title: "About Game  Review",
      headerStyle: {
        backgroundColor: "#be0",
        height: 80,
      },
    },
  },
};
const aboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#be0",
    },
  },
});
export default aboutStack;
