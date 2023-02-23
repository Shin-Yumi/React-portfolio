import { forwardRef, useImperativeHandle, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = forwardRef((props, ref) => {
	const [Open, setOpen] = useState(false);

	useImperativeHandle(ref, () => {
		return { open: () => setOpen(true) };
	});

	useEffect(() => {
		Open ? (document.body.style.overFlow = 'hidden') : (document.body.style.overFlow = 'auto');
	}, [Open]);

	return (
		<AnimatePresence>
			{Open && (
				<motion.aside
					className='modal'
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
					exit={{ opacity: 0, transition: { duration: 0.6 } }}
				>
					<div className='con'>{props.children}</div>
					<span className='close' onClick={() => setOpen(false)}>
						Close
					</span>
				</motion.aside>
			)}
		</AnimatePresence>
	);
});

export default Modal;
