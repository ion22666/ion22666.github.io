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
import { Player } from '@lottiefiles/react-lottie-player';

function LoadingScreen() {
    return (
        <div className="loading-screen">
            <div className="centered-image">
                <Player
                    autoplay
                    loop
                    src="/lottie/laptop.json"
                    style={{
                        width: '80%',
                        height: '80%',
                        maxWidth: '800px',
                        maxHeight: '800px',
                    }}
                />
            </div>
            <div className="bottom-right-image">
                <Player
                    autoplay
                    loop
                    src="/lottie/loadcode.json"
                    style={{
                        width: '80px',
                        height: '80px',
                    }}
                />
            </div>
        </div>
    );
}

export default LoadingScreen;