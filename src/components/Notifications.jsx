import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { SocketContext } from '../SocketContext';

const Notifications = () => {
    const { answerCall, call, callAccepted } = useContext(SocketContext)
    return (
        <>
            {call.isReceivedCall && !callAccepted && (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Typography variant="h6" align="center" style={{ fontSize: "20px" }}>{call.name} want to join the meeting</Typography>
                    <Button variant="contained" color="primary" onClick={answerCall}>Admit</Button>
                </div>
            )}
        </>
    )
}

export default Notifications
