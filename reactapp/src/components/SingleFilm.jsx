import { Card } from 'react-bootstrap';

const SingleFilm = ({ movie }) => {
  return (
    <div style={{width: '130px'}}>
      <Card style={{ width: '155px' }} href='#' className='px-0 mx-0'>
        <Card.Img src={movie.Poster} alt={movie.Title} style={{height: "250px"}}></Card.Img>
      </Card>
    </div>
  );
};

export default SingleFilm;