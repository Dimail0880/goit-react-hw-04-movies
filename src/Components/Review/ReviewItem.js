import React from 'react';

const ReviewItem = ({review}) => {
    return (
        <>
            <h4>{review.author}</h4>
    <p>{review.content}</p>
        </>
    );
};

export default ReviewItem;
