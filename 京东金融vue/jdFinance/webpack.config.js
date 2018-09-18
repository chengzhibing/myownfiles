const path = require('path');
const webpack= require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const VueLoaderPlugin=require('vue-loader/lib/plugin');
const cleanWebpackPlugin=require('clean-webpack-plugin');
const ExtractTextPlugin=require('extract-text-webpack-plugin');
module.exports= env=>{
    if(!env){
        env={};
    }
    let plugins=[
        new HtmlWebpackPlugin({
            title:'京东金融',
            template:'./app/views/index.html'
        }),
        new VueLoaderPlugin(),
        new cleanWebpackPlugin(),
    ];
    if(env.production){ //生产环境添加插件
        plugins.push(
            new ExtractTextPlugin('style.css'),
            new webpack.DefinePlugin({
                'process.env':{
                    'NODE_ENV':'production'
                }
            })
        )
    }
    return{
        mode:'development', 
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
                    test:/\.vue$/,
                    loader:'vue-loader',
                    options:{
                        loaders:env.production?{//生产环境
                            css:ExtractTextPlugin.extract({
                                use:'css-loader!px2rem-loader?remUnit=75&remPrecision=8',
                                fallback:'style-loader'
                            })
                        }:{//非生产环境
                            test:/\.css$/,
                            loader:'style-loader!css-loader!px2rem-loader?remUnit=75&remPrecision=8'
                       }
                    }
                },
                {
                    test:/\.scss$/,
                    loader:'style-loader!css-loader!sass-loader!px2rem-loader?remUnit=75&remPrecision=8'
                }
                
            ]
        },
        resolve:{
            alias:{
                'vue$':'vue/dist/vue.js'
            }
        },
        plugins:plugins//或者省略后面的键值
    }
}
