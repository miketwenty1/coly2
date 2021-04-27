import { sayHello, sayGoodbye} from './yo'
import Person from './classes/Person'

let bill = new Person('Bill')

console.log(sayHello('Bill'))
console.log(sayGoodbye('Mike'))


console.log(bill.sayGoodbye)