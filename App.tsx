import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import TaskItem from './src/components/taskItem';
import TaskInput from './src/components/taskInput';

export default function App() {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState<{ id: string; text: string }[]>([]);
  const [isEditing, setIsEditing] = useState(null);

  const handleSaveTask = () => {
    if (!taskText.trim()) return;
    if (isEditing) {
      setTasks(
        tasks.map((task) =>
          task.id === isEditing ? { ...task, text: taskText } : task
        )
      );
      setIsEditing(null);
    } else {
      const newTask = { id: Date.now().toString(), text: taskText };
      setTasks([...tasks, newTask]);
    }

    setTaskText('');
  };

  const handleEdit = (item: any) => {
    setTaskText(item.text);
    setIsEditing(item.id);
  };

  const handleDelete = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));

    setTaskText('');
  };

  const renderTask = ({ item }: { item: Task }) => {
    return (
      <TaskItem
        item={item}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todoアプリ</Text>
      <TaskInput
        setTaskText={setTaskText}
        taskText={taskText}
        handleSaveTask={handleSaveTask}
        isEditing={isEditing}
      />
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
});
