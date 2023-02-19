import React from 'react'
import useFirestore from '../hooks/useFirestore';
import Footer from '../comps/Footer';
import logo from './logo.jpg';

const Collage = ({setSelectedImg}) => {
  const { docs } = useFirestore('images');
  return (
    <div className='img-wrapper'>
      <img className="logo" src={logo} alt="logo" />
        <div className='collage-contain'>
        <h1 className="your-carousel">Your Collage</h1>
        <div className="img-collgrid">
          {docs && docs.map(doc => (
            <div className="img-collwrap" key={doc.id} 
              layout
              onClick={() => setSelectedImg(doc.url)} >
              <img src={doc.url} alt="uploaded pic" initial={{ opacity: 1 }}/>
            </div>
          ))}
        </div>
        </div>
        <Footer />
        
    </div>
  )
}

export default Collage