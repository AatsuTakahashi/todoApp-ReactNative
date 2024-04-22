import { useState } from 'react';
import {
  Pressable,
  // FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App() {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todoアプリへようこそ</Text>
      <TextInput
        placeholder='タスクを入力'
        style={styles.input}
        onChangeText={setTaskText}
        value={taskText}
      />
      <Pressable style={styles.saveButton} onPress={() => {}}>
        <Text style={styles.saveButtonText}>追加</Text>
      </Pressable>
      {/* <FlatList data={[{ id: 1, title: 'ジム' }]} /> */}
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
});
