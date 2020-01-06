import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn';

import Checkins from './pages/Checkins';
import HelpOrders from './pages/HelpOrders';

import NewHelpOrder from './pages/NewHelpOrder';
import HelpOrderDetails from './pages/HelpOrderDetails';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
        }),
        App: createBottomTabNavigator(
          {
            Checkins,
            Help: {
              screen: createSwitchNavigator({
                HelpOrders,
                Details: {
                  screen: createStackNavigator(
                    {
                      HelpOrderDetails,
                    },
                    {
                      defaultNavigationOptions: {
                        headerTransparent: true,
                        headerTintColor: '#FFF',
                        headerLeftContainerStyle: {
                          marginLeft: 20,
                        },
                      },
                    }
                  ),
                  navigationOptions: {
                    tabBarVisible: false,
                    tabBarLabel: 'Agendar',
                    tabBarIcon: (
                      <Icon
                        name="add-circle-outline"
                        size={20}
                        color="rgba(255, 255, 255, 0.6)"
                      />
                    ),
                  },
                },
                New: {
                  screen: createStackNavigator(
                    {
                      NewHelpOrder,
                    },
                    {
                      defaultNavigationOptions: {
                        headerTransparent: true,
                        headerTintColor: '#FFF',
                        headerLeftContainerStyle: {
                          marginLeft: 20,
                        },
                      },
                    }
                  ),
                  navigationOptions: {
                    tabBarVisible: false,
                    tabBarLabel: 'Agendar',
                    tabBarIcon: (
                      <Icon
                        name="add-circle-outline"
                        size={20}
                        color="rgba(255, 255, 255, 0.6)"
                      />
                    ),
                  },
                },
              }),
              navigationOptions: {
                tabBarLabel: 'Pedir ajuda',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="live-help" size={20} color={tintColor} />
                ),
              },
            },
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#ee4e62',
              inactiveTintColor: '#999',
              style: {
                backgroundColor: '#fff',
              },
            },
          }
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      }
    )
  );
