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
import Icon from '../utils/icon.tsx';
import Badges from '../utils/badge.list';

import badges from '../../../assets/styles/scss/blocks/badges.module.scss';

export default function BadgesBlock({ title, copy, list, fullContainer, block, icon, invertedColor, headerIcon, containerClass }) {
    return (
        <div className={`${badges.badgeBlockContainer} ${containerClass}`}>
            <span className={headerIcon}>
                <Icon icon={['fat', icon]} />
            </span>
            <h3>{title}</h3>
            <Copy copy={copy} />
            <Badges list={list} block={block} invertedColor={invertedColor} fullContainer={fullContainer} />
        </div>
    );
}

function Copy({ copy }) {
    if (copy) return <p>{copy}</p>;
}