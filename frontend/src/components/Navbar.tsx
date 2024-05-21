
import reddit from '@/assets/reddit.svg';
function Navbar() {
	return (
		<nav className='w-full p-3 bg-background border-b border-gray-800'>
			<div className='flex justify-between'>
				<div className='text-3xl font-bold  text-foreground  flex  items-center gap-x-2 bg-red-900'>
					<img src={reddit} alt='logo' className='w-8 h-8' />{' '}
					<h1 className='tracking wide'>reddit </h1>
				</div>
				<div className='bg-blue-900'>1</div>

				<div className='bg-green-900'>2</div>
			</div>
		</nav>
	);
}

export default Navbar;
