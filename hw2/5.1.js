class Component {
  constructor(tagName='div'){
    this.node = document.createElement(tagName);
  }
}

const comp = new Component('span');
