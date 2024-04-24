//cSpell:ignore
import { useState } from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';

export default function App() {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState<{ id: string; text: string }[]>([]);

  const handleSaveTask = () => {
    const newTask = { id: Date.now().toString(), text: taskText };
    setTasks([...tasks, newTask]);
  };

  const renderTask = ({ item }: { item: Task }) => {
    return (
      <View style={styles.task}>
        <Text style={styles.taskText}>{item.text}</Text>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.editButton}>
            <Icon name='edit' color='#4caf50'>
              編集
            </Icon>
          </Pressable>
          <Pressable style={styles.deleteButton}>
            <Icon name='削除' color='f44336'>
              削除
            </Icon>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todoアプリへようこそ</Text>
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
        <Text style={styles.saveButtonText}>追加</Text>
      </Pressable>
      <FlatList data={tasks} renderItem={renderTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
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
  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#eeeeee',
    borderRadius: 5,
  },
  taskText: {
    maxWidth: '80%',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});
