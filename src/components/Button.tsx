import React from 'react';

type ButtonProps = {
    name: string
    callBack:(title:string)=>void
    setTitle:(title:string)=> void
}

export const Button = (props:ButtonProps) => {

    const onClickButtonHandler = () => {
        props.callBack('')
        props.setTitle('')
    }

    return (
        <div>
            <button onClick={onClickButtonHandler}>{props.name}</button>
        </div>
    );
};

