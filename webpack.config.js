module.exports = {
    mode: "development",
    entry: {
        index: './src/index.js'
    },
    devServer: {
        static: './dist'
    },
    optimization: {
        runtimeChunk: 'single',
    },
}