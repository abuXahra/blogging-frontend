import React from 'react';

const Post = () => {
    return (
        <div className="post">

            <img className="post-image" src="https://techcrunch.com/wp-content/uploads/2022/12/rocket-lab-electron-virginia.jpeg?w=1390&crop=1" alt="" />

            <div className="post-text">
                <h2>Rocket Lab to launch a pair of climate satellites for NASA</h2>
                <p className="info">
                    <a href="" className="author">Dawid Paszko</a>
                    <time>2023-01-6 16:45</time>
                </p>
                <p className="summary">Rocket Lab will launch two small satellites for NASA that could help scientists better understand how a warming climate will affect the massive ice shelves at the Earth’s poles.</p>
            </div>
        </div>

    );
}

export default Post;
