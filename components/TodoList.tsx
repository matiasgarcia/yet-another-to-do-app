import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Todo } from '../types/Todo';

type Props = {
  todoList: Array<Todo>
  onRemove: (todoUuid: string) => void
}

export function TodoList({ todoList, onRemove }: Props) {
  return (
    <View>
      {
        todoList.map((todo) => (
          <View style={style.container}>
            <Text key={todo.uuid}>
              {'\u2B24'} {todo.text}
            </Text>
            <Text>{' '}</Text>
            <Text onPress={() => onRemove(todo.uuid)}>
              {'\u274C'}
            </Text>
          </View>
        ))
      }
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
})