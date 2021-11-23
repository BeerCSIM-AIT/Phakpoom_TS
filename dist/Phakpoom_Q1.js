// Q1.1
let employees;
employees = [
    ["1001", "Phakpoom", 7, 40000, 0, ""],
    ["1002", "Supanan", 6, 30000, 0, ""],
    ["1003", "Kairika", 4, 25000, 0, ""],
    ["1004", "Sitthichai", 5, 28000, 0, ""],
    ["1005", "Wassana", 2, 21000, 0, ""],
];
// Q1.2
employees.forEach(e => {
    let workYear = e[2];
    let salary = e[3];
    let bonus;
    let gift;
    if (workYear <= 1)
        bonus = 0;
    else if (workYear <= 3)
        bonus = salary;
    else if (workYear <= 5)
        bonus = salary * 2;
    else
        bonus = salary * 3;
    gift = workYear <= 3 ? "Rice Cooker" : "Microwave Oven";
    e[4] = bonus;
    e[5] = gift;
});
console.clear();
console.log("================================");
employees.forEach(e => {
    console.log(`ID: ${e[0]}`);
    console.log(`Name: ${e[1]}`);
    console.log(`WorkYear: ${e[2]}`);
    console.log(`Salary: ${new Intl.NumberFormat().format(e[3])}`);
    console.log(`Bonus: ${new Intl.NumberFormat().format(e[4])}`);
    console.log(`Gift: ${e[5]}`);
    console.log("================================");
});
