const path = require('path')

module.exports={
    entry:{
        app:'./app/js/main.js'
    },
    output:{
        filename:'[name].min.js',
        path:path.resolve(__dirname,'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
     },
    module:{
        rules:[
            {
                test:/\.html$/,
                loader:'html-loader'
            },
            {
                text:/\.vue$/,
                loder:'vue-loader'
            },
            {
                text:/\.scss$/,
                loder:'vue-style-loader!css-loader!sass-loader'
            }
        ]
    },
    plugins:[]

}
