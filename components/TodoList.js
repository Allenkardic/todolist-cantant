import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import Todo, {Button, Input} from './Todo';

function TodoCard({text, onPress}) {
  return (
    <View style={styles.cardContainer}>
      <Text>{text}</Text>
      <Pressable onPress={onPress} style={styles.cardBtn}>
        <Text style={{color: 'white'}}>delete</Text>
      </Pressable>
    </View>
  );
}

function TodoList() {
  const [isEditing, setIsEditing] = useState(false);
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleOnchange = text => {
    setTodo(text);
  };

  const handleAddTodo = () => {
    if (todo.length < 5) {
      Alert.alert('You must ented todo to continue');
    } else {
      setTodoList([...todoList, {todo: todo, id: todoList.length}]);
      setTodo('');
    }
  };

  const handleDeleteTodo = item => {
    const updatedData = todoList.filter(el => el.id != item.id);

    setTodoList(updatedData);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Todo />

        <View style={styles.spacingTop}>
          {isEditing && (
            <Input
              value={todo}
              onChangeText={text => {
                handleOnchange(text);
              }}
            />
          )}

          <View style={styles.spacingTop}>
            <Button
              title={isEditing ? 'DISABLE EDITING' : 'ENABLE EDITING'}
              onPress={() => setIsEditing(!isEditing)}
            />
          </View>
          {isEditing && <Button title={'ADD TODO'} onPress={handleAddTodo} />}

          <Text style={styles.header}>List of todos</Text>
          {todoList.map((item, index) => (
            <TodoCard
              key={index}
              text={item.todo}
              onPress={() => handleDeleteTodo(item)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  spacingTop: {
    paddingTop: 40,
  },
  spacingBottom: {
    marginTop: 40,
  },
  textContainer: {
    paddingVertical: 10,
  },
  header: {
    fontWeight: '500',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    height: 40,
    backgroundColor: '#eef7fe',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  cardBtn: {
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 10,
    height: 25,
    backgroundColor: 'red',
    paddingHorizontal: 20,
  },
});

export default TodoList;
