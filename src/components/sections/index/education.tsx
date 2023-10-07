// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title';

// Career scss
import career from '../../../../assets/styles/scss/sections/index/career.module.scss';

export default function Education() {
    return (
        <Section classProp={`${career.section} borderBottom`}>
            <Container spacing={['verticalXXXLrg']}>
                <SectionTitle title="Education" preTitle="Formal" subTitle="I am currently studying computer science at the Free International University of Moldova." />
                <section className={career.area}>
                    <article className={career.company}>
                        <div className={career.companyContent}>
                            <span className={career.companyHeader}>
                                <h3>Free International University of Moldova</h3>
                                <h5>Chişinău, Republic of Moldova</h5>
                            </span>
                            <p>I am currently pursuing my Bachelors degree in Computer Science and Engineering at Free International University of Moldova. This four-year program offers a comprehensive curriculum that covers various aspects of computer science and its applications.</p>
                        </div>
                        <div className={career.companyAlt}></div>
                    </article>
                </section>
            </Container>
        </Section>
    );
}
