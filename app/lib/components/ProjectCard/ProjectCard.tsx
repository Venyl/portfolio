import Image, { StaticImageData } from 'next/image';
import styles from './ProjectCard.module.css';

type Props = {
    key: string;
    title: string;
    description: string;
    imgSrc: StaticImageData;
    tags: string[];
    link: string;
};

export default function ProjectCard({
    title,
    description,
    imgSrc,
    tags,
    link,
}: Props) {
    return (
        <a className={styles.project_card} href={link}>
            <div className="img-wrapper">
                <Image
                    src={imgSrc}
                    alt={title}
                    width={150 * 2.01892744479}
                    height={150}
                />
            </div>
            <div>
                <h3 className="gradient">{title}</h3>
                <p>{description}</p>
            </div>
            <ul>
                {tags.map(tag => (
                    <li key={tag}>{tag}</li>
                ))}
            </ul>
        </a>
    );
}
