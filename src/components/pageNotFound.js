import React from 'react';
import { Grid, Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import _ from 'lodash'

import {pageTextAttrObjArr} from "../constants"

const useStyles = makeStyles({
    topMargin: {
      marginTop: '10%'
    },
});

export const PageNotFound = (props) => {
    const classes = useStyles()
    const templateObj = props.pageTemplateObj || pageTextAttrObjArr
    return (
        <div>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={12} className={classes.topMargin}>
                    {
                        _.map(templateObj, (attr) => (
                            <Typography
                                component={attr.component}
                                variant={attr.variant}
                                color={attr.color}
                                align="center"
                                gutterBottom={attr.gutterBottom}
                            >
                                {attr.text}
                                {attr.htmlText || null}
                            </Typography>
                        ))
                    }
                </Grid>
            </Grid>
        </div>
    )
}
