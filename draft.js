const filterPassedSubjects = function (subjects) {
  return subjects.passed;
};

const filterStudentsWithAllSubjectsPassed = function (students) {
  return students.filter(function (student) {
    return student.subjects.every(filterPassedSubjects);
  });
};

console.log('final', filterStudentsWithAllSubjectsPassed([{ name: "John", subjects: [{ name: "Math", passed: 'hi' }, { name: "Science", passed: true }] }, { name: "Jane", subjects: [{ name: "Math", passed:  }, { name: "Science", passed: true }] }]));

