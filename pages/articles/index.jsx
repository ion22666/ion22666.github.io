import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';

const Recent = dynamic(import('../../src/components/sections/articles/recent'));

import Color from '../../src/components/utils/page.colors';

import colors from '../../src/content/articles/_colors.json';
import settings from '../../src/content/_settings.json';
import TitleArticles from './title.articles';

//this is the article page
export default function Articles() {
    {
        /*this will return the article page content from medium using api req*/
    }
    const [mediumArticles, setMediumArticles] = useState({ items: [] });
    useEffect(() => {
        (async () => {
            const [mediumRSS] = await Promise.all([fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${settings.username.medium}`)]);

            let [mediumArticles] = await Promise.all([mediumRSS.json()]);
            setMediumArticles(mediumArticles || []);
        })();
    });

    return (
        <>
            <TitleArticles />
            <Color colors={colors} />
            <Recent mediumArticles={mediumArticles} />
        </>
    );
}
