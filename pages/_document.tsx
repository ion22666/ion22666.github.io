import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';
import React from 'react';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/*
				Author: Ion Mocanu
                 GitHub: Visit the GitHub repository at https://github.com/ion-mocanu/portfolio/ for more details.
                 license: MIT License
                  */}
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
                <title>Ion Mocanu</title>
                <meta name="description" content="Ion Mocanu - A dedicated Full Stack Developer proficient in App/Web, Cloud, DevOps, AL/ML, and Design. Join my journey." />

                {/*These are need for PWA*/}
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="Ion Mocanu" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
                <meta name="msapplication-tap-highlight" content="no" />

                <meta name="theme-color" content="#000000" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="1 days" />
                <link rel="canonical" href="https://ionmocanu.com" />
                <meta name="license" content="MIT License" />
                <meta httpEquiv="content-language" content="en-us" />

                <link rel="preconnect" href="https://ionmocanu.com" />

                <link rel="dns-prefetch" href="https://ionmocanu.com" />

                <meta name="author" content="Ion Mocanu" />

                <link rel="alternate" hrefLang="en" href="https://ionmocanu.com" />

                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <meta name="bingbot" content="index, follow" />

                <link rel="apple-touch-icon" href="/img/logo_rounded.png" />

                <link rel="apple-touch-icon" sizes="180x180" href="/img/logo_rounded.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon.ico" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon.jpg" />
                <link rel="icon" href="/favicon/favicon-org.ico" type="image/x-icon"></link>
                <link rel="shortcut icon" href="/favicon/favicon-org.ico" type="image/x-icon"></link>

                <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
                <link rel="manifest" href="/manifest.json" />

                <meta property="og:title" content="Ion Mocanu" key="title" />
                <meta property="og:description" content="Ion Mocanu - A dedicated Full Stack Developer proficient in App/Web, Cloud, DevOps, AI/ML, and Design. Join my journey." />
                <meta property="og:image" content="https://avatars.githubusercontent.com/u/75434191?v=4" />
                <meta property="og:image:secure_url" content="https://avatars.githubusercontent.com/u/75434191?v=4" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:image:alt" content="Ion Mocanu" />
                <meta property="og:image:width" content="300" />
                <meta property="og:image:height" content="300" />
                <meta property="og:url" content="https://ionmocanu.com" />
                <meta property="og:type" content="website" />
                <meta property="og:profile" content="https://github.com/ion-mocanu" />
                <meta property="og:site_name" content="Ion Mocanu" />
                <meta property="og:locale" content="en_US" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="https://twitter.com/ionmocanu_" />
                <meta name="twitter:title" content="Ion Mocanu" />
                <meta name="twitter:description" content="Ion Mocanu - A dedicated Full Stack Developer proficient in App/Web, Cloud, DevOps, AI/ML, and Design. Join my journey." />
                <meta name="twitter:image" content="https://avatars.githubusercontent.com/u/75434191?v=4" />
                <meta name="twitter:creator" content="https://twitter.com/ionmocanu_" />
                <meta name="twitter:domain" content="https://ionmocanu.com" />

                <link rel="apple-touch-startup-image" href="/img/logo_rounded.png" sizes="2048x2732" />
                <link rel="apple-touch-startup-image" href="/img/logo_rounded.png" sizes="1668x2224" />
                <link rel="apple-touch-startup-image" href="/img/logo_rounded.png" sizes="1536x2048" />
                <link rel="apple-touch-startup-image" href="/img/logo_rounded.png" sizes="1125x2436" />
                <link rel="apple-touch-startup-image" href="/img/logo_rounded.png" sizes="1242x2208" />
                <link rel="apple-touch-startup-image" href="/img/logo_rounded.png" sizes="750x1334" />
                <link rel="apple-touch-startup-image" href="/img/logo_rounded.png" sizes="640x1136" />

                {/*These are the Keywords that will Boost your SEO in Ranking, so Make Sure to include and Update it up to your preference or don't mind this! 😴*/}
                <meta
                    name="keywords"
                    content="
    Ion Mocanu, Full Stack Engineer, Full Stack Developer, DevOps Engineer, Software Engineer,
    Programmer, Software Developer, Portfolio Website, Web Developer, Coding, Full Stack Development,
    Technology Enthusiast, Software Development, Computer Science, Programming Projects,
    Frontend Developer, Backend Developer, Software Development Portfolio, Student,
    Full Stack Web Developer, Ion Mocanu Portfolio, Coding Projects, Tech Portfolio,
    Web Development, DevOps Professional, Ion Mocanu Projects, Software Engineer Portfolio,
    IT Professional, Technology Projects, Software Development Engineer, Computer Programmer,
    Code Portfolio, Technology Student, Software Architect, Cloud Computing,
    DevOps Specialist, Software Engineering Projects, Coding Portfolio,
    Full Stack Engineer Portfolio, Ion Mocanu Web Developer,
    Software Development Student, Coding Enthusiast, DevOps Portfolio, Programming Portfolio,
    Ion Mocanu DevOps, IT Portfolio, Web Developer Portfolio, Ion Mocanu Developer,
    Full Stack Engineer Ion Mocanu, Ion Mocanu Coding, Ion Mocanu IT,
    Ion Mocanu Full Stack Developer, Ion Mocanu Software Engineer, Ion Mocanu DevOps Engineer,
    Ion Mocanu Programming, Ion Mocanu Software Development, Ion Mocanu Coding Projects,
    Ion Mocanu Tech Portfolio, Ion Mocanu IT Portfolio, Ion Mocanu Software Engineer Portfolio,
    Ion Mocanu Web Developer Portfolio, Ion Mocanu DevOps Portfolio, Ion Mocanu Full Stack Engineer,
    Ion Mocanu Full Stack Developer Portfolio, Ion Mocanu Coding Portfolio, Ion Mocanu Programming Portfolio,
    Ion Mocanu Software Development Portfolio, Ion Mocanu Technology Projects,
    Ion Mocanu Computer Science, Ion Mocanu Cloud Computing, Ion Mocanu IT Professional,
    Ion Mocanu Technology Enthusiast, Ion Mocanu Computer Programmer, Ion Mocanu Code Portfolio,
    Ion Mocanu Technology Student, Ion Mocanu Software Architect,mocanu,mocanu portfolio,mocanu devops,mocanu devops engineer,
    mocanu devops portfolio,mocanu devops projects,mocanu devops specialist,mocanu devops professional,mocanu devops engineer portfolio,
    mocanu devops engineer projects,mocanu devops engineer specialist,mocanu devops engineer professional,mocanu devops engineer coding,
    mocanu devops engineer coding projects,mocanu devops engineer coding portfolio,mocanu devops engineer coding specialist,
    Open Source Contributor,open source,open source projects,open source portfolio,open source contributions,
    open source contributions portfolio,open source contributions projects,open source contributions coding,
    open source contributions coding projects,open source contributions coding portfolio,open source contributions coding specialist,
    open source contributions coding professional,open source contributions coding engineer,open source contributions coding developer,
    open source contributions coding student,open source contributions coding enthusiast,open source contributions coding architect,
    open source contributions coding projects portfolio,open source contributions coding projects specialist,

