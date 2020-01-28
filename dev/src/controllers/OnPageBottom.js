import React from 'react';
import handleViewport from 'react-in-viewport';
import loading from '../images/loading.gif';

export default function OnPageBottom(props) {
    const { setNCards, nCards, isMoreCards } = props;
    const PageBottomBlock = props => {
        const { inViewport, forwardedRef } = props;
        
        if (isMoreCards()) {
            if (inViewport) {
                setNCards(nCards + 20);
            } 
            return <div ref={forwardedRef} className="page-bottom" ><img src={loading} alt="loading more..." /></div>
        }
        else {
            return <div className="page-bottom">End of results</div>
        }
    } 
    let PageBottom = handleViewport(PageBottomBlock, { rootMargin: '20%' }, { disconnectOnLeave: true });
    return <PageBottom />
}