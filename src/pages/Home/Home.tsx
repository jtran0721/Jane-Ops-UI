import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import '../../components/styles/Styles.scss';


const Home = () => {
  return (
    <div className="Home">
        <Sidebar />
        <div className='homeContainer'>container</div>
    </div>
  )
}

export default Home