import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {

    const { bookId, image, bookName, author, tags, category, rating, totalPages } = book;

    return (
        <Link to={`/books/${bookId}`}>
            <div>
                <div className="card bg-base-100 w-96 shadow-sm p-6 rounded-2xl">
                    <figure className='bg-gray-100 py-8'>
                        <img
                            src={image}
                            className='h-[166px]'
                            alt="image" />
                    </figure>
                    <div className="card-body">
                        <div className='flex gap-3'>
                            {
                                tags.map((tag, index) => <button
                                    key={index}
                                    className="btn btn-xs bg-green-100 text-green-500">{tag}</button>)
                            }
                        </div>
                        <h2 className="card-title">
                            {bookName}
                        </h2>
                        <p>By: {author}</p>
                        <div className="divider"></div>
                        <div className="card-actions justify-between">
                            <div className="badge ">{category}</div>
                            <div>{rating}</div>
                            <div>{totalPages}</div>       
                                <div className="rating">
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="1 star" />
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;