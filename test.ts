let prenom: string = 'Adrien';
let nom: string = "Vossough" ;
let texte: string = "mon prenom est " + prenom + "\n" + " et mon nom est " + nom;
console.log(texte);

let texte2: string = `mon prénom est ${ prenom} et mon nom est ${ nom}`;
console.log(texte2);

// Parcourir un tableau avec une boucle for ou forEach
let tab1: Array<number> = [ -8, 15.9, 0]
tab1.push(11.6);
tab1.forEach(element => console.log(element + '\n'));

function direCoucou(): void {
    console.log("Coucou");
}

direCoucou();

//fonction qui retourne une chaine de caractère
// ? = paramètre optionel
function direBonjour(name: string): string {
    return "salut " + name;
}

function direBonjour1(name?: string): string {
    if(name == undefined)
        return "salut!";
    return "salut " + name;
}

console.log(direBonjour("John"));
console.log(direBonjour1());
console.log(direBonjour1("Sam"));

//fonction anonyme
let direBonjour2 = function(name: string ="Pat"): string{
    return "salut " + name;
}

console.log(direBonjour2("Beegood"));
console.log(direBonjour2());

//fonction Arrow
let direBonjour3 = (name: string): string => {
    return "salut " + name;
}

console.log(direBonjour3("johnny Beegood"));

// Une fonction de rappel (aussi appelée callback en anglais) est une 
// fonction passée dans une autre fonction en tant qu'argument, 
// qui est ensuite invoquée à l'intérieur de la fonction externe pour 
// accomplir une sorte de routine ou d'action.

function bar(){
    console.log('bar() function called!');
}

function foo(callback: any){
    console.log('foo() function called!');
    callback();
};

foo(bar);

// La programmation asynchrone est une technique qui permet à un programme 
// de démarrer une tâche à l'exécution potentiellement longue et, au lieu d'avoir 
// à attendre la fin de la tâche, de pouvoir continuer à réagir aux autres évènements 
// pendant l'exécution de cette tâche

function asynMethod(callback: any){
    setTimeout(() => {
        console.log("Async Callback");
        callback();
    }, 1500);
}

function bar2() {
    console.log("Async Callback Completed");
}

asynMethod(bar2);

// fonction anonyme avec callback 
asynMethod(() => console.log("Async Callback Completed"));

// On notera que cette fonction asynchrone asyncMethod2() utilise une convention largement répandue en JavaScript 
// qui est souvent nommée le callback pattern reposant sur les quatre principes suivants :
// une seule fonction callback gérant à la fois le succès et l'échec ;
// la fonction callback est appelée une et une seule fois. Soit en cas de succès ou d'échec ;
// la fonction callback est le dernier argument de la fonction asynchrone;
// le premier paramètre de la fonction callback représente l'erreur, le second représente le résultat en cas de succès 

type Callback = (error?: Error, data?: number) => void;

function asyncMethod2(callBack: Callback) {
    setTimeout(() => {
        console.log("Async Callback");
        if (Math.random() < 0.25) {
            callBack(new Error("Error in retrieving data."));
        }
        else {
            let data = Math.random();
            callBack(undefined, data);
        }
    }, 1500);
}

function process1() {
    asyncMethod2((error, data) => {
        if (error)
            console.log(error);
        else {
            console.log("Process 1:", data);
        }
    });
} 

process1();

// Une Promise est la transformation d'une fonction asynchrone en un objet 
// (au sens JavaScript du terme) afin de faciliter la manipulation de ladite 
// fonction asynchrone. 

function asyncAction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async Callback");
            if (Math.random() < 0.25) {
                reject("Error in retrieving data.");
            }
            else {
                let data = Math.random();
                resolve(data);
            }
        }, 1500);
    });
}


    function process2() {
        asyncAction()
        .then(function (success) {
            console.log(success);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    
    process2();

const getRandomInt = (): string => {
    return (Math.random() * 10).toFixed(0);
}

const findEven = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        const value = parseInt(getRandomInt());
        value % 2 === 0 ? resolve(value) : reject('Odd number found');
    }, 1000)
})

findEven
    .then(function (success) {
        console.log(success);
    })
    .catch(function (error) {
        console.log(error);
    });

    findEven
    .then((success) => {
        console.log(success);
    })
    .catch((error)=> {
        console.log(error);
    });