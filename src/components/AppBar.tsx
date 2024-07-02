import { Search } from "./Search";

export const AppBar = () => {
	return (
		// <div className='grid grid-cols-3'>
		<div className='flex justify-between p-3'>
			<div className='text-md inline-flex items-center pb-2'>Youtube</div>
			<div>
				<Search />
			</div>
			<div className='text-md inline-flex items-center'>sign in</div>
		</div>
	);
};
