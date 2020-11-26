const calculator = {
  firstValue: 0,
  secondValue: 0,
  result: document.querySelector("#result"),
  getValues() {
    this.firstValue = parseInt(document.querySelector("#first-value").value);
    this.secondValue = parseInt(document.querySelector("#second-value").value);
  },
  sum() {
    this.getValues();
    this.result.innerHTML = this.firstValue + this.secondValue;
  },
  subtraction(){
    this.getValues();
    this.result.innerHTML = this.firstValue - this.secondValue;
  },
  multiplication(){
    this.getValues();
    this.result.innerHTML = this.firstValue * this.secondValue;
  },
  division() {
    this.getValues();
    this.result.innerHTML = this.firstValue / this.secondValue;
  },
};
