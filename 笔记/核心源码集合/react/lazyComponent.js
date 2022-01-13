import React from 'react';

export default function lazy(loadComponent) {
  const Fallback = () => <h1>loading...</h1>;
  const [Component, setComponent] = useState(() => Fallback);

  useEffect(() => {
    loadComponent().then(res => {
      setComponent(res.default);
    });
  }, []);

  return <Component />;
}
// 或者使⽤⾼阶函数
export default function lazy(loadComponent) {
  return class WrapComponent extends React.Component {
    state = {
      Component: () => <h1>loading...</h1>
    }
    async componentDidMount() {
      const { default: Component } = await loadComponent();
      this.setState({ Component });
    }
    render() {
      const Component = this.state.Component;
      return <Component />;
    }
  }
}