// import { stringify } from "postcss";

const getStoredDonation = () => {
    const storedDonation = localStorage.getItem('donations');
    if (storedDonation) {
        return JSON.parse(storedDonation);
    }
    return [];
}

const saveDonation = id => {
    const storedDonations = getStoredDonation();
    const exist = storedDonations.find(donationId => donationId == id)
    if (!exist) {
        storedDonations.push(id);
        localStorage.setItem('donations',JSON.stringify(storedDonations))
    }
}

export { getStoredDonation, saveDonation }