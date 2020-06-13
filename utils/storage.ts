import { AsyncStorage } from 'react-native';
import { TodoState } from '../types/TodoState';

const KEY_PREFIX = '@YET_ANOTHER_TO_DO_APP';

const buildKey = (key: string): string => `${KEY_PREFIX}:${key}`;
function todoStateKey(): string {
  return buildKey('TODO_STATE');
}

export const storeData = async (value: object) => {
  await AsyncStorage.setItem(todoStateKey(), JSON.stringify(value))
}

export const retrieveData = async (): Promise<TodoState | null> => {
  const result = await AsyncStorage.getItem(todoStateKey());
  if (result === null) {
    return null;
  }
  return JSON.parse(result);
}