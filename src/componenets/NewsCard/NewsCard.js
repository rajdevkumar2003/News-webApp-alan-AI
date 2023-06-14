import React from 'react'
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import useStyles from './styles'
import classNames from 'classnames'

const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, activeArticle, i}) => {
  const classes = useStyles();


  return (
    <Card  className={classNames(classes.card, activeArticle === i ? classes.activeCard : null)}>
    <CardActionArea href={url} target="_blank">
      <CardMedia className={classes.media} image={urlToImage || 'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png'} title={title} />
      <div className={classes.details}>
        <Typography  style={activeArticle === i ? {color:'grey'} : null} variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
        <Typography style={activeArticle === i ? {color:'grey'} : null} variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{title}</Typography>
      <CardContent>
        <Typography style={activeArticle === i ? {color:'#F5F5F5'} : null} variant="body2" color="textSecondary" component="p">{description}</Typography>
      </CardContent>
    </CardActionArea>
    <CardActions className={classes.cardActions}>
      <Button size="small" color="primary" href={url}>Learn More</Button>
      <Typography className={ activeArticle === i ? classes.activeText : null} variant="h5" color="textSecondary" component="h2">{i + 1}</Typography>
    </CardActions>
  </Card>
  )
}

export default NewsCard
