class Obsever {
    constructor(name){
        this.namePick= name;
    }

    updateStatus(location){
        console.log(`${this.namePick}....PING....${JSON.stringify(location)}`);
    }

}

class Subject {
    constructor(){
        this.obseverList =[]
    }
    addObserver(observer){
        this.obseverList.push(observer)
    }
    notify(location){
        this.obseverList.forEach(observer => observer.updateStatus(location))
    }
}

// create obsever
const raz = new Obsever("Raz");
const liliana = new Obsever("Liliana");
const murad = new Obsever("Murad");

// create subject
const subject = new Subject();
subject.addObserver(raz);
subject.addObserver(liliana);
subject.addObserver(murad);

subject.notify({lat:1000, long:2300});

