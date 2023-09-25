

const Banner = () => {
    return (
        <div className=' bg-red-300'>
            <div className="hero h-[600px]" style={{ backgroundImage: 'url(https://i.ibb.co/zsmNy2W/banner.png)' }}>
                <div className="hero-overlay bg-opacity-90 bg-slate-100"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;