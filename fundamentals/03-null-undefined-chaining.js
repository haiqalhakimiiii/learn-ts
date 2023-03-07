var _a, _b;
var course = {
    textFields: {
        title: "Typescript Bootcamp"
    }
};
// optional chaining (ts only)
// course?.textFields?.title
// null ocalescing operator (ts only)
var title = (_b = (_a = course === null || course === void 0 ? void 0 : course.textFields) === null || _a === void 0 ? void 0 : _a.title) !== null && _b !== void 0 ? _b : "No title found";
logCourseTitle(course);
function logCourseTitle(course) {
    if (!(course === null || course === void 0 ? void 0 : course.textFields)) {
        console.log("textfields not defined");
        return;
    }
    if (course.textFields.title) {
        console.log("The title is ".concat(course.textFields.title));
    }
}
