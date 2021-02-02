import React from 'react';
import Article from './Article';

class Blog extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <Article title={'Reactの使い方'}/>
                <Article />
            </>

        )
    }
}

export default Blog