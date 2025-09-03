
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList } from '../../utility/addToDb';

const BookDetail = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);

    const data = useLoaderData();
    const book = data.find(book => book.bookId === id);
    const {bookId: currentBookId, image, author, review,bookName, category, totalPages, publisher, yearOfPublishing, rating } = book;

    const handleMarkAsRead = (id) =>{
        /**
         * 1. Understand what to store or save : bookId
         * 2. Where to store: database
         * 3. Array, list, collection:
         * 4. Check : if the book is already in the readList.
         * 5. if not, then the add the book to the list 
         * 6. if yes, do not add the book
        */
       addToStoredReadList(id);
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="lg:flex justify-between items-center px-5 gap-10 my-10">
              <div className='w-2/4 mx-auto'>
                <img src={image} alt="" />
              </div>
                <div className='w-2/4 mx-auto'>
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <p className="mt-5 text-gray-500 text-lg">By: {author}</p><br /><hr />
                    <p className="mt-2 text-gray-500 text-lg">{category}</p><br /><hr />
                    <p className='mt-2 text-sm text-gray-500'>Review: {review}</p><br /><hr />
                    <div>
                        <p className="text-sm font-bold text-gray-400">Number of page: <span className='text-white font-bold ml-10'>{totalPages}</span></p>
                        <p className="text-sm font-bold text-gray-400">Publisher: <span className='text-white font-bold ml-10'>{publisher}</span></p>
                        <p className="text-sm font-bold text-gray-400">Year of Publishing: <span className='text-white font-bold ml-10'>{yearOfPublishing}</span></p>
                        <p className="text-sm font-bold text-gray-400">Rating: <span className='text-white font-bold ml-10'>{rating}</span></p>
                    </div>
                    <div className='mt-5 flex gap-5'>
                        <button onClick={()=>handleMarkAsRead(bookId)} className="btn btn-outline btn-success">Mark as Read</button>
                        <button className="btn btn-success font-bold">Add to WishList</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;