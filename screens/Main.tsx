import React, { useReducer } from 'react';
import { TodoList } from '../components/TodoList';
import { View } from 'react-native';
import { TodoInput } from '../components/TodoInput';
import { useTodoStore } from './main/useTodoStore';

export function Main(): JSX.Element {
  const { state, addTodo, removeTodo } = useTodoStore();

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