import { Todo } from "../../types";

type Props = Todo & {
  handleChecked: (params: string) => void;
  handleDelete: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    params: string
  ) => void;
};

export default function TodoItem(props: Props) {
  const { id, isDone, title, handleChecked, handleDelete } = props;

  return (
    <div
      className="flex w-[200px] my-2 mx-auto cursor-pointer"
      onClick={() => handleChecked(id)}
    >
      <input type="checkbox" checked={isDone} />
      <p className="mx-3">{title}</p>
      <button onClick={(e) => handleDelete(e, id)}>X</button>
    </div>
  );
}