"
                />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Ion Mocanu",
          "url": "https://ionmocanu.com",
          "sameAs": [
            "https://github.com/ion-mocanu",
            "https://www.linkedin.com/in/ion-mocanu-",
            "https://medium.com/@ion-mocanu",
            "https://twitter.com/ionmocanu_",
            "https://dev.to/ionmocanu"
          ]
        }`,
                    }}
                />

                {/*Edit this to your according FAQ */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Have you worked on any projects?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, in addition to my personal projects and hobbies, I have worked on several projects, both individually and in teams. These projects have allowed me to apply theoretical knowledge to real-world scenarios, honing my practical skills in software development, web technologies, and computer networks."
                }
              },
              {
                "@type": "Question",
                "name": "Can we recruit you?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, I am currently looking for jobs and I have also done several open-source projects as well."
                }
              },
              {
                "@type": "Question",
                "name": "Who is Ion Mocanu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ion Mocanu is a Full Stack Developer specializing in Cloud, DevOps, ML/AI, and Design. He is passionate about programming, innovation, and shaping the future. With expertise in various technologies and a strong background in software development, Ion Mocanu strives to create innovative solutions and contribute to the advancement of technology. His skill set includes proficiency in cloud computing, DevOps practices, machine learning/artificial intelligence, and design principles. Ion Mocanu is dedicated to staying up-to-date with the latest industry trends and leveraging his knowledge to drive impactful and transformative projects."
                }
              },
              {
                "@type": "Question",
                "name": "Where is Ion Mocanu from?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ion Mocanu is from Chişinău, Republic of Moldova, India."
                }
              },
              {
                "@type": "Question",
                "name": "What does Ion Mocanu do?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ion Mocanu leverages Cloud, DevOps, ML/AI, Design, and web/mobile apps to benefit people with optimized operations and user-friendly experiences."
                }
              }
            ]
          }
        `,
                    }}
                />

                {/*Edit this to your according to your website*/}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `
          {
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://ionmocanu.com/"
            },{
              "@type": "ListItem",
              "position": 2,
              "name": "Docs",
              "item": "https://ionmocanu.com/docs"
            },{
              "@type": "ListItem",
              "position": 3,
              "name": "Articles",
              "item": "https://ionmocanu.com/articles"
            },{
              "@type": "ListItem",
              "position": 4,
              "name": "Projects",
              "item": "https://ionmocanu.com/projects"
            },{
              "@type": "ListItem",
              "position": 5,
              "name": "Sign In",
              "item": "https://ionmocanu.com/signin"
            }]
          }
        `,
                    }}
                />

                {/*Edit this to your according to your website*/}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `
          {
            "@context": "https://schema.org",
            "@type": "ResearchProject",
            "name": "NeuroLink",
            "description": "NeuroLink is a Python package that aims to provide various AI capabilities, including a chatbot, image processing, audio processing, Django support, and more. It utilizes TensorFlow and other related technologies for natural language processing and AI tasks.",
            "alternateName": "neurolink",
            "url": "https://github.com/ion-mocanu/neurolink",
            "logo": "https://private-user-images.githubusercontent.com/75434191/242214243-82fbf702-43e2-46e6-8e01-11758fa26310.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTQ4NTE2ODksIm5iZiI6MTY5NDg1MTM4OSwicGF0aCI6Ii83NTQzNDE5MS8yNDIyMTQyNDMtODJmYmY3MDItNDNlMi00NmU2LThlMDEtMTE3NThmYTI2MzEwLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzA5MTYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMwOTE2VDA4MDMwOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQ3NjJmNzA5MGU5NWY4NTUxZTcxYmVmNzNlZTYzOTViN2FjNzE1YTM2MjM1OTNlOGIxNzk0ODE1NDczMDMzNGEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.ay5bRLRoojQ33ZJLFnvjyq6Dq4qZfDY7quvv4WmgRLI",
             "sameAs": [
            "https://www.linkedin.com/in/ion-mocanu-/"
        ]          }
        `,
                    }}
                />
                {/*theme*/}
                <Script id="theme.util.jsx" strategy="beforeInteractive">
                    {`
				let themeLocalStorage = localStorage.getItem('theme')
				let themeSystem       = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
				document.querySelector(':root').dataset.theme = themeLocalStorage ?? themeSystem
				`}
                </Script>

                {/* Google Analytics -> make sure to change the analytics key with yours here */}
                <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-SDJ0K1Y70X" />
                <Script
                    id="google-analytics"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-SDJ0K1Y70X', {
            page_path: window.location.pathname,
          });
        `,
                    }}
                />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
