import bannerImg from "../../assets/books.jpg"
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse lg:mx-7 gap-10">
                <img
                    src={bannerImg}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div className="text-center lg:text-left px-2">
                    <h1 className="text-5xl font-bold font-mono">Books to freshen up your bookshelf</h1>
                    
                    <button className="btn btn-primary mt-10">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;