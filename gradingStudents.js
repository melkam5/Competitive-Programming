function gradingStudents(grades) {
  let result = [];
  grades.forEach((item) => {
    if (item > 37) {
      let mod = item % 5;
      mod > 2 ? (item += 5 - mod) : (item = item);

      console.log(item);
    }
    result.push(item);
  });

  return result;
}

