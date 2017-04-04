
class MyOtherComponent extends Component {
  render() {
    return this.t('Welcome to Chad.js')
  }
}

class App extends Component {
  render() {
    return this.h('h1', () => (
      new MyOtherComponent(this.doc).render()
    ));
  }
}