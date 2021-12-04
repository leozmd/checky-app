import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

export default function Clases(props) {
    return ( <
        div className = { `clases ${css(styles.group, styles.group_layout)}` } >

        <
        /div>
    );
}

Clases.inStorybook = true;

const styles = StyleSheet.create({
    group: {
        display: 'flex',
        backgroundColor: 'rgb(244,240,246)'
    },
    group_layout: {
        position: 'relative',
        overflow: 'hidden',
        minHeight: 731,
        flexGrow: 1
    }
});