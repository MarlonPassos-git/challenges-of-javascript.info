const rankOrder = [
    ["20/07/2021", 80],
];
const rankLog = new Set()
class NewUser {

    list;

    constructor(name, list = []) {
        this.name = name;
        this.#list = list;
    }

    rank = {

        get get() {
            return this.#list;
        }

    }

}
let a = new NewUser('marlon', [1, 2])

console.log(a.rank.get)

console.table