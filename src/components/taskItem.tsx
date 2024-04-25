import { Pressable, Text, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const TaskItem: React.FC<taskItemProps> = ({
  item,
  handleEdit,
  handleDelete,
}) => {
  return (
    <View style={styles.task}>
      <Text style={styles.taskText}>{item.text}</Text>
      <View style={styles.buttonContainer}>
        <Pressable>
          <Icon name='edit' color='#4caf50' onPress={() => handleEdit(item)}>
            編集
          </Icon>
        </Pressable>
        <Pressable onPress={() => handleDelete(item.id)}>
          <Icon name='delete' color='#f44336'>
            削除
          </Icon>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default TaskItem;
