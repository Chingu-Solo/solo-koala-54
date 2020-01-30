import React from 'react';
import './styles/FontTile.css';

export default function FontTile({className, font, displayCharacters = 'none', fontSizes = [1,2,3], fontSizeValue = 'vw', positions = [[30,0],[0,30],[60,30]], rotations = [0, 30, 60]}) {
    const valuesLoop = (arr, index) => arr[index%arr.length];
    const set = new Set();
    for (let char of displayCharacters.split('').filter(c => c !== ' ')) {
        set.add(char);
    }
    const characterSet = [...set];
    const character = characterSet.map((c, i) => {
        const position = valuesLoop(positions,i);
        return {
            symbol: c, 
            style: {
                fontSize: valuesLoop(fontSizes,i)+fontSizeValue, 
                left: position[0]+'%',
                right: position[1]+'%',
                transform: `rotate(${valuesLoop(rotations,i)}deg)`
            }
            
    } });
    const jumbledCharacters = [];
    for (let char of character) {
        let randomN = Math.floor(Math.random() * 2);
        if (randomN === 0) {
            jumbledCharacters.push(char);
        }
        else {
            jumbledCharacters.unshift(char);
        }
    }
    const characters = jumbledCharacters.map(c => <div key={font+c.symbol} className="font-tile__character" style={c.style}>{c.symbol}</div>);
    return (
        <div className={'font-tile '+className}>
            {characters}
        </div>
    )
}