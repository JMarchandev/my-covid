import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginRight: 25
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    date: {
        fontSize: 12
    }
});

export default function CardTicker(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const country = props.country

    return (
        <Card className={classes.root}>
            <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                    <p>{country.TotalConfirmed} cas recencés.</p>
                </Typography>
                <Typography variant="h5" component="h2">
                    {country.Country}{bull}{country.CountryCode}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {country.TotalDeaths} décès
                </Typography>
                <Typography className={classes.date} color="textSecondary">
                    <p>{country.Date}</p>
                </Typography>
            </CardContent>
        </Card>
    );
}

/*
Country: "Barbados"
CountryCode: "BB"
Date: "2020-11-22T14:18:39Z"
NewConfirmed: 2
NewDeaths: 0
NewRecovered: 0
Premium: {}
Slug: "barbados"
TotalConfirmed: 255
TotalDeaths: 7
TotalRecovered: 241
*/