interface BakedGood {
  sugar: number;
  name: string;
  bake(min: number): string;
  icing?: boolean;
}

const cake: BakedGood = {
  sugar: 23,
  name: 'cherry cake',
  bake(mins) {
    return 'will be done in ${min}...';
  }
};
