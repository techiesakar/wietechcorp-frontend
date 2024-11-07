import React from 'react'
import WidgetTitle from './widget-title'
import { WidgetsLinkItems } from './widgets-list-items'
const data = [
    {
        title: "Business Travel",
        href: "/"
    },
    {
        title: "Group Travel",
        href: "/"
    }, {
        title: "MICE",
        href: "/"
    }
    , {
        title: "VIP Travel",
        href: "/"
    }
]
const ServicesWidget = () => {
    return (
        <div>
            <WidgetTitle title='Our Services' />
            <WidgetsLinkItems data={data} />
        </div>
    )
}

export default ServicesWidget