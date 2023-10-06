import React from 'react';
import StackPill from '../StackPill/StackPill';
import * as logos from '../../assets/logos/logos';

function StackPillsCard() {
    return (
        <div>           
            <StackPill 
                logoComponent={<logos.ReactLogo />}
                logoLabel="React.js"
            />
            <StackPill 
                logoComponent={<logos.JavaScriptLogo />}
                logoLabel="JavaScript ES6+"
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
            <StackPill 
                logoComponent={<logos.GIMPLogo />}
                logoLabel="GIMP"
            />  
            <StackPill 
                logoComponent={<logos.VSCodeLogo />}
                logoLabel="VS Code"
            />  
        </div>
    );
}

export default StackPillsCard;