import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList } from '../../utility/addToDB';
import { Helmet } from 'react-helmet-async';

const BookDetail = () => {

    const { bookId } = useParams();
    const data = useLoaderData();
    const id = parseInt(bookId);
    // console.log(typeof bookId, typeof id, typeof data[0].bookId );

    const book = data.find(book => book.bookId === id);

    const { bookId: currentBookId, image } = book;

    const handleMarkAsRead = (id) => {
        addToStoredReadList(id);
    }

    return (
        <div className='my-12'>
            <Helmet>
                <title>Book Detail | {bookId}</title>
            </Helmet>
            <h2>Book details: {currentBookId}</h2>
            <img className='w-36' src={image} alt="" />
            <br />
            <div className='mx-4'>
                <button onClick={ () => handleMarkAsRead(currentBookId)} className="btn btn-outline mr-4 btn-accent">Mark as Read</button>
                <button className="btn btn-accent">Add to Wishlist</button>
            </div>

        </div>
    );
};

export default BookDetail;