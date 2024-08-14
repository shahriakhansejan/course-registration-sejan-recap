import PropTypes from 'prop-types';

const Credit = ({ name, credit, hour, usd }) => {
    return (
        <div className='md:w-1/3 mt'>
            <div className='bg-white p-6 rounded-xl'>
                <h1 className='text-lg font-bold text-[#2f80ed] mb-3'>Credit Hour Remaining {credit} hrs</h1>
                <hr />
                <h1 className='text-xl font-bold my-4'>Course Name</h1>
                <div className='mb-4 text-gray-500'>
                    {name.map((course, index) =>
                        <p key={index}>{index + 1}<span className='mx-1'></span>{course}</p>
                    )}


                </div>
                <hr />
                <p className='font-medium text-gray-600 my-4'>Total Credit Hour : {hour}</p>
                <hr />
                <h1 className='font-semibold text-gray-600 my-4'>Total Price: {usd} USD</h1>
            </div>
        </div>
    );
};

Credit.propTypes = {
    name: PropTypes.object.isRequired,
    credit: PropTypes.object.isRequired,
    hour: PropTypes.object.isRequired,
    usd: PropTypes.object.isRequired

};

export default Credit;