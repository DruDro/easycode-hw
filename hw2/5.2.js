class Component {
  constructor(tagName = 'div') {
    this.node = document.createElement(tagName);
  }
  setText(text) {
    this.node.textContent = text;
  }
}
