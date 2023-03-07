// primitive types: number
const lessonsCount = 10

const total = lessonsCount + 10

console.log("total = ", total);

// primitive types: string
let title = "Typescript bootcamp:"

let subtitle = "Learn the language fundamentals, build practical projects"

// template strings
let fullTitle = `Full title: ${title}: ${subtitle}`

console.log(fullTitle);

// primitive types: boolean
const published = true

if(published) {
  console.log("The course is published.");
}

printCourse(title,subtitle, lessonsCount)

function printCourse(title:string, subtitle:string, lessonsCount:number) {
  let fullTitle = title + subtitle
}

// primitive types: object
const course = {
  title: "Typescript bootcamp",
  subtitle: "Learn the language fundamentals, build practical projects",
  lessonsCount: 10,
  author: {
    firstName: "Vasco",
    lastName: "Cavalheiro"
  }
}

console.log("Type of course is " + typeof course);