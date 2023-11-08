'use client';
import {
	DetailedHTMLProps,
	HTMLAttributes,
	KeyboardEvent,
	ReactNode,
	useRef,
	useState
} from 'react';
import styles from './Skiplink.module.css';
import classNames from 'classnames';

interface SkipLinkProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
}

export const SkipLink = ({ children, className, ...props }: SkipLinkProps) => {
	const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] =
		useState<boolean>(false);

	const bodyRef = useRef<HTMLDivElement>(null);

	const skipContentAction = (key: KeyboardEvent) => {
		if (key.code === 'Space' || key.code === 'Enter') {
			key.preventDefault();
			bodyRef.current?.focus();
		}
		setIsSkipLinkDisplayed(false);
	};

	return (
		<div {...props}>
			<a
				tabIndex={1}
				onFocus={() => setIsSkipLinkDisplayed(true)}
				className={classNames(styles['skip_link'], {
					[styles['display']]: isSkipLinkDisplayed
				})}
				onKeyDown={skipContentAction}
			>
				Сразу к содержанию
			</a>
			<div className={className} tabIndex={0} ref={bodyRef}>
				{children}
			</div>
		</div>
	);
};
