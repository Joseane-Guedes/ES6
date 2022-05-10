const exampleSet = new Set([1,1,1,1,2,2,2,2]);

exampleSet.add(3);
exampleSet.add(3).add(3);

exampleSet.delete(3)

console.log(exampleSet.size);