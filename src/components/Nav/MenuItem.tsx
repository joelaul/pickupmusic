import { NAV_MENU_SELECTED_BACKGROUND_COLOR_CLASS_NAMES } from '@/components/Nav/constants';

type MenuItemProps = {
  block: boolean;
  title: string;
  href: string;
};

export const MenuItem: React.FC<MenuItemProps> = (props) => {
  const classNames = new Array<string>();

  if (props.block) {
    classNames.push('block');
  }

  const url = new URL(location.href);
  if (url.pathname === props.href) {
    classNames.push(NAV_MENU_SELECTED_BACKGROUND_COLOR_CLASS_NAMES);
  }

  const className = classNames.join(' ');

  return (
    <a
      href={props.href}
      className={`${className} text-white rounded-md px-3 py-2 text-base font-medium`}
      aria-current="page"
    >
      {props.title}
    </a>
  );
};
