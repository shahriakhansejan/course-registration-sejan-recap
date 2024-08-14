import PropTypes from 'prop-types';
import { PiCreditCardLight, PiCurrencyDollarLight } from 'react-icons/pi';

const Card = ({card, handleCredit}) => {
    const {image,title,description,price,time} = card;
    return (
        <div className='bg-white p-4 rounded-lg'>
            <img src={image} alt="" />
            <h1 className='text-lg font-semibold my-4'>{title}</h1>
            <p className='text-gray-500'>{description}</p>
            <p className='flex justify-between my-4 text-base font-medium text-gray-600'>
                <span className='flex items-center gap-3 '><span className='text-2xl'><PiCurrencyDollarLight></PiCurrencyDollarLight></span> Price: {price}</span>

                <span className='flex items-center gap-3 '><span className='text-2xl'><PiCreditCardLight></PiCreditCardLight></span>Credit: {time}</span>

            </p>
            
            <div>
                <button onClick={()=>handleCredit(title,price,time)} className='py-2 text-center text-white text-lg font-semibold bg-[#2F80ED] w-full rounded-lg hover:bg-[#006eff]'>Select</button>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired,
    handleCredit: PropTypes.func
};

export default Card;