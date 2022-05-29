import GifGridItem from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__fadeIn">{category}</h3>

      {loading && <p className="animate__flash">'Loading...'</p>}

      <div className="card-grid">
        {images.map((gif) => {
          return <GifGridItem key={gif.id} {...gif} />;
        })}
      </div>
    </>
  );
};

export default GifGrid;
