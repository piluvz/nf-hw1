import Link from 'next/link';
const Footer = () => {
    return(
        <div className="bg-gray-800 text-white py-6 px-5 mt-10  md:px-10 lg:px-14"> 
            <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                    <a className="text-sm hover:underline md:text-md lg:text-md" href="/">Home</a>
                    <a className="text-sm hover:underline md:text-md lg:text-md" href="/myPage">My Page</a>
                    <a className="text-sm hover:underline md:text-md lg:text-md" href="/about">About</a>
                </div>
                <div className="flex space-x-5">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/800px-Facebook_Logo_%282019%29.png" alt="Facebook" className="w-6 h-6"/>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png" alt="Twitter" className="w-6 h-6"/>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Footer;