import React from 'react';
import { Pressable, StyleSheet, Text, TextInput } from 'react-native';

const TaskInput: React.FC<taskInputProps> = ({
  setTaskText,
  taskText,
  handleSaveTask,
  isEditing,
}) => {
  return (
    <>
      <TextInput
        placeholder='タスクを入力'
        style={styles.input}
        onChangeText={setTaskText}
        value={taskText}
      />
      <Pressable
        style={styles.saveButton}
        onPress={() => {
          handleSaveTask();
        }}
      >
        <Text style={styles.saveButtonText}>{isEditing ? '編集' : '追加'}</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccceee',
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
  },
  saveButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  saveButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default TaskInput;
