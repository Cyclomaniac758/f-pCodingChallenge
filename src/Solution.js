import {Input, Button, InputLabel} from '@mui/material';
import React from 'react';
import {LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line} from 'recharts';


class Solution extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        a : 0,
        b : 0,
        c : 0,
        disabled: true,
        showGraph: false,
        array: []
        };

    }
    
    submit = () => {
        let yArray = [];
        for (let x=-5; x<=5; x++) {
            yArray.push({'x': x, 'y': this.state.a*x*x+this.state.b*x+this.state.c})
        }
        this.setState({array: yArray, showGraph: true});
    }

    changeA = (e) => {
        this.state.a = Number(e.target.value);
        this.setState({a: Number(e.target.value)})
        console.log(this.state.a)
        console.log(typeof this.state.a)
        this.checkDisabled();

    }
    changeB = (e) => {
        this.state.b = Number(e.target.value);
        this.setState({b: Number(e.target.value)})
        this.checkDisabled();
    }
    changeC = (e) => {
        this.state.c = Number(e.target.value);
        this.setState({c: Number(e.target.value)})
        this.checkDisabled();
    }

    checkDisabled() {
        this.setState({disabled: (typeof this.state.a !== 'number' || typeof this.state.b !== 'number' || typeof this.state.c !== 'number')});
    }
// put regex for input error

    render() {
        return (
            <>
            <InputLabel sx={{color: "white"}}>Enter a</InputLabel>
            <Input pattern="[0-9]*" placeholder='0' onChange={this.changeA} type={"Number"} error={typeof this.state.a !== 'number' && this.state.a} 
            onKeyDown={(event) => {
                if (!((event.keyCode>=48 && event.keyCode<=57) || (event.key === "Backspace"))) {
                  event.preventDefault();
                }
              }}
            >{this.state.a}</Input>
            <InputLabel sx={{color: "white"}}>Enter b</InputLabel>
            <Input pattern="[0-9]*" placeholder='0' onChange={this.changeB} type={"Number"} error={typeof this.state.b !== 'number'}
            onKeyDown={(event) => {
                if (!((event.keyCode>=48 && event.keyCode<=57) || (event.key === "Backspace"))) {
                  event.preventDefault();
                }
              }}
              >{this.state.b}</Input>
            <InputLabel sx={{color: "white"}}>Enter c</InputLabel>
            <Input pattern="[0-9]*" placeholder='0' onChange={this.changeC} type={"Number"} error={typeof this.state.c !== 'number'}
            onKeyDown={(event) => {
                if (!((event.keyCode>=48 && event.keyCode<=57) || (event.key === "Backspace"))) {
                  event.preventDefault();
                }
              }}>{this.state.c}</Input>

            <Button onClick={this.submit} disabled={this.state.disabled} >Submit</Button>

            { this.state.showGraph &&
                <LineChart disabled={this.state.showGraph} width={400} height={250} data={this.state.array}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="y" stroke="blue" />
                </LineChart>
           }
            </>
        )
    }
}

export default Solution;