//helper functions
const randRange = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const randRangeF = (min, max) => {
    return Math.random() * (max - min) + min;
}
//end of helper functions

var svgMethod;

const svgTest = () => {
    return `
        <svg xmlns="http://www.w3.org/2000/svg" width="49%" height="100%" viewBox="0 0 100 100">` +
        polyl(2, 'red', 'blue', 10, 83.5, 70, 33, 40, 40) +
        path("M" + 50, 0, "L" + 75, 50, 35, 40) +
        scale(translate(rotate(rect(50, 50, 20, 20, 'red', 'none'), 25, 50, 50), 10, 10), .5, 1.2) +
        `</svg>`
        ;
}

const svg1 = () => {
    var desorders = "";
    for (var i = .6; i < 18; i++) {
        for (var j = .6; j < 18; j++) {
            for (var k = 0; k < randRangeF(6, 14); k++) {
                var randScale = Math.random();
                desorders += translate(
                    strokeW(
                        scale(
                            rotate(
                                rect(0, 0, 5, 5, 'black', 'none'),
                                randRangeF(-5, 5)),
                            randScale, randScale),
                        .1),
                    i * 5, j * 5);
            }
        }
    }

    return `
        <svg xmlns="http://www.w3.org/2000/svg" width="49%" height="100%" viewBox="0 0 100 100">` +
        desorders +
        `</svg>`
}

const svg2 = () => {
    var desorders = "";
    for (var i = .6; i < 18; i++) {
        for (var j = .6; j < 18; j++) {
            for (var k = 0; k < randRangeF(6, 14); k++) {
                var randScale = Math.random();
                desorders += translate(
                    scale(
                        rotate(
                            polyl(.1, 'black', 'none', 0, 0, 5, 0, 2.5, 5, 1, 3),
                            randRangeF(-5, 5), 2.5, 2.5),
                        randScale, randScale),
                    i * 5, j * 5);
            }
        }
    }

    return `
        <svg xmlns="http://www.w3.org/2000/svg" width="49%" height="100%" viewBox="0 0 100 100">` +
        desorders +
        `</svg>`
}

const svg3 = () => {
    var desorders = "";
    for (var i = .6; i < 18; i++) {
        for (var j = .6; j < 18; j++) {
            for (var k = 0; k < randRangeF(6, 14); k++) {
                var randScale = Math.random();
                desorders += translate(
                    scale(
                        rotate(
                            path("M" + 0, 0, "L" + 0, 5, 2.5, 2.5, 5, 5, 5, 0, 4.8, 4.5, 2.5, 2.3, .2, 4.6),
                            randRangeF(-5, 5), 2.5, 2.5),
                        randScale, randScale),
                    i * 5, j * 5);
            }
        }
    }

    return `
        <svg xmlns="http://www.w3.org/2000/svg" width="49%" height="100%" viewBox="0 0 100 100">` +
        desorders +
        `</svg>`
}

const selectChange = () => {
    document.querySelector("select").onchange = e => {
        var s = e.target.value;

        if (s == "Original") {
            svgMethod = svg1;
        }
        else if (s == "Alternate 1") {
            svgMethod = svg2;
        }
        else if (s == "Alternate 2") {
            svgMethod = svg3;
        }

        document.querySelector('svg').outerHTML = svgMethod();
    };
}

const buttonPress = () => {
    svgMethod = svg1;

    document.querySelector("button").onclick = e => {
        document.querySelector('svg').outerHTML = svgMethod();
    };
}