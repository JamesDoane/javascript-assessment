console.log("Welcome to the password validator tool")

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Enter a password for validation: ", function(input){
    password = input
    correctPass = "supercalifragilisticexpealidocious"

    if(password === correctPass){
        console.log("You have gained access to the answer to the ultimate question: 42.")
        process.exit()
    }
    else if(password.length >= 10){
        console.log("Your password is long enough")
        for(let i = 0; i<password.length; i++){
            if(password.charAt(i)==='a'){
                console.log(`There is an "a" in your password`)
            }
            if(password.charAt(i)==='b'){
                console.log(`There is an "b" in your password`)
            }
            if(password.charAt(i)==='c'){
                console.log(`There is an "c" in your password`)
            }
            if(password.charAt(i)==='d'){
                console.log(`There is an "d" in your password`)
            }
            if(password.charAt(i)==='e'){
                console.log(`There is an "e" in your password`)
            }
            if(password.charAt(i)==='f'){
                console.log(`There is an "f" in your password`)
            }
            if(password.charAt(i)==='g'){
                console.log(`There is an "g" in your password`)
            }
            if(password.charAt(i)==='h'){
                console.log(`There is an "h" in your password`)
            }
            if(password.charAt(i)==='i'){
                console.log(`There is an "i" in your password`)
            }
            if(password.charAt(i)==='j'){
                console.log(`There is an "j" in your password`)
            }
            if(password.charAt(i)==='k'){
                console.log(`There is an "k" in your password`)
            }
            if(password.charAt(i)==='l'){
                console.log(`There is an "l" in your password`)
            }
            if(password.charAt(i)==='m'){
                console.log(`There is an "m" in your password`)
            }
            if(password.charAt(i)==='n'){
                console.log(`There is an "n" in your password`)
            }
            if(password.charAt(i)==='n'){
                console.log(`There is an "n" in your password`)
            }
            if(password.charAt(i)==='o'){
                console.log(`There is an "o" in your password`)
            }
            if(password.charAt(i)==='p'){
                console.log(`There is an "p" in your password`)
            }
            if(password.charAt(i)==='q'){
                console.log(`There is an "q" in your password`)
            }
            if(password.charAt(i)==='r'){
                console.log(`There is an "r" in your password`)
            }
            if(password.charAt(i)==='s'){
                console.log(`There is an "s" in your password`)
            }
            if(password.charAt(i)==='t'){
                console.log(`There is an "t" in your password`)
            }
            if(password.charAt(i)==='u'){
                console.log(`There is an "u" in your password`)
            }
            if(password.charAt(i)==='v'){
                console.log(`There is an "v" in your password`)
            }
            if(password.charAt(i)==='w'){
                console.log(`There is an "w" in your password`)
            }
            if(password.charAt(i)==='x'){
                console.log(`There is an "x" in your password`)
            }
            if(password.charAt(i)==='y'){
                console.log(`There is an "y" in your password`)
            }
            if(password.charAt(i)==='z'){
                console.log(`There is an "z" in your password`)
            }
    
        }
        process.exit()
    }
    
    else {
        console.log("Your password is not long enough")
        if(password === "spoiler"){
            console.log("You asked for it\nIn the end, Arya kills the night king.\
             This was widely regarded as a bad move.\n Also Iron Man dies in Endgame.\n And Eren dies at the end of\
              Attack on Titan.\n Also Jesus comes back after 3 days.")
        }
        else if(password === "password" || password === "admin" || password === "12345678" || password === "password123"){
            console.log("You're not very bright are you?")
        }
        process.exit()
    }

});