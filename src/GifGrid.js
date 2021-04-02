import PropTypes from 'prop-types';
import GifGridItem from './GifGridItem';
import useFetchGifs from './hooks/useFetchGifs';


const GifGrid = ({category}) => {
console.log("estoy en gigGrid");
    const { data: images, loading } = useFetchGifs(category);


    return (
        <>
        <h1 className="animate__animated animate__fadeIn">{category}</h1>
        {loading && <p>Cargando...</p>}
        <div className="grid-card">
        {
            images.map((img, index) => {
                return <GifGridItem key={index} {...img} />
            })
        }
    </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid;