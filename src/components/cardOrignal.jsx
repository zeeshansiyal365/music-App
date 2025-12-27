const Card = ({song}) => {
  return (
    <>
    <div className="container">
      <div className="row">
        
        {song.map((songs) =>  {

      return <div key={songs.trackId}  className="col-xl-3 col-md-4 col-sm-6  g-3">
        <div className="card"  >
  <img  className="card-img-top card-image" src={songs.artworkUrl100.replace("100x100bb.jpg" , "500x500bb.jpg" )} alt="img" />
  <div className="card-body">
    <p className="card-text">{songs.
artistName
} </p>
<audio className="audio" src={songs.previewUrl

} controls></audio>
  </div>
</div>
      </div>
    })}
    

      </div>
    </div>
    
    </>
  )
}

export default Card