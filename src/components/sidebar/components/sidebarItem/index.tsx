interface ISibarItemProps {
  label: string;
}

const SidebarItem: React.FC<ISibarItemProps> = (props) => {
  const { label } = props;
  const render = () => {
    return "render"
  }
  return <div>{label} {render()}</div>;
};
export default SidebarItem;

interface ISibarItemProps {
  label: string;
}