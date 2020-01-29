import retrieveFontFileUrl from './retrieveFontFileUrl';

export default function StackFetchFontFile() {
    const stack = new Map();
    let stackProcessing = false;
    async function next() {
        if (stack.size > 0) {
            stackProcessing = true;
            const current = Array.from(stack)[stack.size-1]
            try {
                const url = await retrieveFontFileUrl(current[0].family, current[0].files);
                current[1].resolve(url);
            } catch(e) {
                current[1].reject(e);
            }
            stack.delete(current[0]);
            next();
        }
        else {
            stackProcessing = false;
        }
    }
    const add = font => new Promise((resolve, reject) => {
        if (stack.has(font)) { // move to top of stack
            let latestFont = stack.get(font);
            stack.delete(font);
            stack.set(latestFont); 
        }
        else {
            stack.set(font, {resolve, reject}); 
        }
        !stackProcessing && next();
    });
    const clear = reason => {
        stack.forEach(font => font[1].reject(reason));
    }
    return { add, clear }
}