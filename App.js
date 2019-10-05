import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator} from 'react-navigation-stack';
import { fadeIn } from 'react-navigation-transitions';

import Menu from './screens/Menu';
import Specials  from './screens/Specials ';
import Register from './screens/Register';


const AuthNavigator = createSwitchNavigator(
  {
    Register: Register
  },
  {
    initialRouteName: 'Register'
  }
);

const HomeNavigator = createBottomTabNavigator( // bottom tab
  
  {
    Specials: { screen: Specials }, //links to page
    Menu: { screen: Menu },
    
  },
  {

    initialRouteName: 'Menu',
    order: ['Menu', 'Specials'] // order
    
    
  }
  
)

export default createAppContainer( 
  createStackNavigator(
    {
      App: HomeNavigator,
      Auth: AuthNavigator
    },
    {
      initialRouteName: 'Auth', // looks at auth nav = register
      transitionConfig: () => fadeIn(), // fade in transiition 
      
    }
  )
);