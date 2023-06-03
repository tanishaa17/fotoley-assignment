import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useState } from 'react';



interface ImageDetails {
    image: string;
    details: string;
}
export const Home = () => {

    const [currrIndex, setCurrIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const detail = "Details"
    const img: ImageDetails[] = [
        { image: '/assets/images/download.jpg', details: detail },
        { image: '/assets/images/download (1).jpg', details: detail },
        { image: '/assets/images/download (2).jpg', details: detail },
        { image: '/assets/images/download (3).jpg', details: detail },
        { image: '/assets/images/download (4).jpg', details: detail },
        { image: '/assets/images/images.jpg', details: detail },
        { image: '/assets/images/images (1).jpg', details: detail },
        { image: '/assets/images/images (2).jpg', details: detail },
        { image: '/assets/images/images (3).jpg', details: detail },
        { image: '/assets/images/images (4).jpg', details: detail },
    ]
    // HANDLING PLAY AND PAUSE BUTTON
    const handlePlayPauseButton = () => {
        setIsPlaying(prevState => !prevState);
    };

    // HANDLING PREV AND NEXT BUTTON

    const handlePrevious = () => {
        setCurrIndex(prevIndex =>
            prevIndex === 0 ? img.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrIndex(prevIndex =>
            prevIndex === img.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div>
            <Card sx={{ display: 'flex' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 800 }}
                    image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            Detailed Info
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" textAlign="left">
                            {detail}
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                        <IconButton onClick={handlePlayPauseButton} aria-label="play/pause">
                            {isPlaying ? <PauseIcon sx={{ height: 38, width: 38 }} /> : <PlayArrowIcon sx={{ height: 38, width: 38 }} />}
                        </IconButton>
                    </Box>
                </Box>

            </Card>
            <IconButton aria-label="play/pause">
                <NavigateBeforeIcon onClick={handlePrevious} sx={{ height: 38, width: 38 }} />
            </IconButton>
            {img.map((img, ind) => {
                return (
                    <img key={ind} src={img.image} height="100px" style={{ cursor: "pointer" }} />
                )
            })}
            <IconButton aria-label="play/pause">
                <NavigateNextIcon onClick={handleNext} sx={{ height: 38, width: 38 }} />
            </IconButton>

        </div>
    );
}


