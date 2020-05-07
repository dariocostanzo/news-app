import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LegalScreen from '../screens/LegalScreen';
import NewsScreen from '../screens/NewsScreen';
import ArticleScreen from '../screens/ArticleScreen';
import HomeScreen from '../screens/HomeScreen';

const NewsNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  News: {
    screen: NewsScreen
  },
  Article: {
    screen: ArticleScreen
  }
});

const RootStack = createStackNavigator(
  {
    Main: {
      screen: NewsNavigator
    },
    Legal: {
      screen: LegalScreen
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

export default createAppContainer(RootStack);
