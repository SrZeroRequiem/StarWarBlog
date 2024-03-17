import React, { useState } from 'react';

const ScrollableParagraph = (props) => {
    const [scrollTop, setScrollTop] = useState(0);
    const desc = props.desc
    const handleScroll = (event) => {
        const { deltaY } = event.nativeEvent;
        setScrollTop((prevScrollTop) => prevScrollTop + deltaY);
    };

    return (
        <p
            className="text-start mt-4 card-text scrollbar"
            style={{ overflowY: 'scroll' }}
            onWheel={handleScroll}
        >
            {desc}
        </p>
    );
};

export default ScrollableParagraph;