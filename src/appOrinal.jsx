import axios from "axios"
import { useState } from "react";
import Card from "./components/cardOrignal";
const App = () => {
  const [search , setSearch] = useState("");
  const [song , setSong] = useState([]);
  const [loading , setLoading] = useState(false)
const fetchData = async() => {
if(!search) return;
try{
  setLoading(true)

    const response = await axios.get(`https://itunes.apple.com/search?term=${search}&media=music&limit=20`);
    console.log(response);
    setSong(response.data.results)
  setLoading(false)    
}
catch (err){
console.log("some error occured" ,err)
}
}

  return (
    <>
    <div className="container text-center my-5">
      <div className="row">
        <div className="col-md-4"></div>
      <div className="col-md-4 text-center">
        <div className="input-box mb-5">
    <input type="text" placeholder="Search... " value={search} 
    onChange={ e => setSearch(e.target.value) } />
    <button onClick={fetchData}>Search</button>
    </div>
      </div>
        <div className="col-md-4"></div>   
      </div>
    
    
    <div>{loading &&   <div className="wrapper py-5">
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="shadow"></div>
    <div className="shadow"></div>
    <div className="shadow"></div>
</div>
}</div>
    <Card song = {song} />
    </div>
    
    </>
  )
}

export default App;
// 1.get data
// 2.make state variable
// 3.card