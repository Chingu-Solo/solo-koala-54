import data from '../data/publicDomainLiterature';

export default function* customTextGenerator(approxLength = 150) {
    let useDataFromIndex = 0; // so source/subject is not the same for each 
    let useDataFromSubIndex = 0; // each source is spilt into 4
    let lookForNthSegment = 0;
    while (true) {
        let phrase = '';
        let letterCount = 0;
        let haystack = data[useDataFromIndex][useDataFromSubIndex][0];
        let sentances = haystack.split('.');
        if (sentances.length > 0) {
            sentances.splice(0, lookForNthSegment);
            for (let sentance of sentances) {
                if (letterCount <= approxLength) {
                    letterCount += sentance.length;
                    phrase += sentance;
                } 
            }
            if (phrase.length > approxLength) {
                phrase = phrase.substr(0, approxLength) + '...';
            }
        }
        else {
            phrase = haystack.split(' ').filter(word => {
                letterCount += word.length;
                if (letterCount <= approxLength) {
                    return true
                }
                return false
            }).join(' ');
        }
        useDataFromIndex = (useDataFromIndex+1)%(data.length-1);
        if (useDataFromIndex === 0) {
            useDataFromSubIndex = (useDataFromSubIndex+1)%3;
            if (useDataFromSubIndex === 0) {
                lookForNthSegment++;
            }
        }
        yield phrase;
    }
}
