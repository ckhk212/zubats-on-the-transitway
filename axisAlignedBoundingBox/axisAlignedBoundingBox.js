'use strict';

function axisAlignedBoundingBox(x, y) {
    const minX = Math.min(...x);
    const maxX = Math.max(...x);
    const minY = Math.min(...y);
    const maxY = Math.max(...y);

    return (maxX - minX) * (maxY - minY);
}

export default axisAlignedBoundingBox;
