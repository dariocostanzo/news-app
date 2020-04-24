import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import NewsScreen from '../screens/NewsScreen';
import ArticleScreen from '../screens/ArticleScreen';

const NewsNavigator = createStackNavigator({
  News: NewsScreen,
  Article: ArticleScreen
});

export default createAppContainer(NewsNavigator);
