type MenuItemProps = {
  block: boolean;
  title: string;
  href: string;
};

export const MenuItem: React.FC<MenuItemProps> = (props) => {
  const classNames = props.block ? 'block' : '';

  return (
    <a
      href={props.href}
      className={`text-white rounded-md px-3 py-2 text-base font-medium ${classNames}`}
      aria-current="page"
    >
      {props.title}
    </a>
  );
};
