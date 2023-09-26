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

    return (
        <div>
            <h3>Donation: {donationAdded.length}</h3>
            {
                // donationAdded.map( donation => )
            }

        </div>
    );
};

export default Donation;