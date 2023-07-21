import img1 from './../../assets/img1.jpg';
import img2 from './../../assets/img2.jpg';
import img3 from './../../assets/img3.png';
import img4 from './../../assets/img4.jpg';
import img5 from './../../assets/img5.png';

const Banner = () => {
	return (
		<div className='container text-white text-center font-poppins flex gap-x-2'>
			<div className='w-[47.063rem]'>
				{/* Research Image */}
				<div className='group h-[26.145rem] rounded-lg overflow-hidden relative cursor-pointer'>
					<img src={img1} alt='' />
					<div className='small-shadow'></div>
					<div className='large-shadow pt-52 translate-y-[10.125rem]'>
						<h1 className='text-3xl font-bubblegum mb-2'>
							Research Appetite
						</h1>
						<p>
							Research requires students to think critically about
							a topic, to evaluate different sources of
							information, and to form their own conclusions. This
							can help students to become better thinkers and
							problem-solvers.
						</p>
					</div>
				</div>
				{/* Experiment Image */}
				<div className='w-[47.063rem] mt-2 flex justify-between gap-x-2'>
					<div className='group w-[21.563rem] rounded-lg relative overflow-hidden cursor-pointer'>
						<img className=' object-cover' src={img4} alt='' />
						<div className='small-shadow'></div>
						<div className='large-shadow pt-44 translate-y-[7.5rem]'>
							<h1 className='text-3xl font-bubblegum mb-2'>
								Lab Boy
							</h1>
							<p>
								With Lab kits, turn your children into A Lab Boy
								and enlighten him.
							</p>
						</div>
					</div>
					{/* Math Image */}
					<div className='group w-[25rem] rounded-lg relative overflow-hidden cursor-pointer'>
						<img
							className='h-full object-cover'
							src={img2}
							alt=''
						/>
						<div className='small-shadow'></div>
						<div className='large-shadow pt-44 translate-y-[7.5rem]'>
							<h1 className='text-3xl font-bubblegum mb-2'>
								Math Genius
							</h1>
							<p>
								Understand the concepts better and remember them
								more easily in a hands-on way with Math toys.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='w-[calc(100%-47.063rem)]'>
				{/* Physics Wizard */}
				<div className='group bg-secondary rounded-lg relative overflow-hidden cursor-pointer'>
					<img
						className='h-[20.6rem] w-full object-cover'
						src={img5}
						alt=''
					/>
					<div className='small-shadow'></div>
					<div className='large-shadow pt-40 translate-y-[7.5rem]'>
						<h1 className='text-3xl font-bubblegum mb-2'>
							Physics Wizard
						</h1>
						<p>
							Understand the concepts better, remember them more
							easily, become a Physics Wizard.
						</p>
					</div>
				</div>
				{/* Girl Image */}
				<div className='group mt-2 rounded-lg relative overflow-hidden cursor-pointer'>
					<img
						className='w-full h-[27.3rem] object-cover'
						src={img3}
						alt=''
					/>
					<div className='small-shadow'></div>
					<div className='large-shadow pt-72 translate-y-[6.2rem]'>
						<h1 className='text-3xl font-bubblegum mb-2'>
							Physics Wizard
						</h1>
						<p>
							Understand the concepts better, remember them more
							easily, become a Physics Wizard.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
