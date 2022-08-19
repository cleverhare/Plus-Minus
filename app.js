// Just copy and paste the below code make sure you understood 
  const results = {
    positives: arr.filter((pos) => Math.sign(pos) === 1).length,
    negatives: arr.filter((pos) => Math.sign(pos) === -1).length,
    zeros: arr.filter((pos) => Math.sign(pos) === 0).length,
  };
  console.log(parseFloat((results.positives / arr.length).toFixed(6)));
  console.log(parseFloat((results.negatives / arr.length).toFixed(6)));
  console.log(parseFloat((results.zeros / arr.length).toFixed(6)));
