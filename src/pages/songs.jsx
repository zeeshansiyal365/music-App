import axios from 'axios'
import React, { useState } from 'react'
import Card from '../components/card'

const Songs = () => {
    const [search, setSearch] = useState("")
    const [songs, setSongs] = useState([])
    const [loading, setLoading] = useState(false)
    const fetchMusic = async ()=>{
        if(!search) return;
        try{
            setLoading(true)
            const res = await axios.get(`https://itunes.apple.com/search?term=${search}&media=music&limit=10`);
            console.log(res.data.results);
            setSongs(res.data.results)
            setLoading(false)
            
        }catch(error){
            console.error(error)
        }
    }
  return (
    <div>
      <div>
    <h1>My Music App</h1>
    <input type="text" 
    placeholder='search songs or artist'
    value={search}
    onChange={(e) => setSearch(e.target.value)}

    />
    <button onClick={fetchMusic}>Search</button>
    {loading &&  <h3>loading ....</h3>}
      </div>
      <Card songs={songs}/>
    </div>
  )
}

export default Songs
