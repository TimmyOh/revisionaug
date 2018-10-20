const student = {
  id: 12378,
  name: 'Jason'
};

console.log(`id: ${student.id}`);
console.log(`name: ${student.name}`);

const studentRecord = {
  id: 12378,
  name: {
    firstname: 'Jason',
    lastname: 'Bourne'
  },
  marks: {
    progamming: 77,
    networking: 88
  },
  cgpa: [{ sem1: 3.6 }, { sem2: 3.7 }]
};

console.log('first name: ', studentRecord.name.firstname);
console.log('cgpa sem1: ', studentRecord.cgpa[0].sem1);
