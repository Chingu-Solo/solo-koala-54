import React, { useRef } from 'react'; 
import Card from './Card';
import './styles/Collection.css';
import exitIcon from '../images/exit.svg';
import copyIcon from '../images/addtoclipboard.svg';

export default function Collection(props) {
    const uri = `https://fonts.googleapis.com/css?family=${props.list.map((font, i) => ((i > 0) ? `|` : '')+font.family.replace(' ', '+')).join('')}&display=swap`;
    const cards = props.list.map(font => <Card key={font.family+'card'}  {...font} isInCollection={true} removeFromCollection={props.removeFromCollection} />);
    const embedInHeadTextArea = useRef();
    const importTextArea = useRef();
    const copyToClipboard = ref => {
        ref.current.select();
        document.execCommand('copy');
        
    }
    const cssFontsRefs = {};
    const css = props.list.map(font =>  {
        cssFontsRefs[font.family] = {};
        return (
            <div className="collection__css__font-family" key={font.family+'css'}>
                <button className="icon-button collection__copy-button" onClick={() => copyToClipboard(cssFontsRefs[font.family]) } title="copy to clipboard">
                    <img src={copyIcon} title="copy to clipboard" alt="" />
                </button>
                <textarea className="collection__code" readOnly ref={el => cssFontsRefs[font.family] = {current: el}} value={`font-family: '${font.family}', ${font.category};`} />
            </div>
        )
    });
    return (
        <div className="collection">
            <button className="icon-button collection__close" onClick={props.closeCollection} title="Close modal">
                <img src={exitIcon} alt="" />
            </button>
            <div className="collection__list">
            <h2 className="collection__title">Collection</h2>
                {cards}
            </div>
            <div className="collection__embed">
                <h3 className="collection__subtitle">Embed</h3>
                <button className="icon-button collection__copy-button" onClick={() => copyToClipboard(embedInHeadTextArea)} title="copy to clipboard">
                    <img src={copyIcon} alt="" />
                </button>
                <textarea className="collection__code" readOnly ref={embedInHeadTextArea} value={`<link href="${uri}" rel="stylesheet">`} />
            </div>
            <div className="collection__import">
                <h3 className="collection__subtitle">Import</h3>
                <button className="icon-button collection__copy-button" onClick={() => copyToClipboard(importTextArea)} title="copy to clipboard">
                    <img src={copyIcon} alt="" />
                </button>
                <textarea className="collection__code" readOnly ref={importTextArea} value={`@import url('${uri}');`} />
            </div>
            <div className="collection__css">
                <h3>CSS</h3>
                {css}
            </div>
        </div>
    )
}