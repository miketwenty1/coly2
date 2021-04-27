class Person {
  private name: string

  constructor(name: string) {
    this.name = name
  }

  get sayHello(): string {
    return `Hello ${this.name}`
  }

  get sayGoodbye(): string {
    return `Goodbye ${this.name}`
  }
}

export default Person