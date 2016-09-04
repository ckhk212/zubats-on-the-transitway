'use strict';

const axisAlignedBoundingBox = (x : number[], y : number[]) : number => {
    const minX : number = Math.min(...x);
    const maxX : number = Math.max(...x);
    const minY : number = Math.min(...y);
    const maxY : number = Math.max(...y);

  	return (maxX - minX) * (maxY - minY);
}

export default axisAlignedBoundingBox;
