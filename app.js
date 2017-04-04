class App extends Component {
  render() {
    return this.h('h1', () => (
      this.t('Hello World')
    ));
  }
}