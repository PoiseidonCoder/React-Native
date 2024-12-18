import {FlatList, View, Text} from "react-native"

const data = [
              {id: 1, title: 'First Item1'},     
              {id: 2, title: 'First Item2'},     
              {id: 3, title: 'First Item3'},     
              {id: 4, title: 'First Item4'},     
              {id: 5, title: 'First Item5'},     
            ]
  const renderItem= ({item}) => (
    <View style = {{padding: 20,marginTop: 50, backgroundColor: 'pink'}}>
      <Text>{item.title}</Text>
    </View>
  )

export default function DetailList() {
  return (
    <View>
      return (
        <FlatList 
          data={data}
          renderItem={renderItem}
        >

        </FlatList>
      )
    </View>
  )
}
