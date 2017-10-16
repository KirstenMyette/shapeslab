let shapecontainer: HTMLElement;
let value: HTMLInputElement = (<HTMLInputElement>document.getElementById("value"));

document.addEventListener('DOMContentLoaded', () => {
    shapecontainer = document.getElementById('shapecontainer');
    document.body.appendChild(shapecontainer);

    interface IShape {
        div: HTMLDivElement;
        value: number;
        height: any;
        width: any;
        radius: any;
       
    }


    class Shape implements IShape {
        div: HTMLDivElement;
        value: number;
        height: any = (<HTMLInputElement>document.getElementById("height"));
        width: any = (<HTMLInputElement>document.getElementById("width"));
        radius: any = (<HTMLInputElement>document.getElementById("radius"));

        constructor() {
            this.div = document.createElement('div');
            this.div.addEventListener('click', () => {
            document.createElement('div');
            });
            this.div.addEventListener('dblclick', () => {
                this.div.remove();
            });
            shapecontainer.appendChild(this.div);
        }
    }

    class square extends Shape {
        constructor(height) {
            super();
            this.div.style.height = (<HTMLInputElement>document.getElementById("height")).value;
            shapecontainer.appendChild(this.div);
            
        }
    }

    class rectangle extends Shape {
        constructor(height, width) {
            super();
            this.div.style.height = (<HTMLInputElement>document.getElementById("height")).value;
            this.div.style.width = (<HTMLInputElement>document.getElementById("width")).value;
            shapecontainer.appendChild(this.div);

        }
    }

    class circle extends Shape {
        constructor(radius) {
            super();
            this.div.style.borderRadius = (<HTMLInputElement>document.getElementById("radius")).value;
            shapecontainer.appendChild(this.div);
        }
    }

    class triangle extends Shape {
        constructor(height) {
            super();
            this.div.style.height = (<HTMLInputElement>document.getElementById("height")).value;
            shapecontainer.appendChild(this.div);
        }
    }


    });
