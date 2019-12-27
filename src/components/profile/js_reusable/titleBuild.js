import React from 'react';

function TitleBuild(props) {
const title_text = props.text;
const title_details = props.details;
const TitleTier = `h${props.tier}`;

switch(props.typeset) {
    case "": var Typeset = "div"; break;
    default: Typeset = props.typeset;
}

return (
    <div>
        <TitleTier style={{display: 'inline', margin: 'inherit'}}>
            {title_text}
        </TitleTier>
        <p style={{display: 'inline'}}>
            <Typeset style={{float: 'right'}}>
                {title_details}
            </Typeset>
        </p>
    </div>
    );
}
    
export default TitleBuild;