export class Recept {
  id: string;
  title: string;
  image: string;
  ingredients: Array<string>;
  instructions: Array<string>;
  constructor(
    id: string,
    title: string,
    image: string,
    ingredients: Array<string>,
    instructions: Array<string>
  ) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.ingredients = ingredients;
    this.instructions = instructions;
  }
}
