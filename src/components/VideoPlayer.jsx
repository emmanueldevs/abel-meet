import React, { useContext } from 'react'
import { Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SocketContext } from '../SocketContext';

const useStyles = makeStyles((theme) => ({
    video: {
        width: '550px',
        [theme.breakpoints.down('xs')]: {
            width: '300px',
        },
    },
    gridContainer: {
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },
    paper: {
        padding: '10px',
        border: '2px solid #0566f6',
        margin: '10px',
    },
}));

const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
    const classes = useStyles();

    return (
        <Grid container className={classes.gridContainer} >
            {/* Own Video */}
            {stream && (
                <Paper className={classes.paper} style={{ backgroundColor: "#261f36", borderRadius: "10px" }}>
                    <Grid item xs={12} md={6} >
                        <Typography variatnt="h5" gutterBottom style={{ color: "white" }}>{name || "Name"}</Typography>
                        <video playsInline muted ref={myVideo} autoPlay className={classes.video} style={{ borderRadius: "10px" }}/>
                    </Grid>
                </Paper>
            )}
            {/* Receivers Video */}
            {callAccepted && !callEnded && (
                <Paper className={classes.paper} style={{ backgroundColor: "#261f36", borderRadius: "10px" }}>
                    <Grid item xs={12} md={6} >
                        <Typography variatnt="h5" gutterBottom style={{ color: "white" }}>{call.name || "Name"}</Typography>
                        <video playsInline ref={userVideo} autoPlay className={classes.video} style={{ borderRadius: "10px" }}/>
                    </Grid>
                </Paper>
            )}
        </Grid>
    )
}

export default VideoPlayer
