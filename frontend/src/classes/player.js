  // luokka hahmoille
  class Player {
    constructor(data) {
      this.name=data.name.fi;
      this.energy=data.energyKcal;
      this.carbs=data.carbohydrate;
      this.protein=data.protein;
      this.fat=data.fat;
    }
  }

  export default Player;