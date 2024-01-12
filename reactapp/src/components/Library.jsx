import { Row, Col } from 'react-bootstrap';
import SingleFilm from './SingleFilm'
import { useState, useEffect } from 'react';

const Library = ({ saga }) => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const res = await fetch('http://www.omdbapi.com/?s='+ saga + '&apikey=1a73cf6e');
      if (res.ok) {
        let data = await res.json();
        setMovies(data.Search);
        console.log(data.Search);
      } else {
        console.log('error');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <div className='saga-section p-5 h-50'>
        <Row>
          {movies.map((movie) => (
            <Col key={movie.imdbID}>
              <SingleFilm movie={movie}></SingleFilm>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Library;