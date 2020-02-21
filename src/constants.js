import React from 'react';

import { Link } from '@material-ui/core/';

export const pageTextAttrObjArr = [{
    component: "h2",
    variant: "h1",
    color: "inherit",
    gutterBottom: true,
    text: "404"
},{
    component: "",
    variant: "h2",
    color: "inherit",
    gutterBottom: true,
    text: "Page not found :("
},{
    component: "",
    variant: "h4",
    color: "inherit",
    gutterBottom: true,
    text: `Ooooups! Looks like you got lost.`,
    htmlText: (
        <Link href="/">
            Go to Home
        </Link>
    )
}]