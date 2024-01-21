import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

const ToDoList = ({ titles }) => {
  const [todos, setToDos] = useState(titles.map((value) => ({ id: uuidv4(), title: value })));

  const addTodo = newTitle => {
    setToDos(prevToDos => [...prevToDos, { id: uuidv4(), title: newTitle }]);
  };

  const removeToDo = id => {
    setToDos(prevToDos => prevToDos.filter(toDo => toDo.id !== id));
  };

  return (
    <View style={styles.todoListContainer}>
      {todos.map(toDo => (
        <View key={toDo.id} style={styles.toDoItem}>
          <Text>{toDo.title}</Text>
          <Button title="Remove" onPress={() => removeToDo(toDo.id)} />
        </View>
      ))}
      <AddTask onAddTask={addTodo} />
    </View>
  );
};

Counter.defaultProps = {
  titles: [],
};

const styles = StyleSheet.create({
    todoListContainer: {
      margin: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
});

export default ToDoList;