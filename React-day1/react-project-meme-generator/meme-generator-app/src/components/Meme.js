import React from 'react';
import memeUse from "../images/meme-img.png";
import memeData from '../memeData';

const Meme = () => {
  const [memeImage , setMemeImage] = React.useState("");
  let url;
  function getMemeImage()
  {
    //fetch the memes data 
    const memesArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length); //fetch the memes id
    //console.log(randomNumber);
    //fetch the url of images 
    // url = memesArray[randomNumber].url;
    //console.log(url);
    const randomMemeUrl = memesArray[randomNumber].url;

    // Set the meme image URL
    setMemeImage(randomMemeUrl);

  }
  return (
    <div className='meme'>
      <p>{url}</p>
        <form>
            <input  type="text" placeholder='Shut up'/>
            <input type="text" placeholder='add take my money' />
        </form>
        <button onClick={getMemeImage}>Get a new meme image</button>
        {memeImage && <img src={memeImage} alt="Random Meme"  className='meme--pic'/>}
    </div>
  )
}

export default Meme
