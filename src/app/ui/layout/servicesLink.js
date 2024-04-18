'use client';

import * as React from 'react';
import Link from 'next/link';

export default function ServicesLink(props) {
    const { children } = props;
    return (
        <Link
            style={{
                textDecoration: 'none',
                // color: 'red',
                // fontSize: 30,
                // fontStyle: 'italic',
                display: props.itemIndex == props.hideValue ? 'none': 'block',
            }}
            href={props.linkRef}> {children}
        </Link>
    );
}