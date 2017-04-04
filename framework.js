class Component {
  constructor(doc) {
    this.doc = doc;
  }

  h(element, child) {
    let el = this.doc.createElement(element);
    el.appendChild(child());
    return el;
  }

  t(text) {
    return this.doc.createTextNode(text);
  }
}

function mount(App, mountPoint) {
  let div = document.createElement('div');
  div.setAttribute('class', 'app');
  let app = new App(document);
  let tree = app.render();
  div.appendChild(tree);
  mountPoint.appendChild(div);
}