import React from 'react';
import { TodoList } from '../components/TodoList';
import { View } from 'react-native';
import { TodoInput } from '../components/TodoInput';
import { useTodoStore } from './main/useTodoStore';
import { useStorage } from './main/useStorage';

export function Main(): JSX.Element {
  const { state, addTodo, removeTodo } = useTodoStore();
  useStorage(state);

  return (
    <View>
      <TodoInput onSubmit={(text) => addTodo(text)} />
      <TodoList
        todoList={state.todos}
        onRemove={removeTodo}
      />
    </View>
  );
}