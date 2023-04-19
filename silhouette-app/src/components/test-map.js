//https://www.redbitdev.com/post/are-you-using-array-map-correctly
import React from "react";

const importAll = r => {
    return r.keys().map(r);
  }
  
const importedImages = importAll(
require.context('../imagelist/', false, /\.(png|jpe?g|svg|webp)$/)
);

// Get full names for an array of people:

const guitarists = [
    { firstName: 'Bill', lastName: 'Frisell' },
    { firstName: 'Vernon', lastName: 'Reid' },
  ];
  
const names = guitarists.map((guitarist) => {
    const { firstName, lastName } = guitarist;
    return `${firstName} ${lastName}`;
  });
  
  console.log(names);
  
  // Result:
  // ['Bill Frisell', 'Vernon Reid']
  
  // Add the full names to an array of people:
  
const guitaristsWithFullNames = guitarists.map((guitarist) => {
    const { firstName, lastName } = guitarist;
    return { ...guitarist, fullName: `${firstName} ${lastName}` };
  });
  
  console.log(guitaristsWithFullNames);
  
  // Result:
  /*
  [
    { firstName: 'Bill', lastName: 'Frisell', fullName: 'Bill Frisell' },
    { firstName: 'Vernon', lastName: 'Reid', fullName: 'Vernon Reid' },
  ]
  */