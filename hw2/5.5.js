class Table {
  constructor(rows = 1, cols = 1) {
    const rowsArr = [];
    const colsArr = [];
    for (let j = 0; j < cols; j++) colsArr.push(j + 1);
    for (let k = 0; k < rows; k++) rowsArr[k] = [...colsArr];
    this.rowsNumber = rows;
    this.colsNumber = cols;
    this.table = [...rowsArr];
  }

  getTotalCellsNumber() { return this.rowsNumber * this.colsNumber }
  setCellText(row, col, text='') {
    this.table[row-1][col-1] = text;
  }
  getCellText(row, col) {
    return this.table[row-1][col-1];
  }
  getTableInfo() {
    return {cellsNumber: this.getTotalCellsNumber(), rowsNumber: this.rowsNumber, colsNumber: this.colsNumber}
  }
  static getCellsNumber(rows, cols){
    return rows*cols;
  }
}
