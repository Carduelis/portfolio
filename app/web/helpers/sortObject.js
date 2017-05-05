import sortedKeysBy from '../helpers/sortedKeysBy';

export default function (object, comparator) {
  return sortedKeysBy(object, comparator).map(item => object[item]);
}
