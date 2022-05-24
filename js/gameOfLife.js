const WidthUniverse = 500;
const HeightUniverse = 500;

const initialUniverse = (widthUniverse, heightUniverse) => {
    const universe = [];
    for(let XAxis = 0; XAxis < widthUniverse; XAxis++) {
            const row = [];
        for(let YAxis = 0; YAxis < heightUniverse; YAxis++) {
            row[YAxis] = Math.random() < 0.5 ? 0 : 1;
        }
        universe.push(row);
    }
    return universe;
};

const getCanvasContext = () => {
    const canvas = document.getElementById('cellularuniverse');
    const context = canvas.getContext("2d");
    return context;
}

const paintPixelCanvas = (canvasContext, color, XPixel, YPixel) => {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(XPixel, YPixel, 1, 1);
};

const clearUniverse = (canvasContext, widthUniverse, heightUniverse) => {
    for(let XAxis = 0; XAxis < widthUniverse; XAxis++) {
        for(let YAxis = 0; YAxis < heightUniverse; YAxis++) {
            paintPixelCanvas(canvasContext, '#fff', XAxis, YAxis);
        }
    }
};

const paintCanvasUniverse = (canvasContext, universe, widthUniverse, heightUniverse) => {
    for(let XAxis = 0; XAxis < widthUniverse; XAxis++) {
        for(let YAxis = 0; YAxis < heightUniverse; YAxis++) {
            if(universe[XAxis][YAxis] === 1)
                paintPixelCanvas(canvasContext, '#000', XAxis, YAxis);
            else
                paintPixelCanvas(canvasContext, '#fff', XAxis, YAxis);
        }
    }
};

const evaluateUniverse = () => {};

const evaluateCell = () => {};

const continuousProcess = () => {
    const universe = initialUniverse(WidthUniverse, HeightUniverse);
    const context = getCanvasContext();
    paintCanvasUniverse(context, universe, WidthUniverse, HeightUniverse);
    //clearUniverse(context, WidthUniverse, HeightUniverse);
};

setInterval(() => continuousProcess(), 1000);