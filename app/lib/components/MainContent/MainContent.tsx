import Image from 'next/image';
import styles from './MainContent.module.css';
import heroImg from '@lib/assets/hero-img.svg';
import dreampad from '@lib/assets/dreampad2.png';
import gamebox from '@lib/assets/gamebox.png';
import zawodowe from '@lib/assets/zawodowe.png';
import flagGuesser from '@lib/assets/flag_guesser.png';
import ProjectCard from '../ProjectCard/ProjectCard';

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
                <div>
                    <Image
                        src={heroImg}
                        alt="vector image of a computer"
                        width={900}
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
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                        >
                            <g
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                            >
                                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0" />
                                <path d="m10 16.5l2-3l2 3m-2-3v-2l3-1m-6 0l3 1" />
                                <circle
                                    cx="12"
                                    cy="7.5"
                                    r=".5"
                                    fill="currentColor"
                                />
                            </g>
                        </svg>
                        Accessible
                    </h2>
                    <p>
                        Accessibility is crucial. Everyone should be able to
                        access the web with ease.
                    </p>
                </div>
                <div>
                    <h2>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                        >
                            <g
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                            >
                                <path d="M13.256 20.473c-.855.907-2.583.643-2.931-.79a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c1 .608 2.296.07 2.572-1.065c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.07.26 1.488 1.29 1.254 2.15M19 16l-2 3h4l-2 3" />
                                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0" />
                            </g>
                        </svg>
                        Functional
                    </h2>
                    <p>
                        Robust functionality and performance is key to ensuring
                        a smooth user experience.
                    </p>
                </div>

                <div>
                    <h2>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2-2a2 2 0 0 1-2-2a2 2 0 0 1-2 2zm0-12a2 2 0 0 1 2 2a2 2 0 0 1 2-2a2 2 0 0 1-2-2a2 2 0 0 1-2 2zM9 18a6 6 0 0 1 6-6a6 6 0 0 1-6-6a6 6 0 0 1-6 6a6 6 0 0 1 6 6z"
                            />
                        </svg>
                        Beautiful
                    </h2>
                    <p>
                        An engaging interface and visually appealing aesthetics
                        are critical.
                    </p>
                </div>
                <div>
                    <h2>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M11.5 21H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9.5M11 4h2m-1 13v.01M15 19l2 2l4-4"
                            />
                        </svg>
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
        </main>
    );
}
