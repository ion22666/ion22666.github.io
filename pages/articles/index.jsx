/*
 * Copyright (c) 2023 [Ion Mocanu](https://github.com/ion-mocanu/)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS.md OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

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
