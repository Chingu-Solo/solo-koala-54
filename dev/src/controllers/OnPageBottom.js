import React, { useLayoutEffect, useRef } from 'react';
import throttle from '../utils/throttle';

export default function OnPageBottom(props) {
    const controlPassedToFunction = useRef(false); // as a latch
    const checkPos = () => {
        const pageHeight = document.body.scrollHeight;
        const scrollPosFromPageBottom = window.pageYOffset + window.innerHeight;
        const offset = window.innerHeight * ((props.offsetPercent || 25)/100);
        const exec = props.exec || (() => console.info('No function given for OnPageBottom'));
        const execScope = props.scope || null;
        const callback = props.callback || false; 
        const timeout = props.timeout || 500; // if passed in function won't callback use a timeout to reset latch
        if (!controlPassedToFunction.current && pageHeight - (scrollPosFromPageBottom + offset) <= 0) {
            controlPassedToFunction.current = true;
            new Promise((resolve, reject) => {
                exec.apply(execScope, [...arguments, resolve, reject]);
                if (callback) { 
                    callback(resolve)
                }
                else {
                 setTimeout(resolve, timeout);
                }
            }).then(shouldKeepChecking => {
                controlPassedToFunction.current = false;
                shouldKeepChecking && checkPos();
            });
        }
    }
    const listingForScroll = useRef(false); // as a latch
    useLayoutEffect(() => {
        if (document && !listingForScroll.current) {
            listingForScroll.current = true;
            document.addEventListener('scroll', throttle(checkPos, 250));
            checkPos(); // check intial loaded page
        }
    })
    return <></>
}