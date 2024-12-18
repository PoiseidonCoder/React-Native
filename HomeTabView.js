import * as React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';


export function FirstRoute() {
  return (
    <View style={[styles.scene, {backgroundColor: '#ff4081'}]}>
      <Text>First Route</Text>
    </View>
  )
}
export function SecondRoute() {
  return (
    <View style={[styles.scene, {backgroundColor: '#ff4081'}]}>
      <Text>Second Route</Text>
    </View>
  )
}

const initialLayout= {width: Dimensions.get('window').width};


const HomeTabView = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  })
  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    >

    </TabView>
  )
}
export default HomeTabView;
const styles = StyleSheet.create({
  scene: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
