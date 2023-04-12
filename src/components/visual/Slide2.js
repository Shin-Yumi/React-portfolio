import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from '../assets/MediaQuery'

function Slide2({ Active }) {
	const isMobile = useMediaQuery('(max-width: 768px)');
	//바뀌어야 되는 부분만 객체로 분기처리
	const aniLine = isMobile
		? {
				init: { width: '0%', height: 1 },
				ani: { width: '100%', height: 1 },
				exit: { width: '0%', height: 1 },
		  }
		: {
				init: { height: '0%', wdith: 1 },
				ani: { height: '100%', width: 1 },
				exit: { height: '0%', width: 1 },
		  };

	return (
		<AnimatePresence>
			{Active === 1 && (
				<motion.section
					id='slide2'
					initial={{ x: '100%', opacity: 0 }}
					animate={{ x: '0%', opacity: 1, transition: { duration: 1 } }}
					exit={{ x: '-100%', opacity: 0, transition: { duration: 1 } }}
				>
					<article className='top'>
						<motion.div
							className='pic'
							initial={{ y: '200%', scale: 2, opacity: 0 }}
							animate={{ y: '0%', scale: 1, opacity: 1, transition: { duration: 1, delay: 1.7 } }}
							exit={{ y: '200%', scale: 2, opacity: 0, transition: { duration: 2 } }}
						>
							<img src={process.env.PUBLIC_URL + '/img/dummy-gallery02.jpg'} alt='pic2' />
						</motion.div>
						<motion.div
							className='line'
							initial={{ width: '0%' }}
							animate={{ width: '100%', transition: { duration: 1, delay: 0.5 } }}
							exit={{ width: '0%', transition: { duration: 2 } }}
						></motion.div>
					</article>

					<article className='bottom'>
						<div>
							<motion.h1
								initial={{ y: '-100%', opacity: 0 }}
								animate={{ y: '0%', opacity: 1, transition: { duration: 0.5, delay: 1.7 } }}
								exit={{ y: '-100%', opacity: 0, transition: { duration: 2 } }}
							>
								Typography 01
							</motion.h1>

							<motion.p
								initial={{ y: '-100%', opacity: 0 }}
								animate={{ y: '0%', opacity: 1, transition: { duration: 0.5, delay: 1.9 } }}
								exit={{ y: '-100%', opacity: 0, transition: { duration: 2 } }}
							>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam tempore laborum
								doloribus! Eaque, quam facilis!
							</motion.p>

							<motion.div
								className='line'
								initial={aniLine.init}
								//transition부분까지 변경하면 너무 반복작업이 많아지므로 바뀌는 부분만 객체로 설정해서 전개연산자로 객체 합침
								animate={{ ...aniLine.ani, transition: { duration: 0.5, delay: 1.5 } }}
								exit={{ ...aniLine.exit, transition: { duration: 2 } }}
							></motion.div>
						</div>

						<div>
							<motion.h1
								initial={{ y: '-100%', opacity: 0 }}
								animate={{ y: '0%', opacity: 1, transition: { duration: 0.5, delay: 2.1 } }}
								exit={{ y: '-100%', opacity: 0, transitino: { duration: 2 } }}
							>
								Typography 02
							</motion.h1>
							<motion.p
								initial={{ y: '-100%', opacity: 0 }}
								animate={{ y: '0%', opacity: 1, transition: { duration: 0.5, delay: 2.2 } }}
								exit={{ y: '-100%', opacity: 0, transitino: { duration: 2 } }}
							>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam tempore laborum
								doloribus! Eaque, quam facilis!
							</motion.p>
							<motion.div
								className='line'
								initial={aniLine.init}
								animate={{ ...aniLine.ani, transition: { duration: 0.5, delay: 1.7 } }}
								exit={{ ...aniLine.exit, transitino: { duration: 2 } }}
							></motion.div>
						</div>

						<div>
							<motion.h1
								initial={{ y: '-100%', opacity: 0 }}
								animate={{ y: '0%', opacity: 1, transition: { duration: 0.5, delay: 2.4 } }}
								exit={{ y: '-100%', opacity: 0, transitino: { duration: 2 } }}
							>
								Typography 03
							</motion.h1>
							<motion.p
								initial={{ y: '-100%', opacity: 0 }}
								animate={{ y: '0%', opacity: 1, transition: { duration: 0.5, delay: 2.6 } }}
								exit={{ y: '-100%', opacity: 0, transitino: { duration: 2 } }}
							>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam tempore laborum
								doloribus! Eaque, quam facilis!
							</motion.p>
						</div>
					</article>
				</motion.section>
			)}
		</AnimatePresence>
	);
}

export default Slide2;