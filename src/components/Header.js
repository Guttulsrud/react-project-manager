import React from 'react';
import {Button} from 'react-bootstrap';

export const Header = (props) => {
    return (
        <div className="text-left mt-5">
            <h2>{props.title}</h2>
            <Button variant="primary" className="mt-4">Add {props.type}</Button>{' '}
            <Button variant="primary" className="mt-4">Remove {props.type}</Button>{' '}
        </div>
    );
}