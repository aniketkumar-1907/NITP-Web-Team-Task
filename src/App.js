import React, { useState } from 'react';
import Title from './comps/Title';
import NavBar from './comps/NavBar';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Footer from './comps/Footer';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
    <NavBar />
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      <Footer />
    </div>
  );
}

export default App;
