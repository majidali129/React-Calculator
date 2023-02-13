import React, { useState } from 'react'
import classes from "./Calculator.module.css"
import Card from "../../../UI/Card/Card"
import Button from '../../../UI/Button/Button'
import * as math from 'mathjs'

const Calculator = () => {

  let [inputValue , setInputValue] = useState("")

  const buttonClickHandler = (event)=>{
    setInputValue(inputValue + event.target.textContent)
  }

  
  const clearHandler = ()=>{
    setInputValue('')
  }
  const equalityhandler = ()=>{
    setInputValue(math.evaluate(inputValue))
  }


  return (
    <Card className={classes.contaier}>
      <div className={classes.outputField}>{inputValue}</div>
      <div className={classes.btns}>
        <div  className={classes.btn_wrapper}>
        <Button onClick={buttonClickHandler}>7</Button>
        <Button onClick={buttonClickHandler}>8</Button>
        <Button onClick={buttonClickHandler}>9</Button>
        <Button onClick={buttonClickHandler}>/</Button>
        </div>
        <div className={classes.btn_wrapper}>
        <Button onClick={buttonClickHandler}>4</Button>
        <Button onClick={buttonClickHandler}>5</Button>
        <Button onClick={buttonClickHandler}>6</Button>
        <Button onClick={buttonClickHandler}>*</Button>
        </div>
        <div className={classes.btn_wrapper}>
        <Button onClick={buttonClickHandler}>1</Button>
        <Button onClick={buttonClickHandler}>2</Button>
        <Button onClick={buttonClickHandler}>3</Button>
        <Button onClick={buttonClickHandler}>+</Button>
        </div>
        <div className={classes.btn_wrapper}>
        <Button onClick={buttonClickHandler}>.</Button>
        <Button onClick={buttonClickHandler}>0</Button>
        <Button onClick={equalityhandler}>=</Button>
        <Button onClick={buttonClickHandler}>-</Button>
        </div>
        <Button onClick={clearHandler} className={classes.clearBtn}>Clear</Button>
      </div>
    </Card>
  )
}

export default Calculator