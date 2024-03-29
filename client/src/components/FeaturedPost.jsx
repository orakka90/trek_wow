import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import styles from '../style.css'

function FeaturedPost(props) {
    const { post } = props;

    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" href="#">
                <Card sx={{ display: 'flex' }} onClick={() => window.location.pathname = post.route}>
                    <CardContent sx={{ flex: 1 }}>
                        <Typography component="h2" variant="h5">
                            {post.title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            {post.date}
                        </Typography>
                        <Typography variant="subtitle1" className='description_card' paragraph>
                            {post.content}
                        </Typography>
                        <Typography variant="subtitle1" color="primary">
                            Continue reading...
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                        image={post.images[0]}
                        alt={post.imageLabel}
                    />
                </Card>
            </CardActionArea>
        </Grid>
    );
}
export default FeaturedPost;