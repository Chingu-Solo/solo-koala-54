import React from 'react';
import FontTile from '../components/FontTile';
import './styles/Featured.css';

function Featured() {
    return (
        <main className="featured">
            <section className="featured__roboto featured__font">
                <FontTile className="roboto__tile" font="Roboto" displayCharacters="^%$ Roboto Android LCD countdown 4" fontSizes={[2,8,12,24]} />
                <div>
                <header>
                    <h1>Roboto</h1>
                </header> 
                <p title="Source: https://en.wikipedia.org/wiki/Roboto">Roboto is the default font on Android, and since 2013, other Google services such as Google+, Google Play, YouTube, Google Maps, and mobile Google Search.
                        In 2017 Roboto was used on the LCD countdown clocks of the New York City Subway's B Division lines.
                        Roboto Bold is the default font in Unreal Engine 4, and in Kodi. Roboto Condensed is used to display Information on European versions of Nintendo Switch packaging, including physical releases of games.
                </p>
                </div>
                <FontTile className="roboto__tile" font="Roboto" displayCharacters="^%$ Roboto Android LCD countdown 4" fontSizes={[2,8,12,24]} />
            </section>
            <section className="featured__noto-fonts featured__font">
                <FontTile className="noto-fonts__tile" font="Noto-fonts" displayCharacters="*^$ Noto 100 Unicode SIL" fontSizes={[4,8,16,32]} />
                <div>
                    <header>
                        <h1>Noto fonts</h1>
                    </header>
                    <p>Noto is a font family comprising over 100 individual fonts, which are together designed to cover all the scripts encoded in the Unicode standard. As of October 2016, Noto fonts cover all 93 scripts defined in Unicode version 6.0 (released 2010), although fewer than 30,000 of the nearly 75,000 CJK unified ideographs in version 6.0 are covered.</p>
                </div>
                <FontTile className="noto-fonts__tile" font="Noto-fonts" displayCharacters="*^$ Noto 100 Unicode SIL" fontSizes={[4,8,16,32]} />
                <p>In total Noto fonts cover nearly 64,000 characters, which is under half of the 137,439 characters defined in Unicode 11.0 (released in June 2018). The Noto family is designed with the goal of achieving visual harmony (e.g., compatible heights and stroke thicknesses) across multiple languages/scripts. Commissioned by Google, the font is licensed under the SIL Open Font License. Until September 2015, the fonts were under the Apache License 2.0.</p>
                <FontTile className="noto-fonts__tile" font="Noto-fonts" displayCharacters="*^$ Noto 100 Unicode SIL" fontSizes={[4,8,16,32]} />
            </section>
            <section className="featured__open-sans featured__font">
            <FontTile className="open-sans__tile" font="Open-Sans" displayCharacters='(*£ Open Sans flat Google' fontSizes={[3,6,24,38]} />
                <div>
                    <header>
                        <h1>Open Sans</h1>
                    </header>
                    <p>Open Sans is popular in flat design-style web design. Open Sans is used in some of Google's web pages as well as its print and web advertisements. Its design is similar to that of Matteson's Droid Sans, created as the first user interface font for Android phones, but with wider characters and the inclusion of italic variants. It is used as Mozilla's default typeface for websites until 2019, and in the Telegram Desktop app.</p>
                </div>
                <FontTile className="open-sans__tile" font="Open-Sans" displayCharacters='(*£ Open Sans flat Google' fontSizes={[3,6,24,38]} />
                <p> It is the official font of the UK's Labour, Co-operative, and Liberal Democrat parties.[citation needed] Chase Bank uses Open Sans as its primary font for print, branches, TV, Web, and mobile apps. According to Google, it was developed with an "upright stress, open forms and a neutral, yet friendly appearance" and is "optimized for legibility across print, web, and mobile interfaces.</p>
                <FontTile className="open-sans__tile" font="Open-Sans" displayCharacters='(*£ Open Sans flat Google' fontSizes={[3,6,24,38]} />
            </section>
        </main>
    )
}

export default Featured;