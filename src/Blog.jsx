import React from 'react';
import Article from './Article';

const Blog = () => {
    // componentDidMount() {
    //     document.getElementById('counter').addEventListener('click', this.countUp)
    // }

    // componentDidUpdate() {
    //     if (this.state.count >= 10) {
    //         this.setState({ count: 0 })
    //     }
    // }

    // countUp = () => {
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // };

    return (
        <>
            <Article
                title={'Reactの使い方'}
            />
        </>

    )

}

export default Blog