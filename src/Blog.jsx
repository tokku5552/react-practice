import React from 'react';
import Article from './Article';

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPublished: false,
        }
    }

    toggledPublish = () => {
        this.setState({
            isPublished: !this.state.isPublished
        })
    };
    render() {
        return (
            <>
                <Article title={'Reactの使い方'} isPublished={this.state.isPublished} toggle={()=>this.toggledPublish()}/>
            </>

        )
    }
}

export default Blog