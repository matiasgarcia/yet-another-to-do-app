import React, { useState, useEffect } from 'react';
import { TodoList } from '../components/TodoList';
import { Text, View } from 'react-native';
import { TodoInput } from '../components/TodoInput';
import { useTodoStore } from './main/useTodoStore';
import { useStorage } from './main/useStorage';
import { retrieveData } from '../utils/storage';
import { TodoState } from '../types/TodoState';

type State = {
  loading: boolean,
  storeData: TodoState | null
}

export function Main(): JSX.Element {
  const [state, setState] = useState<State>({ loading: true, storeData: null })
  const { loading, storeData } = state;

  useEffect(() => {
    retrieveData().then(storageData => {
      setState({ loading: false, storeData: storageData })
    })
  }, [setState, state])

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <TodoListContainer storeData={storeData} />
  )
}

type Props = {
  storeData: TodoState | null
}

function TodoListContainer(props: Props): JSX.Element {
  const { storeData } = props;
  const { state, addTodo, removeTodo } = useTodoStore(storeData);
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