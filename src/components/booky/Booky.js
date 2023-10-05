import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Booky.css";

const Booky = ({books}) => {

    const navigate = useNavigate();

    function reviews(bookId) {
        navigate(`/reviews/${bookId}`);
    }

  return (
    <div className="movie-carousel-container">
        <Carousel>
            {
                books?.map((book) => {
                    return (
                        <Paper>
                            <div className="movie-card-container">
                                <div className="movie-card" style={{"--img": `url(${book.image})`}}>
                                    <div className="movie-detail">
                                        <div className="movie-poster">
                                            <img src={book.image} alt="" />
                                        </div>
                                        <div className="movie-title">
                                            <h2 style={{"width": "350px"}}>{book.bookName}</h2>
                                            <h5>{book.author}</h5>
                                            <p style={{"width": "350px"}}>{book.description}</p>
                                        </div>
                                        
                                    </div>
                                    <div className="movie-button">
                                        <Button variant="info" onClick={() => reviews(book.bookId)} style={{"font-weight": "900"}}>Review</Button>
                                    </div>
                                    
                                </div>
                            </div>
                        </Paper>
                    )
                })
            }
        </Carousel>
    </div>
  )
}

export default Booky