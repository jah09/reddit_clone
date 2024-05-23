import reddit from "@/assets/reddit.svg";
import { Input } from '@/components/ui/input';

import mouse from "@/assets/mouse.svg";
import message from "@/assets/message.svg";

function Navbar() {
  return (
		<nav className='w-full py-1 px-2 bg-background border-b border-gray-800   '>
			<div className='flex justify-between'>
				<div className='text-3xl font-bold  text-foreground  flex  items-center gap-x-2 justify-start '>
					<img src={reddit} alt='logo' className='w-8 h-8' />{' '}
					<h1 className='tracking wide'>reddit </h1>
				</div>
				<div className='justify-center flex  '>
					<Input
						className='rounded-full px-4  text-foreground focus:outline-none min-w-[500px]'
						type='text'
						placeholder='Search Reddit'
					/>{' '}
				</div>

				<div className='bg-green-900 '>
					<div className='flex gap-x-2 items-center'>
						<div>
							<img src={mouse} alt='mousecursor' className='w-8 h-8' />
						</div>
						<div>
							<img src={message} alt='mousecursor' className='w-8 h-8' />
						</div>
						<div className='flex'>
							<img src={mouse} alt='mousecursor' className='w-8 h-8' />
							<h5> Create</h5>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
