import { motion, AnimatePresence } from 'framer-motion';

function Slide3({ Active }) {
	return (
		<AnimatePresence>
			{Active === 2 && (
				<motion.section
					id='slide3'
					initial={{ y: '100%', opacity: 0 }}
					animate={{ y: '0%', opacity: 1, transition: { duration: 1 } }}
					exit={{ y: '-100%', opacity: 0, transition: { duration: 1 } }}
				>
					<article className='left'>
						<motion.h1
							initial={{ x: '200%', opacity: 0 }}
							animate={{ x: '0%', opacity: 1, transition: { duration: 1, delay: 2.3 } }}
							exit={{ x: '-100%', opacity: 0, transition: { duration: 1 } }}
						>
							FASHION
						</motion.h1>
						<ul>
							<li>
								<motion.h2
									initial={{ y: '60%', opacity: 0 }}
									animate={{ y: '0%', opacity: 1, transition: { duration: 0.5, delay: 2 } }}
									exit={{ y: '60%', opacity: 0, transition: { duration: 1 } }}
								>
									The Penelope Tree
								</motion.h2>
								<motion.div
									className='line'
									initial={{ width: '0%' }}
									animate={{ width: '100%', transition: { duration: 1, delay: 1.5 } }}
									exit={{ width: '0%', transition: { duration: 1 } }}
								></motion.div>
							</li>
							<li>
								<motion.h2
									initial={{ y: '60%', opacity: 0 }}
									animate={{ y: '0%', opacity: 1, transition: { duration: 0.5, delay: 2.1 } }}
									exit={{ y: '60%', opacity: 0, transition: { duration: 1 } }}
								>
									A Choice of Past
								</motion.h2>
								<motion.div
									className='line'
									initial={{ width: '0%' }}
									animate={{ width: '100%', transition: { duration: 1, delay: 1.6 } }}
									exit={{ width: '0%', transition: { duration: 1 } }}
								></motion.div>
							</li>
							<li>
								<motion.h2
									initial={{ y: '60%', opacity: 0 }}
									animate={{ y: '0%', opacity: 1, transition: { duration: 0.5, delay: 2.2 } }}
									exit={{ y: '60%', opacity: 0, transition: { duration: 1 } }}
								>
									Balconies in Lisbon
								</motion.h2>
								<motion.div
									className='line'
									initial={{ width: '0%' }}
									animate={{ width: '100%', transition: { duration: 1, delay: 1.7 } }}
									exit={{ width: '0%', transition: { duration: 1 } }}
								></motion.div>
							</li>
							<li>
								<motion.h2
									initial={{ y: '60%', opacity: 0 }}
									animate={{ y: '0%', opacity: 1, transition: { duration: 0.5, delay: 2.3 } }}
									exit={{ y: '60%', opacity: 0, transition: { duration: 1 } }}
								>
									The Sound of Makeup
								</motion.h2>
								<motion.div
									className='line'
									initial={{ width: '0%' }}
									animate={{ width: '100%', transition: { duration: 1, delay: 1.8 } }}
									exit={{ width: '0%', transition: { duration: 1 } }}
								></motion.div>
							</li>
							<li>
								<motion.h2
									initial={{ y: '60%', opacity: 0 }}
									animate={{ y: '0%', opacity: 1, transition: { duration: 0.5, delay: 2.4 } }}
									exit={{ y: '60%', opacity: 0, transition: { duration: 1 } }}
								>
									American Fashion we Love
								</motion.h2>
								<motion.div
									className='line'
									initial={{ width: '0%' }}
									animate={{ width: '100%', transition: { duration: 1, delay: 1.9 } }}
									exit={{ width: '0%', transition: { duration: 1 } }}
								></motion.div>
							</li>
						</ul>
					</article>

					<article className='right'>
						<motion.h1
							initial={{ y: '-200%', scale: 4, opacity: 0 }}
							animate={{ y: '0%', scale: 1, opacity: 1, transition: { duration: 1, delay: 2 } }}
							exit={{ y: '-200%', scale: 4, opacity: 0, transition: { duration: 1 } }}
						>
							VINTAGE VOGUE
						</motion.h1>
						<motion.div
							className='line'
							initial={{ height: '0%' }}
							animate={{ height: '100%', transition: { duration: 1, delay: 0.7 } }}
							exit={{ height: '0%' }}
						></motion.div>
					</article>
				</motion.section>
			)}
		</AnimatePresence>
	);
}

export default Slide3;