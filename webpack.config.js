const path = require('path');

module.exports = {

    optimization: {
        concatenateModules: true,
    },
    entry: {
        fullscreen: path.resolve(__dirname, "src/fullScreen.js"),
        morePhoto: path.resolve(__dirname, "src/morephoto.js"),
        switchTabs: path.resolve(__dirname, "src/switchTabs.js"),
        projFullScreen: path.resolve(__dirname, "src/projFullScreen.js")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js'
    }
};