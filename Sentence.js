import React from 'react';

export function Sentence(){
    return <>
    <h3>I am practicing using React!</h3>
    <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML and CSS</li>
    </ul>
    </>
  }

export function Animals(props){
  console.log(props)
  return <>
    <h3>{props.animal}</h3>
  </>
}

// let animals = ['Dog','Cat', 'Monkey', 'Mouse'];
// return <>
//   {animals.map((animal) => <Animals animal={props.animal} />)};
//   </>