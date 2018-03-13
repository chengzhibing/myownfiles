module.exports={
    entry:__dirname+'/app/main.js',//唯一的入口文件
    output:{
        path:__dirname+'/public',//输出文件的目录
        filename:'bundle.js'//打包后输出文件的文件名
    },
    devtool:'eval-source-map',//生成调试文件
    devServer:{
        contentBase:'./public',//设置服务器的根目录
        historyApiFallback:true,//不跳转
        inline:true,//实时刷新
        port:3000//设置端口号
    },
    module:{
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,loader: "style-loader!css-loader"
            }
        ]
    }
}