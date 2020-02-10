import React from 'react';

const MoodRadioButton = (props) => {
    return (
        <div className={props.alignmentClass}>
            <div>
                <label htmlFor={props.id}><img className={props.ImageClass} src={props.labelImage} alt={props.label} /></label>
            </div>
            <div>
                <input id={props.id} name={props.name} onChange={props.changed} value={props.value} type="radio" checked={props.isSelected} />
                <label className={props.labelClass} htmlFor={props.id}>{props.label}</label>
            </div>
            
        </div>
    );
}

export default MoodRadioButton