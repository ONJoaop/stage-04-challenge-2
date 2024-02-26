
let students = [
    {
        name: 'John',
        fisrTest: 6,
        secondTest: 6,
    },
    {
        name: 'Alivia',
        fisrTest: 7,
        secondTest: 2,
    },
    {
        name: 'Ronald',
        fisrTest: 10,
        secondTest: 8,
    },
    {
        name: 'Arnold',
        fisrTest: 1,
        secondTest: 10,
    },
    {
        name: 'John',
        fisrTest: 7,
        secondTest: 8,
    },
]

let studentName = []
let studentFirstTest = []
let studentSecondTest = []



let index = 1;



while (index != students.length) {
    for (const student of students) {
        studentName.push(student.name)
        studentFirstTest.push(student.fisrTest)
        studentSecondTest.push(student.secondTest)
        function note(fisrTest, secondTest) {
            let note = (fisrTest + secondTest) / 2
            let average = note >= 7 ? 'Você foi aprovado(a) no concurso!' : "Tente novamente"
        
            return average
        }

        var average = note(studentFirstTest[index], studentSecondTest[index])
    }

    let note = (studentFirstTest[index] + studentSecondTest[index]) / 2

    alert(`A média do(a) aluno(a) ${studentName[index]} é: ${note}. ${average}`);
    index++
}