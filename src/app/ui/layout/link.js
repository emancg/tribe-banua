'use client';

import * as React from 'react';
import Link from 'next/link';

export default function StyledLink(props) {
    const { children } = props;
    return (
        <Link
            style={{
                textDecoration: 'none',
                // color: 'red',
                // fontSize: 30,
                // fontStyle: 'italic',
            }}
            href={props.linkRef}> {children}
        </Link>
    );
}