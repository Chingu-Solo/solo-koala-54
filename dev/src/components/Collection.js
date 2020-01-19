import React from 'react'; 
import Card from './Card';

export default function Collection(props) {
    return (
        <div className="collection">
            <div className="collection__list">
            <h2>Collection</h2>
                {props.collectionList.map(font => <Card {...font} />)}
            </div>
            <div className="collection__embed">
                <h3>Embed</h3>
                <h4>In html head</h4>
                <code>
                    {props.collectionList.map(font => <>{`&lt;link href=&quot;https://fonts.googleapis.com/css?family=${encodeURI(font.family)}&amp;display=swap&quot; rel=&quot;stylesheet&quot;&gt`}<br /></>)}
                </code>
                <h4>or @Import in css</h4>
                <code>
                    {props.collectionList.map(font => <>{`@import url('https://fonts.googleapis.com/css?family=${encodeURI(font.family)}&display=swap');`}<br /></>)}
                </code>
            </div>
            <div className="collection__css">
                <h3>CSS</h3>
                <code>
                    {props.collectionList.map(font => <>{`font-family: '${font.family}', ${font.category};`}<br /></>)}
                </code>
            </div>
        </div>
    )
}