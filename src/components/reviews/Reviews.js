import { useEffect, useRef } from "react";
import api from "../../api/axiosConfig";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ReviewForm from "../reviewform/ReviewForm";

import React from 'react'

const Reviews = ({getData, book, reviews, setReviews}) => {

    const revText = useRef();
    let params = useParams();
    const bookId = params.bookId;

    useEffect(() => {
        getData(bookId);
    })

    // console.log("Book:", book, reviews);

    const addReview = (e) => {
        e.preventDefault();
        const rev = revText.current;
        const updatedReviews = [...reviews, rev.value];
        console.log(updatedReviews, bookId);
 
        api.put(`reviews/${bookId}`, { bookId: bookId, reviews: updatedReviews })
            .then((response) => {
            // Handle the successful update (if needed)
            console.log("Reviews updated successfully:", response.data);
            revText.current.value = "";
            })
            .catch((error) => {
            // Handle errors from the PUT request
            console.error("Error updating reviews:", error);
            });

        // api.get(`reviews/${bookId}`)
        //     .then(response => {
        //       setReviews(response.data.reviews);
        //     })
        //     .catch(error => {
        //       console.log("Error message: ", error);
        //     });
    }

  return (
    <Container>
        <Row>
            <Col><h3>Reviews</h3></Col>
        </Row>
        <Row className="mt-2">
            <Col>
                <img src={book?.image} alt="" width="307px" height="475px" />            
            </Col>
            <Col>
                {
                    <>
                        <Row>
                            <Col>
                                <ReviewForm handleSubmit={addReview} revText={revText} labelText="Write a Review" />
                            </Col>
                        </Row>
                    </>
                }
                {
                    reviews?.map((r) => {
                        return (
                            <>
                                <Row>
                                    <Col><hr /></Col>
                                </Row>
                                <Row>
                                    <Col>{r}</Col>
                                </Row>
                            </>
                        )
                    })
                }
            </Col>
        </Row>
        <Row>
            <Col><hr /></Col>
        </Row>
    </Container>
  )
}

export default Reviews