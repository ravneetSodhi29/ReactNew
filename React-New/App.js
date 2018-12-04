// import React from 'react';
import { Home } from './app/views/Home.js';
import { Contact } from './app/views/Contact.js';
import { createStackNavigator, createAppContainer } from 'react-navigation';
// import { View } from 'react-native';

const MyRoutes = createStackNavigator({
  HomeRT: { screen: Home },
  ContactRT: { screen: Contact }
}, {
    initialRouteName: 'HomeRT'
  });

const App = createAppContainer(MyRoutes);

export default App
//   class App extends React.Component {
//   render() {
//     return (
//       <View>
//         <MyRoutes />
//       </View>
//     );
//   }
// }

