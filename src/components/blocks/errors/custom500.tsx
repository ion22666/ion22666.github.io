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
import React from 'react';
import { useRouter } from 'next/router';
import { Player } from '@lottiefiles/react-lottie-player';

function Custom500() {
    const router = useRouter();

    const handlerefresh = () => {
        window.location.reload(); // refresh page
    };

    return (
        <div className="image404">
            <div className="area">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="centered-image404">
                <Player
                    autoplay
                    loop
                    src="/lottie/looking.json"
                    style={{
                        width: '50%',
                        height: '50%',
                        maxWidth: '800px',
                        maxHeight: '800px',
                    }}
                />
                <h1 className="not-found-title404">500 - Internal Server Error Occurred!</h1>
                <p className="not-found-text404">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Oops! It seems like you've stumbled upon server error on my portfolio website.
                </p>
                <p style={{ fontSize: '14px' }}>
                    If you think this issues or bugs, please report them <a href="https://github.com/ion-mocanu/portfolio/issues/new">@ion-mocanu</a>
                </p>
                <button className="go-back-button404" onClick={handlerefresh}>
                    Refresh Page
                </button>
            </div>
            <div className="anim">
                <div className="ufo">
                    <Player
                        autoplay
                        loop
                        src="/lottie/ufo.json"
                        style={{
                            width: '80px',
                            height: '80px',
                        }}
                    />
                </div>
                <div className="ghost">
                    <Player
                        autoplay
                        loop
                        src="/lottie/ghost.json"
                        style={{
                            width: '80px',
                            height: '80px',
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Custom500;
