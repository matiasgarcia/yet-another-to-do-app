import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { Todo } from '../types/Todo';

interface Props {
  onSubmit: (todoText: string) => void
}

export function TodoInput({ onSubmit }: Props): JSX.Element {
  const [value, onChangeText] = useState('');
  const handlePress = () => onSubmit(value);

  return (
    <View>
      <TextInput
        style={styles.textInput}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
      <Button
        onPress={handlePress}
        title="Add Todo"
        accessibilityLabel="Add Todo"
        disabled={value.length === 0}>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 40, borderColor: 'gray', borderWidth: 1
  }
})