import React from 'react';
import * as logos from '../../assets/logos/logos';
import styles from './StackPillsCard.module.css';
import StackPill from '../StackPill/StackPill';

function StackPillsCard() {
    return (
        <div className={styles.container}>
            <StackPill
                logoComponent={<logos.JavaScriptLogo />}
                logoLabel="JavaScript"
            />
            <StackPill
                logoComponent={<logos.ReactLogo />}
                logoLabel="React.js"
            />
            <StackPill
                logoComponent={<logos.CSS3Logo />}
                logoLabel="CSS3"
            />
            <StackPill
                logoComponent={<logos.HTML5Logo />}
                logoLabel="HTML5"
            />
            <StackPill
                logoComponent={<logos.GitLogo />}
                logoLabel="Git"
            />
            <StackPill
                logoComponent={<logos.GitHubLogo />}
                logoLabel="GitHub"
            />
            <StackPill
                logoComponent={<logos.FigmaLogo />}
                logoLabel="Figma"
            />
            {/* <StackPill
                logoComponent={<logos.GIMPLogo />}
                logoLabel="GIMP"
            />
            <StackPill
                logoComponent={<logos.VSCodeLogo />}
                logoLabel="VS Code"
            />             */}
            <StackPill
                logoComponent={<logos.TypeScriptLogo />}
                logoLabel="TypeScript"
                isInProgress={true}
            />
            <StackPill
                logoComponent={<logos.ReduxLogo />}
                logoLabel="Redux"
                isInProgress={true}
            />
        </div>
    );
}

export default StackPillsCard;