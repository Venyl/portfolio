import Image from 'next/image';
import styles from './MainContent.module.css';
import heroImg1 from '@lib/assets/hero-img1.svg';
import heroImg2 from '@lib/assets/hero-img2.svg';
import dreampad from '@lib/assets/dreampad2.png';
import gamebox from '@lib/assets/gamebox.png';
import zawodowe from '@lib/assets/zawodowe.png';
import flagGuesser from '@lib/assets/flag_guesser.png';
import ProjectCard from '../ProjectCard/ProjectCard';
import { Icon } from '@iconify-icon/react';
import SkillBadge from '../SkillBadge/SkillBadge';

export default function MainContent() {
    const projects = [
        {
            title: 'Zawodowe.it',
            imgSrc: zawodowe,
            description:
                'A guide on how to pass the INF.03 and INF.04 vocational exams in Poland.',
            tags: ['Vue', 'VuePress', 'Markdown', 'Sass'],
            link: 'https://zawodowe.it/',
        },
        {
            title: 'Dreampad',
            imgSrc: dreampad,
            description:
                'A note creating app which uses a WYSIWYG editor similar to Microsoft Word.',
            tags: [
                'React',
                'Next.js',
                'Pocketbase',
                'Tailwind CSS',
                'TypeScript',
            ],
            link: 'https://dreampad2.netlify.app/',
        },
        {
            title: 'GameBox',
            imgSrc: gamebox,
            description:
                'A fun website which includes 4 popular games: Tic Tac Toe, Snake, Wordle and Hangman.',
            tags: ['Svelte', 'SvelteKit', 'TypeScript'],
            link: 'https://venyl-gamebox.netlify.app/',
        },
        {
            title: 'Flag Guesser',
            imgSrc: flagGuesser,
            description:
                'A simple flag guessing game which sharpens your world knowledge.',
            tags: ['React', 'REST', 'Tailwind CSS', 'TypeScript'],
            link: 'https://venyl-flag-guesser.netlify.app/',
        },
    ];

    return (
        <main className={styles.main}>
            <div className={styles.hero}>
                <div className={styles.hero_left}>
                    <h1 className={styles.hero_text}>
                        <span className={styles.greeting}>
                            Hello! My name is{' '}
                        </span>
                        <span className={`${styles.name} gradient`}>Dawid</span>
                    </h1>
                    <p className={styles.description}>
                        I am a <b>front-end</b> developer based in Poland.
                        <br /> I have been learning programming for over{' '}
                        <b>4 years</b>.
                    </p>
                    <button className="cta-btn">Contact Me</button>
                </div>
                <div className={styles.hero_right}>
                    <Image
                        src={heroImg1}
                        alt="vector image of a computer"
                        width={700}
                        height={600}
                    />
                    <Image
                        src={heroImg2}
                        alt="vector image of a computer"
                        width={700}
                        height={600}
                    />
                </div>
            </div>

            <h2 className={`${styles.my_websites} gradient`}>
                My websites are...
            </h2>
            <div className={styles.cards}>
                <div>
                    <h2>
                        <Icon icon="tabler:accessible" width="32" height="32" />
                        Accessible
                    </h2>
                    <p>
                        Accessibility is crucial. Everyone should be able to
                        access the web with ease.
                    </p>
                </div>
                <div>
                    <h2>
                        <Icon
                            icon="tabler:settings-bolt"
                            width="32"
                            height="32"
                        />
                        Functional
                    </h2>
                    <p>
                        Robust functionality and performance is key to ensuring
                        a smooth user experience.
                    </p>
                </div>

                <div>
                    <h2>
                        <Icon icon="tabler:sparkles" width="32" height="32" />
                        Beautiful
                    </h2>
                    <p>
                        An engaging interface and visually appealing aesthetics
                        are critical.
                    </p>
                </div>
                <div>
                    <h2>
                        <Icon
                            icon="tabler:device-mobile-check"
                            width="32"
                            height="32"
                        />
                        Responsive
                    </h2>
                    <p>
                        Every website should be functional in a wide range of
                        devices.
                    </p>
                </div>
            </div>

            <h2 id="projects" className={`${styles.my_projects} gradient`}>
                Some of my work
            </h2>
            <div className={styles.projects}>
                {projects.map(project => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>

            <h2 id="skills" className={`${styles.my_skills} gradient`}>
                What I know
            </h2>
            <div className={styles.skills}>
                <SkillBadge icon="tabler:brand-html5" skill="HTML" />
                <SkillBadge icon="tabler:brand-css3" skill="CSS" />
                <SkillBadge icon="tabler:brand-javascript" skill="JavaScript" />
                <SkillBadge icon="tabler:brand-typescript" skill="TypeScript" />
                <SkillBadge icon="tabler:api" skill="REST" />
                <SkillBadge icon="tabler:brand-git" skill="Git" />
                <SkillBadge icon="nonicons:node-16" skill="Node" />
                <SkillBadge icon="tabler:brand-react" skill="React" />
                <SkillBadge icon="tabler:brand-nextjs" skill="Next.js" />
                <SkillBadge icon="tabler:brand-redux" skill="Redux" />
                <SkillBadge icon="tabler:brand-prisma" skill="Prisma" />
                <SkillBadge icon="tabler:sql" skill="SQL" />
                <SkillBadge icon="tabler:brand-svelte" skill="Svelte" />
                <SkillBadge icon="tabler:brand-sass" skill="Sass" />
            </div>
        </main>
    );
}
