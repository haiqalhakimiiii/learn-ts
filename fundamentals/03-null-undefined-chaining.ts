let course ={
  textFields: {
    title: "Typescript Bootcamp"
  }
}

// optional chaining (ts only)
// course?.textFields?.title

// null ocalescing operator (ts only)
const title = course?.textFields?.title ?? "No title found"

logCourseTitle(course)

function logCourseTitle(course){

  if(!course?.textFields){
    console.log("textfields not defined");
    return
  }

  if(course.textFields.title) {
    console.log(`The title is ${course.textFields.title}`);
  }
}
