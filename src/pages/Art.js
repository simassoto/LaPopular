import React, { useState, useEffect }  from 'react'
import axios from 'axios';


const Art = () => {
  const[photoGalleryArray, updatePhotoGalleryArray] = useState([]);
  useEffect(()=>{

    axios.get('https://picsum.photos/v2/list?page=2&limit=10')
  .then(function (response) {
    // handle success

    updatePhotoGalleryArray(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

  }, [])
  console.log("photo Array", photoGalleryArray);

  return (
    <div className='art'>
    <div className='row'>
      {
        photoGalleryArray.map((photoGalleryArrayItem,index)=>{

         return(
          <div key={index} className="col-lg-4 col-md-4 col-sm-12">
          <img src={photoGalleryArrayItem.download_url}
               alt={`image_${photoGalleryArrayItem.id}`}
               height="400"
            />

          </div>
         );
        })
      }
      </div>
    </div>
  )
}

export default Art
