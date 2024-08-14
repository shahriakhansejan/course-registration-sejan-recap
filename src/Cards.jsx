import { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card';
import { PropTypes } from 'prop-types';

const Cards = ({handleCredit}) => {
    const [cards, setCards] = useState([]);
    useEffect(() =>{
        fetch('Course.json')
        .then(res => res.json())
        .then(data => setCards(data))
        ,[]})

    return (
        <div className='mt-6 md:w-2/3'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                cards.map(card => <Card 
                    key={card.id} 
                    card={card}
                    handleCredit={handleCredit}>

                    </Card>)
            }
            </div>
        </div>
    );
};

Cards.propTypes = {
    handleCredit: PropTypes.func
};

export default Cards;