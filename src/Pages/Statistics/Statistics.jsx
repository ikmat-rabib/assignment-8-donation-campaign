import Pi from "./Pi/Pi";


const Statistics = () => {



    return (
        <div className='max-w-[1320px] mx-auto'>
            <Pi></Pi>
            <div className="flex gap-5">
                <div className="flex gap-3 items-center">
                    <p className="">Your Donation</p>
                    <div className="px-6 py-3 bg-[#00C49F] rounded-lg"></div>
                </div>
                <div className="flex gap-3 items-center">
                    <p className="">Your Donation</p>
                    <div className="px-6 py-3 bg-[#FF444A] rounded-lg"></div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;