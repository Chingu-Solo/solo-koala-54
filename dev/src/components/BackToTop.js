import React, {useState, useRef, useLayoutEffect} from 'react';
import icon from '../images/backToTop.svg';
import throttle from '../utils/throttle';
import './styles/BackToTop.css'

export default function BackToTop() {
    const [showButton, setShowButton] = useState(false);
    let checkPos = () => {
        if (listingForScroll.current) {
            if (window.pageYOffset > window.innerHeight/2) {
                setShowButton(true);
            }
            else {
                setShowButton(false);
            }
        }
    }
    const listingForScroll = useRef(false); // as a latch
    useLayoutEffect(() => {
        if (document && !listingForScroll.current) {
            listingForScroll.current = true;
            document.addEventListener('scroll', throttle(checkPos, 1500));
            checkPos(); // check intial loaded page
        }
        return () => {
            listingForScroll.current = false;
            document.removeEventListener('scroll', throttle(checkPos, 1500));
        }
    });
    return (<>
        {showButton ? <img className="back-to-top" src={icon} onClick={() => window.scrollTo(0, 0)} alt="Back to top" title="Back to top" />:
        <></>}
    </>)
}