import { Icon } from '@iconify-icon/react';
import styles from './SkillBadge.module.css';

type Props = {
    icon: string;
    skill: string;
};

export default function SkillBadge({ icon, skill }: Props) {
    return (
        <span className={styles.skill_badge_container}>
            <Icon className={styles.skill_badge} icon={icon} />
            <p className="gradient">{skill}</p>
        </span>
    );
}
