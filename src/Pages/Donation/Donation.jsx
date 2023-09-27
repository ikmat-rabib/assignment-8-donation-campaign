import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../utility/localStorage";


const Donation = () => {

    const donations = useLoaderData();

    const [donationAdded, setDonationAdded] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        const storedDonationIds = getStoredDonation();
        if (donations.length > 0) {

            const addedDonations = donations.filter(donation => storedDonationIds.includes(donation.id));

            setDonationAdded(addedDonations)
            // console.log(donations, addedDonations, storedDonationIds);
        }
    }, [donations])

    // const {card_bg_color, category_bg_color, text_and_button_bg_color} = donations;

    const cardStyle = {
        backgroundColor: donations?.card_bg_color,
    };
    const categoryStyle = {
        backgroundColor: donations?.category_bg_color,
    }

    const titleStyle = {
        color: donations?.text_and_button_bg_color,
    };

    return (
        <div className="max-w-[1320px] mx-auto my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                {
                    donationAdded.slice(0, dataLength).map(donation =>
                        <div key={donation.id} className="card card-side bg-base-100 " style={{backgroundColor:donation?.card_bg_color}}>
                            <figure><img src={donation.selected_picture} alt="" /></figure>
                            <div className="card-body">
                                <div className="px-2 rounded-md max-w-min" style={{backgroundColor:donation?.category_bg_color}}>
                                    <p style={donation?.titleStyle}>{donation?.category}</p>
                                </div>
                                <h2 className="card-title" >{donation?.title}</h2>
                                <p style={{color:donation?.text_and_button_bg_color}}>${donation?.price}</p>
                                <div className="card-actions ">
                                    <Link to={`/card/${donation?.id}`}>
                                    <button className="btn btn-primary border-0" style={{backgroundColor:donation?.text_and_button_bg_color}}>View Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>)
                }
            </div>
            <div className={(dataLength === donationAdded.length || donationAdded.length < 4) ? 'hidden' : ''}>
                <button onClick={() => setDataLength(donationAdded.length)} className="btn bg-[#009444] text-white mx-auto flex my-10">Show All</button>
            </div>
        </div>
    );
};

export default Donation;