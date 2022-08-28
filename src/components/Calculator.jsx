import React, { useState } from "react";
import "./Calculator.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [oldResult, setOldResult] = useState(0);
  const [operator, setOperator] = useState(0);

  const inputNum = (e) => {
    var input = e.target.value;
    if (result === 0) {
      setResult(input);
    } else {
      setResult(result + input);
    }
  };

  const deleteResult = () => {
    setResult(0);
  };

  const porcentage = (e) => {
    setResult(result / 100);
  };

  const changeSign = () => {
    if (result > 0) {
      setResult(-result);
    } else {
      setResult(result * -1);
    }
  };

  const operatorHandler = (e) => {
    var operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldResult(result);
    setResult(0);
  };

  const calculate = () => {
    if (operator === "/") {
      setResult(oldResult / result);
    }
    if (operator === "+") {
      setResult(+oldResult + +result);
    }
    if (operator === "-") {
      setResult(oldResult - result);
    }
    if (operator === "X") {
      setResult(oldResult * result);
    }
  };

  return (
    <>
      <Box m={5} />
      <Container maxWidth={"xs"}>
        <div className="wrapper">
          <Box m={8} />
          <h1 className="result">{result}</h1>
          <button onClick={deleteResult}>AC</button>
          <button onClick={changeSign}>+/-</button>
          <button onClick={porcentage}>%</button>
          <button onClick={operatorHandler} value={"/"} className="colorOrange">
            /
          </button>
          <button onClick={inputNum} value={7} className="colorGray">
            7
          </button>
          <button onClick={inputNum} value={8} className="colorGray">
            8
          </button>
          <button onClick={inputNum} value={9} className="colorGray">
            9
          </button>
          <button onClick={operatorHandler} value={"X"} className="colorOrange">
            X
          </button>
          <button onClick={inputNum} value={4} className="colorGray">
            4
          </button>
          <button onClick={inputNum} value={5} className="colorGray">
            5
          </button>
          <button onClick={inputNum} value={6} className="colorGray">
            6
          </button>
          <button onClick={operatorHandler} value={"-"} className="colorOrange">
            -
          </button>
          <button onClick={inputNum} value={1} className="colorGray">
            1
          </button>
          <button onClick={inputNum} value={2} className="colorGray">
            2
          </button>
          <button onClick={inputNum} value={3} className="colorGray">
            3
          </button>
          <button onClick={operatorHandler} value={"+"} className="colorOrange">
            +
          </button>
          <button onClick={inputNum} value={0} className="colorGray zero">
            0
          </button>
          <button onClick={inputNum} value={"."} className="colorGray">
            ,
          </button>
          <button onClick={calculate} className="colorOrange">
            =
          </button>
        </div>
      </Container>
    </>
  );
};

export default Calculator;
