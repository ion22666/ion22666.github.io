import FeaturedProject from '../../blocks/projects/featured';

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title';

import css from '../../../../assets/styles/scss/sections/projects/featured.module.scss';
const content = [
    {
        project: 'PRESNOIR',
        url: 'https://dev.performaker.ro/server/presnoir',
        repo: 'Private',
        descriptionTitle: 'Data Management in the Cloud',
        description:
            'PresNoir is a cloud-based data management system designed for effortless storage, retrieval, and analysis of large data sets. It provides organized data, real-time collaboration, and powerful search tools—a perfect choice for businesses and research institutions embracing cloud technology for efficient data management',
        imageOptions: [],
        images: [{ key: 'presnoir', hover: 'right', h: '300', w: '700', url: '/img/Screenshot 2023-10-0a4 150854.png' }],
        stack: [
            { key: 'googlecloud', name: 'Google Cloud Platform (GCP)', type: 'devicon' },
            { key: 'nodejs', name: 'Node.js', type: 'devicon' },
            { key: 'postgresql', name: 'Postgresql', type: 'devicon' },
            { key: 'docker', name: 'Docker', type: 'devicon' },
            { key: 'python', name: 'Python', type: 'devicon' },
            { key: 'javascript', name: 'JavaScript', type: 'devicon' },
            { key: 'typescript', name: 'TypeScript', type: 'devicon' },
            { key: 'nestjs', name: 'Next.js', type: 'devicon' },
            { key: 'html5', name: 'HTML5', type: 'devicon' },
            { key: 'css3', name: 'CSS3', type: 'devicon' },
        ],
    },
    {
        project: 'GIONIFY',
        url: 'https://gionify-v2.vercel.app/',
        repo: 'Private',
        descriptionTitle: 'An Spotify Client like',
        description: 'built on Next.js and serverless frameworks. A fast and responsive single page application.',
        imageOptions: [{ key: 'size', value: 'large' }],
        images: [{ key: 'portfolio', hover: 'right', h: '330', w: '330', url: '/img/gionify.png' }],
        stack: [
            { key: 'nextjs', name: 'Next.js', type: 'devicon' },
            { key: 'react', name: 'React', type: 'devicon' },
            { key: 'nodejs', name: 'Node.js', type: 'devicon' },
            { key: 'postgresql', name: 'Postgresql', type: 'devicon' },
            { key: 'supabase', name: 'Supabase', type: 'devicon' },
            { key: 'javascript', name: 'JavaScript', type: 'devicon' },
            { key: 'typescript', name: 'TypeScript', type: 'devicon' },
            { key: 'html5', name: 'HTML5', type: 'devicon' },
            { key: 'css3', name: 'CSS3', type: 'devicon' },
            { key: 'tailwindcss', name: 'TailwindCSS', type: 'devicon' },
            { key: 'git', name: 'Git(Hub)', type: 'devicon' },
        ],
    },
    {
        project: 'Vremea',
        url: 'https://vremea-md.vercel.app/',
        repo: 'Private',
        descriptionTitle: 'Where Forecast Meets Precision',
        description: 'built on Next.js, stay ahead of the weather with our app.',
        imageOptions: [{ key: 'size', value: 'large' }],
        images: [{ key: 'portfolio', hover: 'right', h: '300', w: '700', url: '/img/vremea.png' }],
        stack: [
            { key: 'nextjs', name: 'Next.js', type: 'devicon' },
            { key: 'react', name: 'React', type: 'devicon' },
            { key: 'nodejs', name: 'Node.js', type: 'devicon' },
            { key: 'javascript', name: 'JavaScript', type: 'devicon' },
            { key: 'typescript', name: 'TypeScript', type: 'devicon' },
            { key: 'html5', name: 'HTML5', type: 'devicon' },
            { key: 'css3', name: 'CSS3', type: 'devicon' },
            { key: 'tailwindcss', name: 'TailwindCSS', type: 'devicon' },
            { key: 'git', name: 'Git(Hub)', type: 'devicon' },
        ],
    },
    {
        project: 'Albion Online Price Inspector',
        url: 'https://github.com/ion22666/PriceChecker-AO',
        repo: 'Public',
        descriptionTitle: 'A tool to check item prices on Albion Online game',
        description: 'built on Express and React, get real-time Albion Online item prices and market insights!',
        imageOptions: [],
        images: [{ key: 'presnoir', hover: 'right', h: '230', w: '430', url: '/img/aopricechecker.png' }],
        stack: [
            { key: 'nodejs', name: 'Node.js', type: 'devicon' },
            { key: 'express', name: 'Express.js', type: 'devicon' },
            { key: 'mongodb', name: 'MongoDB', type: 'devicon' },
            { key: 'react', name: 'React', type: 'devicon' },
            { key: 'javascript', name: 'JavaScript', type: 'devicon' },
            { key: 'typescript', name: 'TypeScript', type: 'devicon' },
            { key: 'html5', name: 'HTML5', type: 'devicon' },
            { key: 'css3', name: 'CSS3', type: 'devicon' },
            { key: 'chartjs', name: 'ChartJS', type: 'devicon' },
        ],
    },
    {
        project: 'Givazy',
        url: 'https://github.com/ion22666/GivazyChat',
        repo: 'Public',
        descriptionTitle: 'A real time chat app inspired by Discord',
        description: 'built on Next.js and Express, connect and chat effortlessly with friends and groups',
        imageOptions: [{ key: 'size', value: 'large' }],
        images: [{ key: 'portfolio', hover: 'right', h: '230', w: '430', url: '/img/givazy.png' }],
        stack: [
            { key: 'nodejs', name: 'Node.js', type: 'devicon' },
            { key: 'mongodb', name: 'MongoDB', type: 'devicon' },
            { key: 'react', name: 'React', type: 'devicon' },
            { key: 'nextjs', name: 'Next.js', type: 'devicon' },
            { key: 'javascript', name: 'JavaScript', type: 'devicon' },
            { key: 'typescript', name: 'TypeScript', type: 'devicon' },
            { key: 'html5', name: 'HTML5', type: 'devicon' },
            { key: 'css3', name: 'CSS3', type: 'devicon' },
            { key: 'socketio', name: 'Socket.io', type: 'devicon' },
        ],
    },
    {
        project: 'GIONIFY (V1)',
        url: 'https://github.com/ion22666/gionify',
        repo: 'Public',
        descriptionTitle: 'An Spotify Client like',
        description: 'built on Django and vanilla JS, modern design that enhances your listening experience.',
        imageOptions: [{ key: 'size', value: 'large' }],
        images: [{ key: 'portfolio', hover: 'right', h: '230', w: '430', url: '/img/gionify.v1.png' }],
        stack: [
            { key: 'python', name: 'Python', type: 'devicon' },
            { key: 'django', name: 'Django', type: 'devicon' },
            { key: 'javascript', name: 'JavaScript', type: 'devicon' },
            { key: 'html5', name: 'HTML5', type: 'devicon' },
            { key: 'css3', name: 'CSS3', type: 'devicon' },
            { key: 'sass', name: 'Sass', type: 'devicon' },
            { key: 'git', name: 'Git(Hub)', type: 'devicon' },
        ],
    },
];

{
    /* Featured Projects */
}
export default function RegularProjects() {
    return (
        <Section classProp={css.hasBg}>
            <Container spacing={'verticalXXXXLrg'}>
                <SectionTitle title="Featured Projects" preTitle="UX and Full Stack" subTitle="Focused on the experience, driven by the engineering." />{' '}
                {content.map((data, index) => {
                    return <FeaturedProject content={data} index={index} key={index} />;
                })}
            </Container>
            <div className={css.bgContainer}>
                <span className={css.orbitalBg}>
                    <span className={`${css.bgSection}`}>
                        <span className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}></span>
                    </span>
                    <span className={`${css.bgSection}`}>
                        <span className={`${css.bgInner} ${css.heroCenter}`}></span>
                    </span>
                    <span className={`${css.bgSection}`}>
                        <span className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}></span>
                    </span>
                </span>
                <span className={css.afterGlowBg}></span>
            </div>
        </Section>
    );
}
