import { Link } from "react-router-dom";


const Book = ({ book }) => {
    const { bookId, bookName, author, image, category } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-full shadow-xl border-2 border-gray-500 p-5 ">
                <figure className="bg-black rounded-2xl py-8">
                    <img
                        className="h-[166px] w-[132px]"
                        src={image}
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {bookName}
                    </h2>
                    <p>{author}</p>
                    <div className="border-t-2 border-dashed border-gray-500"></div>
                    <div className="card-actions justify-between items-center mt-5 ">
                        <div className="badge badge-outline">{category}</div>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-white" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;