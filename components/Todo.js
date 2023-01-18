import React, {useState} from 'react';
import {View, Text, TextInput, Pressable, StyleSheet} from 'react-native';

export function Button({isEditing, onPress, title}) {
  return (
    <Pressable style={styles.btn} onPress={onPress}>
      <Text style={styles.btnText}>
        {title ? title : isEditing ? 'DISABLE EDITING' : 'ENABLE EDITING'}
      </Text>
    </Pressable>
  );
}

export function Input({value, onChangeText}) {
  return (
    <View>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.inputContainer}
      />
    </View>
  );
}

function Todo() {
  const [todo, setTodo] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const [secondTodo, setSecondTodo] = useState('');
  const [isSecondEditing, setIsSecondEditing] = useState(false);

  const handleOnchange = text => {
    setTodo(text);
  };

  const secondHandleOnchange = text => {
    setSecondTodo(text);
  };
  return (
    <View style={styles.container}>
      <Text>TODO LIST APP</Text>
      <View>
        {isEditing && (
          <Input
            value={todo}
            onChangeText={text => {
              handleOnchange(text);
            }}
            style={styles.inputContainer}
          />
        )}
        <Text style={styles.todoText}>Typed value: {todo}</Text>
        <Button
          onPress={() => setIsEditing(!isEditing)}
          isEditing={isEditing}
        />
      </View>

      <View style={styles.secondContainer}>
        {isSecondEditing && (
          <Input
            value={secondTodo}
            onChangeText={text => {
              secondHandleOnchange(text);
            }}
            style={styles.inputContainer}
          />
        )}
        <Text style={styles.todoText}>Typed value: {secondTodo}</Text>
        <Button
          onPress={() => setIsSecondEditing(!isSecondEditing)}
          isEditing={isSecondEditing}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
  inputContainer: {
    height: 30,
    borderRadius: 10,
    borderColor: '#c4c4c4',
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#f5f5f5',
    paddingLeft: 10,
  },
  todoText: {
    paddingLeft: 10,
    marginTop: 15,
  },

  btn: {
    borderRadius: 10,
    backgroundColor: '#1087d8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    marginBottom: 20,
  },
  btnText: {
    color: '#ffff',
    fontWeight: '500',
  },
  secondContainer: {
    marginTop: 60,
  },
});

export default Todo;
