import React               from "react";
import {Grid, Paper, Typography} from "@material-ui/core";
const VideoItem = ({video, onVideoSelect}) => {
    return (
        <Grid item xs={12}>
            <Paper style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}} onClick={() => onVideoSelect(video)}>
                <img style={{width: '50%', height: '100%',  marginRight: '20px'}} src={video.snippet.thumbnails.medium.url} alt="thumbnail" />
                <Typography style={{width: '50%', height: '100%'}} variant="subtitle1">
                    <b>{video.snippet.title}</b>
                </Typography>
            </Paper>
        </Grid>
    )
};

export default VideoItem;