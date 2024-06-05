class User {
    // private name: string;

    public constructor(private name: string) {
        this.name = name;
    }

    public getName(): string{
        return this.name;
    }
}

const user = new User("Dev");
console.log(user.getName());

interface Shape {
    getArea: () => number;
}

class Rectangle implements Shape {
    public constructor(protected readonly height: number,protected readonly width: number){
        this.height = height;
        this.width = width;
    }
    public getArea(): number {
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    public constructor(width: number){
        super(width, width);
    }
}

const rectangle = new Rectangle(10, 10);
console.log(rectangle.getArea());

const square = new Square(12);
console.log(square.getArea());

