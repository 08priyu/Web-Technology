//JavaScript Program to Get File Extension	
const getFileExtension = (filename) => {
    return filename.includes('.') ? filename.split('.').pop() : 'No extension';
};

console.log(getFileExtension("example.txt"));       
console.log(getFileExtension("archive.tar.gz"));    
console.log(getFileExtension("document"));           
