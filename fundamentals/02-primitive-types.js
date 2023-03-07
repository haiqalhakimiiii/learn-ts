// primitive types: number
var lessonsCount = 10;
var total = lessonsCount + 10;
console.log("total = ", total);
// primitive types: string
var title = "Typescript bootcamp:";
var subtitle = "Learn the language fundamentals, build practical projects";
// template strings
var fullTitle = "Full title: ".concat(title, ": ").concat(subtitle);
console.log(fullTitle);
// primitive types: boolean
var published = true;
if (published) {
    console.log("The course is published.");
}
printCourse(title, subtitle, lessonsCount);
function printCourse(title, subtitle, lessonsCount) {
    var fullTitle = title + subtitle;
}
// primitive types: object
var course = {
    title: "Typescript bootcamp",
    subtitle: "Learn the language fundamentals, build practical projects",
    lessonsCount: 10,
    author: {
        firstName: "Vasco",
        lastName: "Cavalheiro"
    }
};
console.log("Type of course is " + typeof course);
