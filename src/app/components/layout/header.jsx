import Link from 'next/link';

const Header = () => {
    return(
        <div className="bg-gray-300 shadow-sm py-7 px-4 flex justify-between md:px-10 lg:px-14">
            <div class="inline-block align-middle font-bold text-2xl md:text-3xl">
                Blogs
            </div>

            <div className="inline-block flex space-x-3 align-middle md:space-x-5">
                <a className ="text-md hover:underline md:text-lg" href="/">Main</a>
                <a className ="text-md hover:underline md:text-lg" href="/myPage">My page</a>
                <a className ="text-md hover:underline md:text-lg" href="/about">About</a>
            </div>
        </div>
    )
};

export default Header;