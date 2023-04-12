import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from '../assets/MediaQuery'

function Slide1({ Active }) {
	const isMobile = useMediaQuery('(max-width: 768px)');
	const aniLine = isMobile
		? {
				init: { width: '0%', height: 1 },
				ani: { width: '100%', height: 1, transition: { duration: 0.5, delay: 0.5 } },
				exit: { width: '0%', height: 1, transition: { duration: 1 } },
		  }
		: {
				init: { height: '0%', wdith: 1 },
				ani: { height: '100%', width: 1, transition: { duration: 0.5, delay: 0.5 } },
				exit: { height: '0%', width: 1, transition: { duration: 1 } },
		  };

	return (
		<AnimatePresence>
			{Active === 0 && (
				<motion.section
					id='slide1'
					initial={{ y: '100%', opacity: 0 }}
					animate={{ y: '0%', opacity: 1, transition: { duration: 1 } }}
					exit={{ y: '-100%', opacity: 0, transition: { duration: 1 } }}
				>
					<article className='left'>
						<motion.h1
							initial={{ scale: 4 }}
							animate={{ scale: 1, transition: { duration: 1 } }}
							exit={{ scale: 4, transition: { duration: 1 } }}
						>
							VOGUE ARCHIVE
						</motion.h1>
						<motion.div
							className='line'
							initial={aniLine.init}
							animate={aniLine.ani}
							exit={aniLine.exit}
						></motion.div>
					</article>

					<article className='right'>
						<div className='top'>
							<motion.h1
								initial={{ opacity: 0, y: '100%' }}
								animate={{ opacity: 1, y: '0%', transition: { duration: 0.5, delay: 1.5 } }}
								exit={{ opacity: 0, y: '100%', transition: { duration: 1 } }}
							>
								Spotlight
							</motion.h1>
							<motion.p
								initial={{ opacity: 0, y: '100%' }}
								animate={{ opacity: 1, y: '0%', transition: { duration: 0.5, delay: 1.7 } }}
								exit={{ opacity: 0, y: '100%', transition: { duration: 1 } }}
							>
								How did Kendall Jenner transcend childhood TV infamy, the paparazzi—even her own famous family—to become the breakout model of her generation? By owning it.
							</motion.p>
							<motion.div
								className='line'
								initial={{ width: '0%' }}
								animate={{ width: '100%', transition: { duration: 0.5, delay: 1 } }}
								exit={{ width: '0%', transition: { duration: 1 } }}
							></motion.div>
						</div>

						<div className='bottom'>
							<motion.div
								className='pic'
								initial={{ x: '-100%', y: '-100%' }}
								animate={{ x: '0%', y: '0%', transition: { duration: 0.5, delay: 1.9 } }}
								exit={{ x: '-100%', y: '-100%', transition: { duration: 1 } }}
							>
								<img src={process.env.PUBLIC_URL + '/img/main.jpg'} alt='pic1' />
							</motion.div>
						</div>
					</article>
				</motion.section>
			)}
		</AnimatePresence>
	);
}

export default Slide1;