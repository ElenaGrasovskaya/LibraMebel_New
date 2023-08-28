const path = require('path');

module.exports = {

    optimization: {
        concatenateModules: true,
    },
    entry: {
        fullscreen: path.resolve(__dirname, "src/js/fullScreen.js"),
        morePhoto: path.resolve(__dirname, "src/js/morephoto.js"),
        switchTabs: path.resolve(__dirname, "src/js/switchTabs.js"),
        projFullScreen: path.resolve(__dirname, "src/js/projFullScreen.js")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js'
    }
};