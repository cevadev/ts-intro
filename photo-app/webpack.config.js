module.exports = {
    //mode: indicamos que se empaqueta el proyecto para instalarlo en un servidor
    mode: "production",
    //entry: punto de entrada para webpack, nuestro archivo main.ts
    entry: "./src/main.ts",
    devtool: "inline-source-map",
    module: {
        rules: [
        {
            test: /\.ts$/,
            use: "ts-loader",
            exclude: /node_modules/,
        },
        ],
    },
    //especificamos las extensiones que soportamos dentro del proyecto
    resolve: {
        extensions: [".ts", ".js"],
    },
    //indicamos el nombre del archivo resutante
    output: {
        filename: "bundle.js",
    },
};
