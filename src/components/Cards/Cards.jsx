import React from 'react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import styles from './Cards.module.css'
import Countup from 'react-countup'
import cx from 'classnames'
const Cards = ({data :{confirmed, deaths, recovered, lastUpdate}}) => {
    if (!confirmed) {
        return "Loading ..."
    }
    console.log(confirmed)
    return (
        <div className={styles.container}>
            <Grid  item component={Card} container spacing={3} justify="center" xs={12} md={3} className={cx(styles.card, styles.infected)} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                            <Countup start= {0} 
                            end={confirmed.value} 
                            duration={2.5} 
                            separator=",">
                            </Countup>
                        <Typography text="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of Covid</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} container spacing={3} justify="center" xs={12} md={3} className={cx(styles.card, styles.recovered)} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Countup start= {0} 
                            end={recovered.value} 
                            duration={2.5} 
                            separator=",">
                            </Countup>
                        <Typography text="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active recoveries of Covid</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} container spacing={3} justify="center" xs={12} md={3} className={cx(styles.card, styles.deaths)} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Countup start= {0} 
                            end={deaths.value} 
                            duration={2.5} 
                            separator=",">
                            </Countup>
                        <Typography text="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths by Covid</Typography>
                    </CardContent>
                </Grid>



        </div>

    )

}

export default Cards