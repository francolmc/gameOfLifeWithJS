const initialUniverse = (widthUniverse, heightUniverse) => {
    const universe = [];
    for(let XAxis = 0; XAxis < widthUniverse; XAxis++) {
            const row = [];
        for(let YAxis = 0; YAxis < heightUniverse; YAxis++) {
            row[YAxis] = 0;//Math.random() < 0.5 ? 0 : 1;
        }
        universe.push(row);
    }
    
    universe[48][51] = 1;
    universe[49][49] = 1;
    universe[49][51] = 1;
    universe[51][50] = 1;
    universe[52][51] = 1;
    universe[53][51] = 1;
    universe[54][51] = 1;
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

const evaluateUniverse = (universe, widthUniverse, heightUniverse) => {
    for(let XAxis = 0; XAxis < widthUniverse; XAxis++) {
        for(let YAxis = 0; YAxis < heightUniverse; YAxis++) {
            if(isCellAlive(universe, XAxis, YAxis, widthUniverse, heightUniverse))
                universe[XAxis][YAxis] = 1;
            else
                universe[XAxis][YAxis] = 0;
        }
    }
    return universe;
};

const isCellAlive = (universe, XAxis, YAxis, widthUniverse, heightUniverse) => {
    countCell = 0;
    if(((XAxis - 1) >=0) && ((YAxis - 1)>=0))
        if(universe[XAxis-1][YAxis-1] === 1) countCell++;
    if((XAxis-1)>=0)
        if(universe[XAxis-1][YAxis] === 1) countCell++;
    if(((XAxis - 1) >=0) && ((YAxis + 1) < heightUniverse))
        if(universe[XAxis-1][YAxis+1] === 1) countCell++;
    if(((YAxis + 1) < heightUniverse))
        if(universe[XAxis][YAxis+1] === 1) countCell++;
    if(((XAxis + 1) < widthUniverse) && ((YAxis + 1) < heightUniverse))
        if(universe[XAxis+1][YAxis+1] === 1) countCell++;
    if(((XAxis + 1) < widthUniverse))
        if(universe[XAxis+1][YAxis] === 1) countCell++;
    if(((XAxis + 1) < widthUniverse) && ((YAxis - 1) <= 0))
        if(universe[XAxis+1][YAxis-1] === 1) countCell++;
    if(((YAxis -1) <= 0))
        if(universe[XAxis][YAxis-1] === 1) countCell++;

    if(universe[XAxis][YAxis] === 1) {
        if((countCell === 2) || (countCell === 3)) return true;
        if(countCell > 3) return false;
    } else {
        if(countCell === 3) return true;
    }
    return false;
};

// Inicio del programa
const WidthUniverse = 100;
const HeightUniverse = 100;
let universe = []

const startUniverse = () => {
    const context = getCanvasContext();
    universe = initialUniverse(WidthUniverse, HeightUniverse);
    console.log(universe);
    paintCanvasUniverse(context, universe, WidthUniverse, HeightUniverse);
}

const continuousProcess = () => {
    const context = getCanvasContext();
    clearUniverse(context, WidthUniverse, HeightUniverse);
    universe = evaluateUniverse(universe, WidthUniverse, HeightUniverse);
    paintCanvasUniverse(context, universe, WidthUniverse, HeightUniverse);
};

startUniverse();

setInterval(() => continuousProcess(), 500);