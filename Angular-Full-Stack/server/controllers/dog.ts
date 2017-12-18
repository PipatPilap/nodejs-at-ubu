import Dog from '../models/dog';
import BaseCtrl from './base';

export default class DogCtrl extends BaseCtrl {
  model = Dog;
}
