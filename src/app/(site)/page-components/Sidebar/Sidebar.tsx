import { getMenu } from '@/API/menu.api';
import Menu from '../Menu/Menu';
import { SidebarProps } from './Sidebar.props';
import { TopLevelCategory } from '@/interfaces/page.interface';
import styles from './Sidebar.module.css';
import Logo from '../../logo.svg';
import cn from 'classnames';
import { Search } from '@/components';

export const Sidebar = async ({ className, ...props }: SidebarProps) => {

	const menu = await getMenu(TopLevelCategory.Curses);
	return (
		<div {...props} className={cn(className, styles['sidebar'])}>
			<Logo className={styles['logo']} />
			<Search />
			<Menu firstCategory={TopLevelCategory.Curses} menuItem={menu}></Menu>
		</div>
	);
};
