import * as mongoose from 'mongoose';

const dogSchema = new mongoose.Schema({
  name: String,
  owner: String,
  age: Number
});

const Dog = mongoose.model('Dog', dogSchema);

export default Dog;
