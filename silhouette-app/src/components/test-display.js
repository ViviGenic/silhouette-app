//https://www.appsloveworld.com/reactjs/200/117/react-hooks-shuffle-array-immediately-on-load-and-onclick
//https://github.com/NikhilMeruva959/React-Slideshow/blob/main/src/ImageCarousel.js
//https://stackoverflow.com/questions/53120972/how-to-call-loading-function-with-react-useeffect-only-once
//https://www.w3schools.com/react/react_useref.asp
//https://upmostly.com/tutorials/react-onchange-events-with-examples
import React, { useState, useEffect, useCallback, useRef } from "react";

const importAll = r => {
  console.log(r.keys());
  return r.keys().map(r);
}

const importedImages = importAll(
  require.context('../imagelist/', false, /\.(png|jpe?g|svg|webp)$/)
);

console.log(`Imported Images ${importedImages}`);

const importImg = {
    width: "200px",
    height: "356px",
    objectFit: "contain",
    textAlign: "center"
}

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

export default function TestDisplay(props) {
  
  const activeIndex = useRef(0);
  const previousIndex = useRef(0);
  const [activeImage, setActiveImage] = useState(listImages[activeIndex.current]);

  console.log(`Active Index (component): ${activeIndex.current} Previous Index (component): ${previousIndex}`);
  //use a separate variable to match activeIndex to initialized index
  // useEffect to set starting lists once on initiation

  const initializeImages = useCallback ((props) => {
    console.log('Initializing...');
    //Is this and the setState looping?
    setActiveImage(listImages[activeIndex.current]);
    console.log(`Initialized Active Image: ${activeImage}`);
    console.dir(`Initialized listImages: ${listImages}`);
    }, [activeIndex, activeImage]);

  // TODO -- If index + is greater than max, index = 0, if less than 0, index = max
  const changeIndex = value => () => {
    console.log(`Old Index: ${activeIndex.current}`);
    console.log(`Old Active Image: ${activeImage}`);
    activeIndex.current = activeIndex.current + value;
    console.log(`Updated Index: ${activeIndex.current} Old Index: ${previousIndex.current}`);
    console.log(`Updated Active Image: ${activeImage}`);
  }

  useEffect(() => {
    initializeImages();
  }, [initializeImages]);

  const checkIndex = activeImage !== listImages[activeIndex.current];

  // Currently comparing the image from listImages to the activeImage
  useEffect(() => {
    if (checkIndex) setActiveImage(listImages[activeIndex.current]);
    console.log(`UseEffect Active Index ${activeIndex.current}  Index Comparison ${ listImages[activeIndex.current] }, Check Index:${checkIndex}, Active Image: ${activeImage}`);
  }, [checkIndex, activeIndex, activeImage, previousIndex]);

  useEffect(() => {
    previousIndex.current = activeIndex;
    console.log(`Previous Index: ${previousIndex.current}`);
  }, [activeIndex]);
  
  // When activeImage changes, setActiveIndex to current value
  // How to reference value? activeIndex is reading itself.
  //const checkImage = listImages[activeIndex] !== activeImage;
  
  // reads as undefined. What isn't passing through here?  
  // useEffect Syntax -- useEffect(() => { setValue(Value to Set Value To); }, [When This Changes]);
  // What value should [] be dependent on? What is it looking for to change the value?
  
  console.log(`Active Index: ${activeIndex.current}`);
  console.log(`Active Image: ${activeImage}`);
  //props should be passed to list of images index
    
   //sub in <div>
  return(
    <h1 className="display">
      <div>
        <img src={ listImages[activeIndex.current] } alt={activeImage} style={importImg} />
        <ul>Active Index: { activeIndex.current }</ul>
      </div>
      <div>
        <button onClick={ changeIndex(-1) }>Back</button>
        <button onClick={ changeIndex(1) }>Next</button>
      </div>
    </h1>
  );   
}