import iphone from '../../Images/iphone.png';
import sop from '../../Images/sop.png';
import iphone1 from '../../Images/iphone1.png';

const Hero = () => {


    return (
        <>
        <div className='flex'>
            <div className='flex flex-col justify-center items-center'>
                <ul className='ml-20 mb-12 space-y-2 text-black text-sm font-semibold sm:space-2'>
                    <li>Women's Fashion</li>
                    <li>Men’s Fashion</li>
                    <li>Electronics</li>
                    <li>Home & Lifestyle</li>
                    <li>Medicine</li>
                    <li>Sports & Outdoor</li>
                    <li>Baby's & Toys</li>
                    <li>Groceries & Pets</li>
                    <li>Health & Beauty</li>
                </ul>
            </div>
            <div className="ml-[200px] bg-black h-full w-[6px] mx-4"></div>

            <div className='w-[892px] h-[344px] bg-black ml-[100px] mt-6 flex flex-row'>
                <div className='flex flex-col'>

                    <img
                        className='m-12 object-cover'
                        src={iphone}
                        alt='iphone'
                        />
                    <div className='w-[330px]'>

                    <p className='text-white text-[48px] font-semibold wrap ml-12 top-0 break-words'>Up to 10% 
                    off Voucher</p>
                    </div>
                    <img
                    className='object-cover text-white bottom-0 ml-12 w-24'
                    src={sop}
                    alt='sop'
                    />
                </div>
                <img 
                    className='m-6 object-cover'
                    src={iphone1}
                    alt='iphone1'
                    />
            </div>
        </div>
        </>
    )
}

export default Hero;