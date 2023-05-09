import Image from "next/image";
import logo from "../../public/user-logo.png";
import SearchForm from "./SearchForm";
import ActiveLink from "./ActiveLink";

function Header() {
	return (
		<>
			<div className='min-h-full '>
				<nav className='z-10 bg-gray-400'>
					<div className='mx-24 max-[640px]:mx-6 min-[320px]:py-6 max-w-full px-4 sm:px-6 lg:px-8'>
						<div className='flex min-[320px]:gap-y-5 lg:flex-row min-[320px]:flex-col h-full items-center justify-between'>
							<div className='flex items-center  min-[320px]:flex-col'>
								<div className='flex-shrink-0'>
									<Image
										width={800}
										height={500}
										className='h-16 w-16'
										src={logo.src}
										alt='user-logo'
									/>
								</div>
								<div className='md:block'>
									<div className='ml-10 flex items-baseline space-x-4'>
										<ActiveLink to='/'>Users</ActiveLink>
									</div>
								</div>
							</div>
							<SearchForm />
						</div>
					</div>
				</nav>
			</div>
		</>
	);
}

export default Header;
