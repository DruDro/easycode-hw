class Figure {
  constructor(angles = 1){
    this.angles = angles;
    this.abstract = true;
  }
  getInfo (){
    return {angles: this.angles, abstract: this.abstract}
  }
}

class Triangle extends Figure {
  constructor(angles, name = 'trianle'){
    super(angles);
    this.abstract = false;
    this.name = name;
  }
  getInfo() {
    const props = super.getInfo();
    props.name = this.name;
    return props;
  }
}
