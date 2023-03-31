import React, { useState } from 'react'
import "./calc.css"

export default function Calculator() {
    const [result, setResult] = useState(" ");
    // const [calc, setCalc] = useState(" ");
    let calc = '';
    let ops = ["+", "/", "*", "."]
    // const handleClick = (e)=> {
    //     // if ())
    //     setResult(result.concat(e.target.className));
    // }
    const allClear = () => {
        setResult("")
    }
    const backSpace = () => {
        setResult(result.slice(0, result.length - 1))
    }
    const result_ = () => {
        var rst= global.Function(result)
        setResult(rst)
    }
    const updateOpe = value => {
        // || (ops.includes(value) && ops.includes(result.slice(-1)))
        if ((ops.includes(value) && result === "")|| (ops.includes(value) && ops.includes(result.slice(-1)))) { return };
        setResult(result + value)
    }
    const updateCalc = value => {
        setResult(result + value)
    }
    const updateSin = value => {
        let r = Math.sin(value * Math.PI / 180);
        setResult(r)
    }
    const updateCos = value => {
        let r = Math.cos(value * Math.PI / 180);
        setResult(r)
    }
    const updateTan = value => {
        let r = Math.tan(value * Math.PI / 180);
        setResult(r)
    }
    const updatePi = value => {
        let r = Math.PI;
        setResult(r)
    }
    const updateLog = value => {
        let r = Math.log10(value);
        setResult(r)
    }
    const updateExp = () => {
        let r = Math.E;
        setResult(r)
    }
    const updateSquare = value => {
        let r = Math.pow(value, 2);
        setResult(r)
    }
    const updateSqrt = value => {
        let r = Math.sqrt(value);
        setResult(r)
    }
    const updateValue = value => {
        if (value < 0) {
            let r = Math.abs(value);
            setResult(r)
        }
        else { setResult("-" + value) }
    }
    const updateFact = value => {
        if (value < 0) {
            setResult("Not Possible")
        }

        // if number is 0
        else if (value === 0) {
            setResult(1)
            // console.log(`The factorial of ${fact} is 1.`);
        }

        // if number is positive
        else {
            let fact = 1;
            for (let i = 1; i <= value; i++) {
                fact *= i;
            }
            // console.log(`The factorial of ${value} is ${fact}.`);
            setResult(fact)
        }
    }
    return (
        <div className="calcContainer" >
            <form className="calculator" name="calc" autoComplete="off">
                <input type="text" className="value" value={result} {...result ? <span>{result}</span> : ""} {...calc || "0"} />
                <span onClick={allClear} id="allClear">AC</span>
                <span id="operator" onClick={() => updateFact(result)}> X!</span>
                <span name="(" onClick={() => updateCalc('(')} className="(" id="operator">(</span>
                <span name=")" onClick={() => updateCalc(')')} className=")" id="operator">)</span>
                <span name="%" onClick={() => updateOpe('%')} id="operator">%</span>
                <span name="C" onClick={backSpace} id="clear">C</span>
                <span name="sin" onClick={() => updateSin(result)} id="operator">sin</span>
                <span name="" onClick={() => updatePi()} id="operator">&pi;</span>
                <span name="" onClick={() => updateSqrt(result)} id="operator"><div style={{ position: "relative", bottom: "0.2em", right: "0.1em", fontSize: "12px" }}>2</div><div style={{ position: "relative", bottom: "0.2em", right: "0.1em", fontSize: "24px" }}>&#8730;</div></span>
                <span name="7" onClick={() => updateCalc('7')} className="7">7</span>
                <span name="8" onClick={() => updateCalc('8')} className="8">8</span>
                <span name="9" onClick={() => updateCalc('9')} className="9">9</span>
                <span name="/" onClick={() => updateOpe('/')} className="/" id="operator">/</span>
                <span name="" onClick={() => updateCos(result)} id="operator">cos</span>
                <span name="" onClick={() => updateLog(result)} id="operator">log</span>
                <span name="" onClick={() => updateExp()} id="operator">e</span>
                <span name="4" onClick={() => updateCalc('4')} className="4">4</span>
                <span name="5" onClick={() => updateCalc('5')} className="5">5</span>
                <span name="6" onClick={() => updateCalc('6')} className="6">6</span>
                <span name="*" onClick={() => updateOpe('*')} className="*" id="operator">X</span>
                <span name="" onClick={() => updateTan(result)} id="operator">tan</span>
                <span name="" onClick={() => updateValue(result)} id="operator">+/-</span>
                <span name="" onClick={() => updateSquare(result)} className="num" id="sup_operator"><div style={{ position: "relative", bottom: "0.1em", right: "0.1em", fontSize: "22px" }}>x</div><div style={{ position: "relative", bottom: "1.6em", right: "-0.6em", fontSize: "16px" }}>2</div></span>
                <span name="1" onClick={() => updateCalc('1')} className="1" >1</span>
                <span name="2" onClick={() => updateCalc('2')} className="2">2</span>
                <span name="3" onClick={() => updateCalc('3')} className="3">3</span>
                <span name="+" onClick={() => updateOpe('+')} className="+" id="operator">+</span>
                <span name="0" onClick={() => updateCalc('0')} className="0">0</span>
                <span name="00" onClick={() => updateCalc('00')} className="00" id="operator">00</span>
                <span name="." onClick={() => updateOpe('.')} className="." id="operator">.</span>
                <span name="" onClick={result_} id="result">=</span>
                <span name="-" onClick={() => updateOpe('-')} className="-" id="operator">-</span>
            </form>
        </div>
    )
}
