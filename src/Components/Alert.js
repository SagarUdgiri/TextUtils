import React from 'react';

const Alert = (props) => {
    const capitalize=word => {
        const text=word.toLowerCase()
        return text.charAt(0).toUpperCase()+text.slice(1)+' ';
    }
    return (
            props.alert && <div class={`alert alert-${props.alert.Type} alert-dismissible fade show`} role="alert">                
                <strong>{capitalize(props.alert.Type)}</strong>{props.alert.msg}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
    );
}

export default Alert;
