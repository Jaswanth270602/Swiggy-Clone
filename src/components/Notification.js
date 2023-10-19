import React, { useEffect, useState } from 'react';

const Notification = ({ message }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisible(false);
        }, 2000); 

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <div className={`notification ${visible ? 'visible' : ''}`}>
            <p>{message}</p>
        </div>
    );
}

export default Notification;
