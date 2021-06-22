class Node{
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class SLL{
    constructor(){
        this.head = null;
    }

    addToBack(value) {
        var newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
        } else {
            var runner = this.head;
            while (runner.next){
                runner = runner.next;
            }
            runner.next = newNode;
        }
    }

// Given a linked list, return true/false based on whether or not there is a loop in the list.
    hasLoop() {
        var runner1 = this.head;
        var runner2 = this.head;
        while(runner1 !=null && runner2 !=null && runner2.next !=null){
            runner1 = runner1.next;
            runner2 = runner2.next.next;
            if(runner1 == runner2){
                return true;
            }
        }
        return false;
    }

    printValues() {
        var runner = this.head;
        let str = "";
        while (runner) {
            if (runner.next) {
                str += `${runner.val} -> `;
            } else {
                str += runner.val;
            }
            runner = runner.next;
        }
        console.log(str);
    }
}

var list = new SLL();
list.addToBack(4);
list.addToBack(-12);
list.addToBack(43);
list.addToBack(8);
list.addToBack(67);
list.addToBack(-27);
list.addToBack(19);

var runner = list.head;
var sprinter = list.head;
while(runner.val != 67) { // run runner part way through the list and stop
    runner = runner.next;
}
while(sprinter.next != null) { // run sprinter through whole list
    sprinter = sprinter.next;
}
sprinter.next = runner; // point sprinter at same node as runner, so list should have a loop

console.log("============has loop?============");
console.log(list.hasLoop());
console.log("========================");

var list2 = new SLL();
list2.addToBack(4);
list2.addToBack(-12);
list2.addToBack(43);
list2.addToBack(8);
list2.addToBack(67);
list2.addToBack(-27);
list2.addToBack(19);
list2.printValues();
console.log("============has loop?============");
console.log(list2.hasLoop());
console.log("========================");