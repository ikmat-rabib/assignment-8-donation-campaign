import { useLoaderData, useParams } from "react-router-dom";


const Detail = () => {

    const cards = useLoaderData();
    const { id,  title, text_and_button_bg_color, description } = useParams();

    const card = cards.find(card => card.id == id)

    const buttonStyle = {
        color: card.category_bg_color,
        backgroundColor: card.text_and_button_bg_color
    };

    console.log(card);

    return (
        <div className="max-w-[1320px] mx-auto my-10">
            <div className="mb-8 relative ">
                <figure><img className="w-full rounded-lg object-cover" src={card.picture} alt="" /></figure>
                <div className="bg-[#0B0B0B80] absolute bottom-0 w-full py-9 pl-9 rounded-b-lg">
                    <button className="px-7 py-4 font-semibold rounded-lg" style={buttonStyle}>Donate $290</button>
                </div>
            </div>
            <div className="my-16">
                <h2 className="text-5xl font-bold ">{card.title}</h2>
                <p className="my-6">{card.description}</p>
            </div>
        </div>
    );
};

export default Detail;