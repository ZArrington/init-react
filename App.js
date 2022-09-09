import React from 'react';
import { Welcome } from './Welcome';
import { Sentence} from './Sentence';
import { Animals } from './Sentence';

// Render Components in this Component
export function App() {
  let animals = ['Dog','Cat', 'Monkey', 'Mouse'];
  return <>
    <Welcome />
    <Sentence />
    {
    animals.map((animal,idx) => <Animals key={idx} animal={animal} />)
    };
  </>
  
}
