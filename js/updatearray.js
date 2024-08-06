let L = [
    {id: 6511234, name: 'Jack', salary: 10000},
    {id: 6511235, name: 'Mike', salary: 15000},
    {id: 6511236, name: 'Nancy', salary: 20000},
    {id: 6511237, name: 'Alice', salary: 30000},
];

// Increase salary by 10% and calculate bonus (20% of the salary)
let updatedL = L.map(employee => {
    let newSalary = employee.salary * 1.10;  // Increase salary by 10%
    let bonus = newSalary * 0.20;            // Calculate bonus (20% of the salary)
    return {...employee, salary: newSalary, bonus: bonus};
});


console.table(updatedL);
