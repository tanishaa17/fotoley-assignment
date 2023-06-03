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
    const detail = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Contrary to popular belief, Lorem Ipsum is not simply random text. "
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

    const visibleImages = [
        img[(currrIndex + img.length - 2) % img.length],
        img[(currrIndex + img.length - 1) % img.length],
        img[currrIndex],
        img[(currrIndex + 1) % img.length],
        img[(currrIndex + 2) % img.length],
    ];

    return (
        <Card sx={{ boxShadow: 'none', border: "none", p: "2%", }} >
            <Card sx={{ boxShadow: 'none', border: "none", display: 'flex', gap: "20px" }} >
                <CardMedia
                    component="img"
                    sx={{ height: '400px', width: "55%", borderRadius: "20px" }}
                    image={img[currrIndex].image}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', width: "42%" }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h4">
                            Detailed Info
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" textAlign="left">
                            {detail}
                        </Typography>
                    </CardContent>
                </Box>
            </Card>

            <Card sx={{ boxShadow: 'none', border: "none", display: 'flex', paddingTop: 3, paddingLeft: 0 }} >
                <Card sx={{ boxShadow: 'none', borderRadius: 0, display: 'flex', justifyContent: "center", alignItems: "center", }} >
                    <IconButton aria-label="play/pause" >
                        <NavigateBeforeIcon onClick={handlePrevious} sx={{ height: 40, width: 40 }} />
                    </IconButton>
                    {visibleImages.map((img, ind) => {
                        return (
                            <img onClick={() => setCurrIndex((currrIndex + ind - 2) % 10)} key={ind} src={img.image} height="80px" width="120px" style={{
                                cursor: "pointer", filter: ind === 2 ? 'none' : 'grayscale(100%)', borderRadius: "10px", padding: "5px"
                            }} />
                        )
                    })}
                    <IconButton aria-label="play/pause">
                        <NavigateNextIcon onClick={handleNext} sx={{ height: 40, width: 40 }} />
                    </IconButton>
                </Card>
                <Box sx={{ display: 'flex', alignItems: 'center', }}>

                    <IconButton onClick={handlePlayPauseButton} aria-label="play/pause">
                        {isPlaying ? <PauseIcon sx={{ height: 40, width: 40 }} /> : <PlayArrowIcon sx={{ height: 40, width: 40 }} />}
                    </IconButton>
                </Box>
            </Card>
        </Card >
    );
}

