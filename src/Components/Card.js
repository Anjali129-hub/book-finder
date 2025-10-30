import React, { useState } from 'react';
import Modal from './Modal';

const Card = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState(null);

  return (
    <>
      {book.map((item) => {
        const thumbnail = item.volumeInfo.imageLinks?.smallThumbnail;

        if (!thumbnail) return null; 

        return (
          <div
            key={item.id}
            className="card"
            onClick={() => {
              setShow(true);
              setItem(item);
            }}
          >
            <img src={thumbnail} alt="" />
            <div className="bottom">
              <h3 className="title">{item.volumeInfo.title}</h3>
              <p className="amount">
                ₹{item.saleInfo.listPrice?.amount || "N/A"}
              </p>
            </div>
          </div>
        );
      })}

      <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
    </>
  );
};

export default Card;
