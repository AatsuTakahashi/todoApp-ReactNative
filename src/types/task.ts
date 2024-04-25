interface taskItemProps {
  item: {
    id: string;
    text: string;
  };
  handleEdit: (item: { id: string; text: string }) => void;
  handleDelete: (id: string) => void;
}

interface taskInputProps {
  setTaskText: (text: string) => void;
  taskText: string;
  handleSaveTask: () => void;
  isEditing: string | null;
}
