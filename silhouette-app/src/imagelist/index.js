// import { useState } from "react";

// https://webpack.js.org/guides/dependency-management/#require-context
// https://shaquillegalimba.medium.com/how-to-import-multiple-images-in-react-1936efeeae7b

const ImageList = () => {
  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
  }

  function randomizeImages(images){
    return images[Math.floor((Math.random()*images.length))];
  }  
  
  function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list };
    }
    return list;
}
    //
  const images = importAll(require.context('../imagelist/', false, /\.(png|jpe?g|svg)$/));
  // list of imported images
  const imageArray = randomizeImages(images);
  const imageList = arrayToList(imageArray);
  return imageList;
}

export default ImageList;