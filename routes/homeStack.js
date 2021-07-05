import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../Screens/Home";
import About from "../Screens/About";
import GameReview from "../Screens/GameReview";
const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Game zone",
      headerStyle: {
        backgroundColor: "#be0",
        height: 80,
      },
    },
  },
  GameReview: {
    screen: GameReview,
    navigationOptions: {
      title: "Game Review",
      headerStyle: {
        backgroundColor: "#be0",
        height: 80,
      },
    },
  },
};
const homeStack = createStackNavigator(screens);
export default createAppContainer(homeStack);
