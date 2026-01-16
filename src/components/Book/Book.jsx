import React from 'react';

const Book = ({ book }) => {

    const { image, bookName, author, tags, category, rating } = book;

    return (
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
                            tags.map(tag => <button className="btn btn-xs bg-green-100 text-green-500">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                    </h2>
                    <p>By: {author}</p>
                    <div className="divider"></div>
                    <div className="card-actions justify-between">
                        <div className="badge ">{category}</div>
                        <div>
                            <div className="badge">{rating}</div>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" /> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;