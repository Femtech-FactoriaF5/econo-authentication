import { useSearchParams } from "react-router-dom";

const Gallery = () => {
  
  const [searchParams, setSearchParams]=useSearchParams();
  const searchTerm = searchParams.get('title') || '';
  return (
    <>
      <h2>Gallery</h2>
      {searchTerm}
    </>
  );
};
export default Gallery