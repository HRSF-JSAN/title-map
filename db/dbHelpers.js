generateTitles = () => {
  let result = [];
  for (let i = 0; i < 200; i++) {
    const types = ["Pizza", "Italian", "American", "Chinese", "Italian", "Mexican", "Indian", "French", "Brunch"];
    const dollarsigns = [ , , , , , ,].fill('$', 0, Math.floor(Math.random() * 6)).join('');
    const numStars = Math.floor(Math.random() * (5 - 1) + 1);
    const titleShape = {
      title: faker.companyName(),
      type: types[Math.floor(Math.random() * 10)],
      price: dollarsigns,
      numStars: numStars
    };
    result.push(titleShape);
  }
};

generateMaps = () => {
  for (let i =0; i< 200; i++){
    let mapShape = {
      address: faker.fake("{{address.streetAddress}} {{address.city}} {{address.state}}, {{address.zipCode}}"),
      image: faker.image.imageUrl(),
      phoneNumber: faker.phone.phoneNumberFormat()
    } 
  }

}