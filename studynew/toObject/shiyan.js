function Course() {
    const _isClass = this instanceof Course;
    if(!_isClass) {
        return new Course();
    }
    this.name = "";
}
console.log(Course())