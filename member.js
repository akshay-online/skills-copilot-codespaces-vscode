function skillsMember()
{
    var member = {
        name: "John Doe",
        age: 30,
        skills: ["JavaScript", "HTML", "CSS"],
        details: function() {
            console.log(this.name + " is " + this.age + " years old.");
            console.log(this.name + " knows " + this.skills);
        }
    };

    return member;
}