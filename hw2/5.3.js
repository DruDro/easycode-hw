class Component {
  constructor(tagName = 'div') {
    this.node = document.createElement(tagName);
  }
  setText(text) {
    this.node.textContent = text;
  }
}


class InputComponent extends Component {
  constructor(tagName, placeholder = 'Enter text') {
    super(tagName);
    this.placeholder = placeholder;
  }
  setText(text) {
    this.node.value = text;
  }
}
