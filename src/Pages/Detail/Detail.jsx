import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from "../../utility/localStorage";

const Detail = () => {

    const cards = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);

    const card = cards.find(card => card.id === idInt)

    const buttonStyle = {
        color: card.category_bg_color,
        backgroundColor: card.text_and_button_bg_color
    };

    // console.log(card);

    const handleAddedDonation = () => {
        saveDonation(idInt);
        toast("You have already Donated this !");
    }

    return (
        <div className="max-w-[1320px] mx-auto my-10">
            <div className="mb-8 relative ">
                <figure><img className="w-full rounded-lg object-cover" src={card.picture} alt="" /></figure>
                <div className="bg-[#0B0B0B80] absolute bottom-0 w-full py-9 pl-9 rounded-b-lg">
                    <button onClick={handleAddedDonation} className="px-7 py-4 font-semibold rounded-lg" style={buttonStyle}>Donate $290</button>
                </div>
            </div>
            <div className="my-16">
                <h2 className="text-5xl font-bold ">{card.title}</h2>
                <p className="my-6">{card.description}</p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Detail;