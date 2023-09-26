import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../utility/localStorage";


const Donation = () => {

    const donations = useLoaderData();

    const [donationAdded, setDonationAdded] = useState([]);

    useEffect(() => {
        const storedDonationIds = getStoredDonation();
        if (donations.length > 0) {

            const addedDonations = donations.filter(donation => storedDonationIds.includes(donation.id));

            setDonationAdded(addedDonations)
            // console.log(donations, addedDonations, storedDonationIds);
        }
    }, [])

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
                donationAdded.map(donation =>
                    <div key={donation.id} className="card card-side bg-base-100 " style={cardStyle}>
                        <figure><img src={donation.selected_picture} alt="" /></figure>
                        <div className="card-body">
                            <div className="px-2 rounded-md max-w-min" style={categoryStyle}>
                                <p style={titleStyle}>{donation.category}</p>
                            </div>
                            <h2 className="card-title">{donation.title}</h2>
                            <p>${donation.price}</p>
                            <div className="card-actions ">
                                <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>)
            }

        </div>
     </div>
    );
};

export default Donation;