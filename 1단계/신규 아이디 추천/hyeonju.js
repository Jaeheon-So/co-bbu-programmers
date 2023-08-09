function solution(new_id) {
  new_id = new_id.toLowerCase().replace(/[^0-9a-z._-\s]/gi, "")
  new_id = new_id.replace(/\.+/g, '.')
  new_id = new_id.replace(/^\./, '').replace(/\.$/, '')
  if (new_id === '') new_id = 'a'
  if (new_id.length >= 16) new_id = new_id.slice(0, 15).replace(/\.$/, '')
  if (new_id.length <= 2) {
    while (new_id.length < 3) {
      new_id += new_id[new_id.length - 1]
    }
  }
  return new_id;
}