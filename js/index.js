const message = 'Hello!'; 
// alert(message);

// const age = 42;
// alert(age);

const userAge = Number(prompt('Enter your age'));
// alert(userAge);

const nextAge = add(userAge, 1);
// alert(nextAge);

// Boolean
// true
// false

if (userAge >= 18) { // < <= > != !== == === || &&
    alert('You are adult');
} else {
    alert('You are underaged');
}

function add(a, b) {
    const sum = a + b;
    return sum;
}



