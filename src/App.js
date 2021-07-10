import { useState } from 'react';
import { Page, Container } from './components/base/base';
import Modal from './components/base/Modal';
import './App.css';
import NavBar from './components/nav/NavBar';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Page>
      <NavBar>
        M3M3-Art&nbsp;&nbsp;&nbsp;&nbsp;
        Home&nbsp;&nbsp;&nbsp;&nbsp;
        Gallery&nbsp;&nbsp;&nbsp;&nbsp;
        Help&nbsp;&nbsp;&nbsp;&nbsp;
        About
      </NavBar>
      <Container>
        <h1>Content</h1>
        <button onClick={() => setShowModal(!showModal)}>Modal</button>
      </Container>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        test
      </Modal>
    </Page>
  );
}

export default App;
