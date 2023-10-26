import { getMenu } from '@/API/menu.api';
import Menu from '../Menu/Menu';
import { SidebarProps } from './Sidebar.props';
import { TopLevelCategory } from '@/interfaces/page.interface';
//import styles from './Sidebar.module.css';


export const Sidebar = async ({ ...props }: SidebarProps) => {
	const menu = await getMenu(TopLevelCategory.Curses);
	return (
		<>
			<Menu
				firstCategory={TopLevelCategory.Curses}
				menuItem={menu}
				{...props}
			></Menu>
		</>
	);
};
