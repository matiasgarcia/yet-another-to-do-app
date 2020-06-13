import { useReducer } from 'react';
import { Todo } from '../../types/Todo';
import { TodoState } from '../../types/TodoState';

const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

interface AddTodoAction {
  type: typeof ADD_TODO,
  payload: {
    todoText: string
  }
}

interface RemoveTodoAction {
  type: typeof REMOVE_TODO,
  payload: {
    todoUuid: string
  }
}

type TodoAction = AddTodoAction | RemoveTodoAction;

function generateUuid(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function createTodo(text: string): Todo {
  return {
    text,
    uuid: generateUuid()
  }
}

const initialState: TodoState = {
  todos: [
    createTodo('Init Expo'),
    createTodo('Init Git Repository'),
    createTodo('List fixed TODOs'),
    createTodo('Add TODOs'),
    createTodo('Remove TODOs'),
    createTodo('Persist in storage'),
    createTodo('Beautify UI')
  ]
}

function reducer(state: TodoState, action: TodoAction): TodoState {
  switch (action.type) {
    case ADD_TODO: {
      const { todoText } = action.payload;
      return {
        ...state,
        todos: [
          ...state.todos,
          createTodo(todoText)
        ]
      }
    }
    case REMOVE_TODO: {
      const { todoUuid } = action.payload;
      return {
        ...state,
        todos: state.todos.filter((todo: Todo) => todo.uuid !== todoUuid)
      }
    }
    default:
      throw new Error('unknown action');
  }
}

interface useTodo {
  state: TodoState,
  addTodo: (todoText: string) => void,
  removeTodo: (todoUuid: string) => void
}

export function useTodoStore(preloadedState: object | null): useTodo {
  const [state, dispatch] = useReducer(reducer, preloadedState || initialState);

  const addTodo = (todoText: string) => {
    dispatch({ type: ADD_TODO, payload: { todoText } })
  }

  const removeTodo = (todoUuid: string) => {
    dispatch({ type: REMOVE_TODO, payload: { todoUuid } })
  }

  return {
    state,
    addTodo,
    removeTodo
  }
}