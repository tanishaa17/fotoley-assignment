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
import { useState, useEffect } from 'react';


interface ImageDetails {
    image: string;
    details: string;
}
export const Home = () => {

    const [currrIndex, setCurrIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false)
    // const [isPaused, setIsPaused] = useState(false)
    const detail = "Details"
    const img: ImageDetails[] = [
        { image: '/assets/images/img13.jpg', details: detail },
        { image: '/assets/images/img5.jpg', details: detail },
        { image: '/assets/images/img11.jpg', details: detail },
        { image: '/assets/images/img12.jpg', details: detail },
        { image: '/assets/images/img4.jpg', details: detail },
        { image: '/assets/images/img6.webp', details: detail },
        { image: '/assets/images/img9.jpg', details: detail },
        { image: '/assets/images/img10.jpg', details: detail },
        { image: '/assets/images/img3.jpg', details: detail },

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

    useEffect(() => {
        let id: NodeJS.Timer;
        if (isPlaying) {
            id = setInterval(() => {
                setCurrIndex((prevInd) => {
                    return prevInd == img.length - 1 ? 0 : prevInd + 1;
                })
            }, 1000)
        }
        return () => {
            clearInterval(id)
        }
    }, [isPlaying, img])

    return (
        <Card sx={{ boxShadow: 'none', borderRadius: 0 }} >
            <Card sx={{ boxShadow: 'none', borderRadius: 0, display: 'flex' }} >
                <CardMedia
                    component="img"
                    sx={{ width: 600 }}
                    image={img[currrIndex].image}
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
                </Box>
            </Card>

            <Card sx={{ boxShadow: 'none', borderRadius: 0, display: 'flex' }} >
                <Card sx={{ boxShadow: 'none', borderRadius: 0 }} >
                    <IconButton aria-label="play/pause">
                        <NavigateBeforeIcon onClick={handlePrevious} sx={{ height: 38, width: 38 }} />
                    </IconButton>
                    {img.map((img, ind) => {
                        return (
                            <img key={ind} src={img.image} height="100px" style={{
                                cursor: "pointer", filter: currrIndex === ind ? 'none' : 'grayscale(100%)',
                            }} />
                        )
                    })}
                    <IconButton aria-label="play/pause">
                        <NavigateNextIcon onClick={handleNext} sx={{ height: 38, width: 38 }} />
                    </IconButton>
                </Card>
                <Box sx={{ display: 'flex', alignItems: 'center', }}>

                    <IconButton onClick={handlePlayPauseButton} aria-label="play/pause">
                        {isPlaying ? <PauseIcon sx={{ height: 38, width: 38 }} /> : <PlayArrowIcon sx={{ height: 38, width: 38 }} />}
                    </IconButton>
                </Box>
            </Card>
        </Card>
    );
}


