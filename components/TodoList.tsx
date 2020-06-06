import React from 'react';
import { Text, View } from 'react-native';
import { Todo } from '../types/Todo';

type Props = {
  todoList: Array<Todo>
}

export function TodoList({ todoList }: Props) {
  return (
    <View>
      {
        // TODO: Using index as the key will have problems. Fix this later.
        todoList.map((todo, index) => (
          <Text key={index}>{'\u2B24'} {todo.text}</Text>
        ))
      }
    </View>
  );
}