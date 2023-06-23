import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MoviePoster(props) {
  const { movieDetails } = props;
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={"https://www.themoviedb.org/t/p/w220_and_h330_face"+movieDetails.poster_path} />
      <Card.Body>
        <Card.Title>{movieDetails.original_name}</Card.Title>
        <Card.Text style={{overflow:'hidden',height:'50px'}}>
          {movieDetails.overview}
        </Card.Text>
        <Button variant="primary">{movieDetails.first_air_date}</Button>
      </Card.Body>
    </Card>
  );
}

export default MoviePoster;