import logo from '../../images/logo9.jpeg';

const Footer = () => {
    return (
        <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
            <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
                <div>
                    <img src={logo} alt="logo" className="w-32" />
                </div>
                </div>
                <div className='flex justify-center items-center flex-col mt-5'>
                    <p className='text-white text-sm text-center'>Write to us</p>
                    <p className='text-white text-sm text-center'>info@tippy.com</p>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start">
                    <h1 className="text-white text-5xl sm:text-5xl py-2 text-gradient"> TIPPY
                    </h1>
             
                    <div className='sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5' />

              

                </div>

           
        </div>
    );
}

export default Footer;
