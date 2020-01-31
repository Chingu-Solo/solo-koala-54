import React, {useState, useRef, useLayoutEffect} from 'react';
import icon from '../images/backToTop.svg';
import './styles/BackToTop.css';
import throttle from '../utils/throttle';
import {useTransition, animated} from 'react-spring'

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
    const transitions = useTransition(showButton, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        })
    useLayoutEffect(() => {
        if (document && !listingForScroll.current) {
            listingForScroll.current = true;
            document.addEventListener('scroll', throttle(() => checkPos(), 500));
        }
        return () => document.removeEventListener('scroll', throttle(() => checkPos(), 500));
    });
    return transitions.map(({ item, key, props }) =>
        item && <animated.img style={props} key={key} className="back-to-top" src={icon} onClick={() => window.scrollTo(0, 0)} alt="Back to top" title="Back to top" />
    )
         
}