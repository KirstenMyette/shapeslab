let shapecontainer: HTMLElement;

document.addEventListener('DOMContentLoaded', () => {
    shapecontainer = document.getElementById('shapecontianer');

interface IShape{
    value: any;
    div:HTMLDivElement;
}


    class Shape implements IShape {
        div:HTMLDivElement;
        value: any;

        constructor(){
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

    class square extends Shape  {
       
    }

    class rectangle extends Shape {
        
    }

    class circle extends Shape {
        
    }

    class triangle extends Shape {
        
    }




});