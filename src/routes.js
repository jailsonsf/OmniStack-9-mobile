import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './components/Login';
import List from './components/List';
import Book from './components/Book';


const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        List,
        Book,
    })
);

export default Routes;