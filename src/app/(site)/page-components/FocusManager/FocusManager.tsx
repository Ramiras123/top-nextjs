'use client';
import React, { useRef } from 'react';

export const FocusManager = ({ children }: { children: JSX.Element }) => {
	const bodyRef = useRef<HTMLDivElement>(null);

	return (
		<>
			{React.Children.map(children, (child) => {
				return React.cloneElement(child, {
					bodyRef
				});
			})}
		</>
	);
};
