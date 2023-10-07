import Section from '../../structure/section';
import Container from '../../structure/container';

import Image from 'next/image';
import SectionTitle from '../../blocks/section.title';

import Icon from '../../utils/icon';

import css from '../../../../assets/styles/scss/sections/articles/recent.module.scss';
import docs from '../../../content/docs/featured.json';
import React from 'react';

export default function Recent({}) {
    return (
        <Section classProp="borderBottom">
            {/* @ts-ignore */}
            <Container spacing={'verticalXXXXLrg'}>
                <SectionTitle title="Contact Me" preTitle="" subTitle="get in touch with me" />
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem' }}>
                    <img style={{ width: '100%', flex: '1', minWidth: '30rem' }} src="/img/undraw_programming_re_kg9v.svg" />
                    <div style={{ width: '100%', flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h4>{'leave me a message'}</h4>
                        <form action="https://submit-form.com/Mpd6gauk" style={{ width: '100%', flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                            <input style={{ width: '100%', padding: '.5rem', margin: '1rem', outline: '3px solid gray', borderRadius: '.5rem' }} type="text" id="name" name="name" placeholder="Name" required />
                            <input style={{ width: '100%', padding: '.5rem', margin: '1rem', outline: '3px solid gray', borderRadius: '.5rem' }} type="email" id="email" name="email" placeholder="Email" required />
                            <textarea style={{ width: '100%', padding: '.5rem', margin: '1rem', outline: '3px solid gray', borderRadius: '.5rem', textAlign: 'center' }} id="message" name="message" placeholder="Message" required></textarea>
                            <button style={{ cursor: 'pointer', padding: '.5rem', margin: '1rem', outline: '3px solid gray', borderRadius: '.5rem', backgroundColor: '#272729' }} type="submit">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="2rem" fill="currentColor" className="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                            <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z" />
                            <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" />
                        </svg>
                        <h3 style={{ height: 'fit-content' }}>ionmocanu2266@gmail.com</h3>
                    </div>
                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="2rem" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                            <path
                                fill-rule="evenodd"
                                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                            />
                        </svg>
                        <h3 style={{ height: 'fit-content' }}>+373 688 437</h3>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
