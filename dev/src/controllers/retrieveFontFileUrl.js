import axios from 'axios';

export default function retrieveFontFileUrl(name, files) {
    const varient = files.hasOwnProperty('regular') ? 'regular' : files.hasOwnProperty('400') ? '400' : Object.keys(files)[0]; // fallbacks
    let url = files[varient]; 
    const method = 'GET';
    url = 'https'+url.substr(4);
    return axios.request({url, method, responseType: 'blob'})
    .then(({ data }) => {
        const fontFile = new File([data], name+'.ttf');
        return URL.createObjectURL(fontFile);
    });
}