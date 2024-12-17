export default function App() {
  const [todoText, setTodoText] = useState('');
  const [todoList, setTodoList] = useState([]);
  const textInputChange = (textChanged) => {
    setTodoText(textChanged);
  }
  
  const addTodo = () => {
    setTodoList(currentTodoList => [...currentTodoList, todoText])
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={textInputChange} style={styles.textInput} placeholder="Your todo" />
        <Button onPress={addTodo} title="Add todo " />
      </View>
      <View style={styles.todoList}>
        {
          todoList.map( todo => <Text key={todo}> {todo} </Text> )
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 100,
    flex:1,
  },
  inputContainer:{
    flexDirection:'row',
    marginBottom:50,
    borderBottomWidth:1,
    borderBottomColor:"grey",
    paddingBottom:50,
    flex:1,
    alignItems:'center'
  },
  textInput:{
    borderWidth:2,
    borderColor:'blue',
    padding:8,
    marginRight:8,
    width:'70%',
  },
  todoList:{
    flex:8,
  }
});