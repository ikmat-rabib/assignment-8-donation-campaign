
import Card from './Card';

const Cards = ({cards}) => {

    console.log(cards);

    return (
        <div className='flex'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-32 max-w-[1320px] mx-auto '>
            {
                cards?.map( card => <Card key={card.id} card={card}></Card>)
            }
        </div>
        </div>
    );
};

export default Cards;