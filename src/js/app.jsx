import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
      rate: 0,
      term: 15,
      output: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  calculate() {
    let b = this.state.balance;
    let r = this.state.rate * .01 / 12;
    let t = this.state.term;
    let n = t * 12;
    let top = Math.pow((1 + r), n) * r;
    let bottom = Math.pow((1 + r), n) - 1;

    this.setState({
      output: (b * (top / bottom)).toFixed(2)
    })
  }

  onChange() {
    alert("stuff happened " + this.state.balance + this.state.rate + this.state.term);
    event.preventDefault();
  }

  handleChange(e) {
    const target = e.target;
    const value = e.target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }


  render() {
    return (
      <div className='container'>
        <h3>Mortgage Calculator</h3>

        <div className="row1">
          <div className="input-type" className="col-xs-6 col-md-8">Loan Balance</div>
          <div className="user-input" className="col-xs-6 col-md-4">
            <input type="number" name="balance" value={this.state.balance} onChange={this.handleChange} />
          </div>
        </div>

        <div className="row2">
          <div className="input-type" className="col-xs-6 col-md-8">Intrest Rate (%)</div>
          <div className="user-input" className="col-xs-6 col-md-4">
            <input type="number" name="rate" step="0.01" value={this.state.rate} onChange={this.handleChange} />
          </div>
        </div>

        <div className="row3">
          <div className="input-type" className="col-xs-6 col-md-8">Loan Term (years)
          <div>
            <select name="term" value={this.state.term} onChange={this.handleChange}>
              <option value='15'>15</option>
              <option value='30'>30</option>
            </select>
            </div>
          </div>
          <div className="user-input" className="col-xs-6 col-md-4">
            <button className="submit" type="click" value="Click" name="submit"
              onClick={this.calculate}
            >Calculate</button>
          </div>
        </div>

        <div className="output row4">
          ${this.state.output} is your payment.
        </div>

      </div>
    );
  }
}