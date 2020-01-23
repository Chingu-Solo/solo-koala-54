import React from 'react';
import './styles/Featured.css';

function Featured() {
    return (
        <main className="featured">
            <section className="featured__roboto featured__font">
                <header>
                    <h1>Roboto</h1>
                </header> 
                <p title="Source: https://en.wikipedia.org/wiki/Roboto">Roboto is the default font on Android, and since 2013, other Google services such as Google+, Google Play, YouTube, Google Maps, and mobile Google Search.
                        In 2017 Roboto was used on the LCD countdown clocks of the New York City Subway's B Division lines.
                        Roboto Bold is the default font in Unreal Engine 4, and in Kodi. Roboto Condensed is used to display Information on European versions of Nintendo Switch packaging, including physical releases of games.
                </p>
            </section>
            <section className="featured__noto-fonts featured__font">
                <header>
                    <h1>Noto fonts</h1>
                </header>
                <p>Noto is a font family comprising over 100 individual fonts, which are together designed to cover all the scripts encoded in the Unicode standard. As of October 2016, Noto fonts cover all 93 scripts defined in Unicode version 6.0 (released 2010), although fewer than 30,000 of the nearly 75,000 CJK unified ideographs in version 6.0 are covered. In total Noto fonts cover nearly 64,000 characters, which is under half of the 137,439 characters defined in Unicode 11.0 (released in June 2018).</p>
                <p>The Noto family is designed with the goal of achieving visual harmony (e.g., compatible heights and stroke thicknesses) across multiple languages/scripts. Commissioned by Google, the font is licensed under the SIL Open Font License. Until September 2015, the fonts were under the Apache License 2.0.</p>
            </section>
            <section className="featured__open-sans featured__font">
                <header>
                    <h1>Open Sans</h1>
                </header>
                <p>Open Sans is popular in flat design-style web design.</p>
                <p>Open Sans is used in some of Google's web pages as well as its print and web advertisements. Its design is similar to that of Matteson's Droid Sans, created as the first user interface font for Android phones, but with wider characters and the inclusion of italic variants. It is used as Mozilla's default typeface for websites until 2019, and in the Telegram Desktop app. It is the official font of the UK's Labour, Co-operative, and Liberal Democrat parties.[citation needed] Chase Bank uses Open Sans as its primary font for print, branches, TV, Web, and mobile apps.</p>
                <p>According to Google, it was developed with an "upright stress, open forms and a neutral, yet friendly appearance" and is "optimized for legibility across print, web, and mobile interfaces.</p>
            </section>
        </main>
    )
}

export default Featured;