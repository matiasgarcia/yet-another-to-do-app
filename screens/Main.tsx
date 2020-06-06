import React, { useReducer } from 'react';
import { TodoList } from '../components/TodoList';
import { Todo } from '../types/Todo';
import { View } from 'react-native';
import { TodoInput } from '../components/TodoInput';

export const ADD_TODO = 'ADD_TODO';

type State = {
  todos: Array<Todo>
}

interface AddTodoAction {
  type: typeof ADD_TODO,
  payload: {
    todoText: string
  }
}

const initialState: State = {
  todos: [
    { text: 'Init Expo' },
    { text: 'Init Git Repository' },
    { text: 'List fixed TODOs' },
    { text: 'Add TODOs' },
    { text: 'Remove TODOs' },
    { text: 'Persist in storage' },
    { text: 'Beautify UI' }
  ]
}

function reducer(state: State, action: AddTodoAction): State {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.payload.todoText
          }
        ]
      }
    default:
      throw new Error('unknown action');
  }
}

export function Main(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = (todoText: string) => {
    dispatch({ type: ADD_TODO, payload: { todoText } })
  }

  return (
    <View>
      <TodoInput onSubmit={(text) => addTodo(text)} />
      <TodoList todoList={state.todos} />
    </View>
  );
}