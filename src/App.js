import { useState } from 'react';
import { Page, TopBar, Container } from './components/base/base';
import Modal from './components/base/Modal';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Page>
      <TopBar>
        M3M3-Art&nbsp;&nbsp;&nbsp;&nbsp;
        Home&nbsp;&nbsp;&nbsp;&nbsp;
        Gallery&nbsp;&nbsp;&nbsp;&nbsp;
        Help&nbsp;&nbsp;&nbsp;&nbsp;
        About
      </TopBar>
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
