import { useEffect } from "react";
import  useGifStore  from "../../../Zustand/store";
function App() {
  const addFavorite = useGifStore((store) => store.addFavorite);
  const fetchSearchResults = useGifStore((store) => store.fetchSearchResults);
  // console.log(store);
  

  useEffect(() => {
    fetchSearchResults();
  }, []);

  const handleFavorite = () => {
    addFavorite();
  };

  const handleSearch = async () => {
      fetchSearchResults();
    };
  
  return (
    <div>
    <h1>Giphy Search!</h1>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="form-control" placeholder="Search for GIFs" aria-label="Search for GIFs"
              aria-describedby="basic-addon2"/>
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button"  onClick={handleSearch}>Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  

    <div className="image-item">
        <div className="card">
          {store.searchResults.map((gif) => (
            <div key={gif.id} className="card">
              <div className="front">
                <img src={gif.images.original.url} alt="Image" />
                <button type="button" className="btn btn-primary" onClick={() => handleFavorite()}>
                  Favorite This! &#9829;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



export default App;





{/* // return (
//   <div>
//     <h1>Giphy Search!</h1>
//     <div className="image-item">
//       {store?.gifs.map(gif => (
//         <div key={gif.id} className="card">
//           <div className="front">
//             <img src={gif.images.original.url} alt="Image" />
//             <button type="button" className="btn btn-primary">&#9829;</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// ); */}
