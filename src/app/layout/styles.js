const styles = theme => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: '#673ab7'

    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
        textAlign: 'left',
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
});

export default styles;