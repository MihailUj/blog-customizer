import { useEffect } from 'react';

type TUseClose = {
	isOpen: boolean;
	onClose: () => void;
	rootRef: React.RefObject<HTMLElement>;
};

export function useClose({ isOpen, onClose, rootRef }: TUseClose) {
	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			const { target } = event;
			console.log(event.target);
			console.log(rootRef.current);
			if (
				isOpen &&
				rootRef.current &&
				!rootRef.current.contains(target as Node)
			) {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener('mousedown', handleClick);
		} else {
			document.removeEventListener('mousedown', handleClick);
		}

		return () => document.removeEventListener('mousedown', handleClick);
	}, [isOpen, onClose, rootRef]);
}
