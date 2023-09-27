

const Banner = () => {
    return (
        <div className=' bg-red-300'>
            <div className="hero h-[600px]" style={{ backgroundImage: 'url(https://i.ibb.co/zsmNy2W/banner.png)' }}>
                <div className="hero-overlay bg-opacity-90 bg-slate-100"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="text-5xl font-bold text-black my-10">I Grow By Helping People In Need</h1>
                        <div className="form-control ">
                            <div className="input-group flex justify-center">
                                <input type="text" placeholder="Search…" className="input input-bordered text-black w-full max-w-xs" />
                                <button  className="btn  px-7 py-3 bg-[#FF444A] rounded-r-lg text-white font-semibold hover:bg-green-700">Search</button>
                            </div>
                        </div>

                        {/* <input type="text" placeholder="Search here" className="input input-bordered w-full max-w-xs" />
                            <button className="px-7 py-3 bg-[#FF444A] rounded-r-lg text-white font-semibold hover:bg-green-700">Search</button> */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;