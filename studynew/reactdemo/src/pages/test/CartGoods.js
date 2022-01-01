import React, {Component} from "react"
class CartGoods extends Component{
    constructor(props) {
        super(props);

        this.state = {
          goods: [
              {id: 1, name: "前端课程"},
              {id: 2, name: "java课程"}
          ],
          text: "",
          cart: []
        }
        this.addGoods = this.addGoods.bind(this)
    }
    addGoods() {
      if(!this.state.text) {
        return false;
      }
      this.setState((preState) => {
        return {
          goods: [
              ...preState.goods,
              {
                  id: preState.goods.length + 1,
                  name: preState.text
              }
          ]
        }
      })
    }
    addToCart = (good) => {
        console.log(good)
      //生成新的数组
      let newCart = [...this.state.cart]
      const item = newCart.find(c => c.id === good.id);
      if(item) {
        item.count = item.count + 1;
        console.log(item)
      }else {
        newCart.push({...good, count: 1})
      }
      this.setState({
          cart: newCart
      })
    }
    //当输入商品的时候
    textChange = (e)=> {
        this.setState((preState) => {
            return {
               text: e.target.value 
            }
        })
    }
    minus = (good) => {
      const newCart = [...this.state.cart]
      const item = newCart.find((c) => {
        return c.id = good.id;
      })
      if(item) {
         item.count = item.count === 0 ? 0 : item.count -1;
      }
      this.setState({
          cart: newCart
      })
    }
    add = (good) =>{
      const newCart = [...this.state.cart];
      const item = newCart.find((c) => {
          return c.id === good.id;
      })
      if(item) {
          item.count = item.count + 1;
      }
      this.setState({
          cart: newCart
      })
    }
    render() {
        return(<div>
              {/* 条件判断 */}
              {this.props.title && <h1>{this.props.title}</h1>}
              <div>
                  <input type="text" value={this.state.text} onChange={this.textChange}/>
                  <button onClick={this.addGoods}>添加商品</button>
              </div>
              <ul>
                  {this.state.goods.map((good) => {
                    return <li key={good.id}>{good.name}<button onClick={() => this.addToCart(good)}>加购物车</button></li>
                  })}
              </ul>
              <Cart data = {this.state.cart} minus={this.minus} add = {this.add}/>
          </div>)
    }
}
function Cart({data, minus, add}) {
    return <div>
        <table>
            <tbody>
                {data.map((d) => {
                    return <tr key={d.id}>
                        <td>{d.name}</td>
                        <td>
                            <button onClick={()=> minus(d)}>-</button>
                            {d.count}
                            <button onClick={() => add(d)}>+</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
}
export default CartGoods;