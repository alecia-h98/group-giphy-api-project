import { useEffect, useState } from "react";
import { useStore } from "zustand";
function App() {
  // const "Store thingy here" = useStore((store) => store."tingy here");
  // const store = useStore();
  // console.log(store);
  

  // useEffect(() => {
  //   store."Do we need a refresh?"();
  // }, []);

  // const handleRefresh = () => {
  //   store.fetchGifs();
  
  return (
      <div>
      <h1>Giphy Search!</h1>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search for GIFs" aria-label="Search for GIFs"
          aria-describedby="basic-addon2"/>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">Search</button>
        </div>
      </div>

      <div className="image-item">
    <div className='card'>
      <div className="front"> <img src="gif.images.original.url" alt="Image" /> 
        <button type="button" className="btn btn-primary"> Favorite This! &#9829; </button>
      </div>
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
