import { AsyncStorage } from 'react-native';

const KEY_PREFIX = '@YET_ANOTHER_TO_DO_APP';

const buildKey = (key: string): string => `${KEY_PREFIX}:${key}`;
function todoStateKey(): string {
  return buildKey('TODO_STATE');
}

const storeData = async (value: object) => {
  await AsyncStorage.setItem(todoStateKey(), JSON.stringify(value))
}

const retrieveData = async (): Promise<object | null> => {
  const result = await AsyncStorage.getItem(todoStateKey());
  if (result === null) {
    return null;
  }
  return JSON.parse(result);
}
