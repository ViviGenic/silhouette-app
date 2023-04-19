import React, { useState, useEffect, useCallback } from "react";

//TO-DO Remove Unnecessary Consolelogs

const importAll = r => {
  console.log(r.keys());
  return r.keys().map(r);
}

const importedImages = importAll(
  require.context('../imagelist/', false, /\.(png|jpe?g|svg|webp)$/)
);

console.log(`Imported Images ${importedImages}`);

//TO DO-- move to CSS


function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

const shuffledArray = shuffle(importedImages);

const listImages = shuffledArray.map((item, index) => {
  console.log(`The Current Item is ${item}`);
  console.log(`The Current Index is ${index}`);
  return item;
  });

console.dir({ listImages });

//TO-DO--Remove these while integrating parent function
//export default function Display({displayTrigger}) {

export default function Display() {
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(null);
  const [activeImage, setActiveImage] = useState(listImages[activeIndex]);

  console.log(`Active Index (component): ${activeIndex} Previous Index (component): ${previousIndex}`);

  const initializeImages = useCallback ((props) => {
    console.log('Initializing...');
    setActiveImage(listImages[activeIndex]);
    console.log(`Initialized Active Image: ${activeImage}`);
    console.dir(`Initialized listImages: ${listImages}`);
    }, [activeIndex, activeImage]);

  const changeIndex = value => () => {
    const listLength = listImages.length;
    console.log(`List Length: ${listLength}`);
    console.log(`Old Index: ${activeIndex}`);
    console.log(`Old Active Image: ${activeImage}`);
    setPreviousIndex(activeIndex);
    if (value + activeIndex >= listLength) {
      setActiveIndex(0);
    }
    else if (value + activeIndex <= 0) {
      setActiveIndex(listLength);
    }
    else {
            setActiveIndex(activeIndex + value);
    }
    console.log(`Updated Index: ${activeIndex} Old Index: ${previousIndex}`);
    console.log(`Updated Active Image: ${activeImage}`);
  }

  useEffect(() => {
    initializeImages();
  }, [initializeImages]);

  //useEffect(() => {
  // if (displayTrigger) {
  // changeIndex(1);
  // }
  // [[displayTrigger]]})

  const checkIndex = activeIndex === previousIndex;

  useEffect(() => {
    console.log(`Active Index: ${activeIndex}`)
    if (checkIndex) setActiveImage(listImages[activeIndex]);
    setPreviousIndex(activeIndex);
    console.log(`Previous Index: ${previousIndex}`);
    console.log(`UseEffect Active Index ${activeIndex}  Index Comparison ${ listImages[activeIndex] }, Check Index:${checkIndex}, Active Image: ${activeImage}`);
  }, [checkIndex, activeIndex, activeImage, previousIndex]);

  
  // When activeImage changes, setActiveIndex to current value
  // How to reference value? activeIndex is reading itself.
  //const checkImage = listImages[activeIndex] !== activeImage;
  
  // reads as undefined. What isn't passing through here?  
  // useEffect Syntax -- useEffect(() => { setValue(Value to Set Value To); }, [When This Changes]);
  // What value should [] be dependent on? What is it looking for to change the value?
  
  console.log(`Active Index: ${activeIndex}`);
  console.log(`Active Image: ${activeImage}`);
  //props should be passed to list of images index
    
   //sub in <div>
  return(
    <h1 className="display">
      <div id="ImageDisplayContainer">
        <ul>Gesture #{ activeIndex + 1 }</ul>
        <img src={ listImages[activeIndex] } alt={activeImage} className="Image" />
        <br></br>
        <button onClick={ changeIndex(-1)} className="changeIndex" >Previous</button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={ changeIndex(1) } className="changeIndex">Next</button>
      </div>
    </h1>
  );   
}