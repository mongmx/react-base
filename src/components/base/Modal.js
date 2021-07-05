import { useEffect, useRef } from 'react';
import styled from 'styled-components';

function useOnClickOutside(ref, handler) {
    useEffect(() => {
        const listener = event => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    });
}

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
`

const ModalContainer = styled.div`
    position: fixed;
    background: white;
    width: 600px;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    border: 1px solid black;
    box-shadow: 0 2px 4px 0 rgba(50, 50, 93, 0.1);
    color: black;
`

function Modal({ showModal, setShowModal, children }) {
    const ref = useRef();
    useOnClickOutside(ref, () => setShowModal(false));
    return (
        <div>
            {showModal && (
                <ModalBackground>
                    <ModalContainer ref={ref}>
                        {children}
                    </ModalContainer>
                </ModalBackground>
            )}
        </div>
    );
}

export default Modal;