import React from 'react'
import ReactPlayer from 'react-player'
import VolumeOffIcon from '@mui/icons-material/VolumeOff';


function Home() {
 
  return (
    
    <div style={{
      position:'relative'
    }}>
      
    <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>
    <button style ={{
      position:'absolute',
      top:32,
      left:32

    }}>
      <VolumeOffIcon/>
    </button>
    
    </div>

  )
}

export default Home