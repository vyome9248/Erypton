import { BsShieldFillCheck } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri'

const ServiceCard = ({ color, title, icon, subtitle }) => (
    <div className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
            {icon}

        </div>
        <div className="ml-5 flex flex-col flex-1">
            <h1 className="mt-2 text-white text-lg">{title}</h1>
            <p className="mt-2 text-white text-sm md:w-9/12">{subtitle}</p>
        </div>
    </div>
)

const Services = () => {
    return (
        <div className = "flex flex-col md:flex-row w-full justify-center items-center gradient-bg-welcome">
            <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-14">
                <div className="flex-1 flex flex-col justify-start items-start">
                    <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient"> Coming Soon
                    </h1>

                </div>

            </div>
            <div className='flex-1 flex flex-col justify-start items-between'>
                <ServiceCard 
                    color="bg-[#F84550]"
                    title="Health Stake"
                    icon = {<RiHeart2Fill fontSize={21} className="text-white" />}
                    subtitle="Stake it to make it"
                />
                <ServiceCard 
                    color="bg-[#8945F8]"
                    title="Transaction Check"
                    icon = {<BiSearchAlt fontSize={21} className="text-white" />}
                    subtitle="End to End wallet checks for Transaction viability"
                />
                <ServiceCard 
                    color="bg-[#2952E3]"
                    title="NFT Avatars"
                    icon = {<BsShieldFillCheck fontSize={21} className="text-white" />}
                    subtitle="Mint, store and flaunt your NFT's with minimal gas fees"
                />
                
            </div>
        </div>
    );
}

export default Services;
