import MoviePoster from "../MoviePoster/MoviePoster";
import './MovieCaraousel.css'

function MovieCaraousel(props) {
    const { heading, movies } = props;

    let moviePosters;

    if (movies && movies.length > 0) {
        moviePosters = movies.map((movie) => {
            return (<MoviePoster movieDetails={movie} />)
        });
        
    } else {
        moviePosters = 'No movie available';
    }

    return (<section>
        {heading}

        <div style={{ display: 'flex', gap: '12px' }}>
            {moviePosters}
        </div>
    </section>);
}

export default MovieCaraousel;