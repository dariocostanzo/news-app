import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LegalScreen from '../screens/LegalScreen';
import NewsScreen from '../screens/NewsScreen';
import ArticleScreen from '../screens/ArticleScreen';
import HomeScreen from '../screens/HomeScreen';

const NewsNavigator = createStackNavigator({
  Home: HomeScreen,
  Legal: LegalScreen,
  News: NewsScreen,
  Article: ArticleScreen
});

export default createAppContainer(NewsNavigator);
