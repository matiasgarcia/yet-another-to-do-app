import { useEffect } from 'react';
import { TodoState } from '../../types/TodoState';
import { storeData } from '../../utils/storage';

export function useStorage(currentState: TodoState): void {
  useEffect(() => {
    storeData(currentState)
  }, [currentState])
}