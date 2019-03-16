class Building {
    constructor(name, imageUrl, height, startYear, endYear) {
        this.name = name;
        this.image = loadImage(imageUrl);
        this.height = height;
        this.startYear = startYear;
        this.endYear = endYear;
    }

    show(x, scale) {
        imageMode(CENTER);
        textAlign(CENTER);

        const sf = this.height / scale / this.image.height;

        text(this.name, x, height - this.height / scale - 35);
        text(`${ this.startYear }-${ this.endYear }`, x, height - this.height / scale - 20);
        text(`${ this.height } Ft.`, x, height - this.height / scale - 5);

        console.log(x);

        image(this.image, x, height - this.height / scale / 2, this.image.width * sf, this.height / scale);
    }
}
