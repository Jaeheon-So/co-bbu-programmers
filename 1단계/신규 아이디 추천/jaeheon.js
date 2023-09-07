function solution(new_id) {
  const special = "~!@#$%^&*()=+[{]}:?,<>/";

  new_id = new_id.toLowerCase();

  for (let i = 0; i < special.length; i++) {
    new_id = new_id.replaceAll(special[i], "");
  }

  while (new_id.indexOf("..") !== -1) {
    new_id = new_id.replaceAll("..", ".");
  }

  if (new_id[0] === ".") {
    new_id = new_id.slice(1);
  }

  if (new_id.length > 0 && new_id[new_id.length - 1] === ".") {
    new_id = new_id.slice(0, new_id.length - 1);
  }

  if (new_id.length === 0) {
    new_id += "a";
  }

  if (new_id.length >= 16) {
    new_id = new_id.slice(0, 15);
  }

  if (new_id[new_id.length - 1] === ".") {
    new_id = new_id.slice(0, new_id.length - 1);
  }

  while (new_id.length <= 2) {
    new_id += new_id[new_id.length - 1];
  }

  return new_id;
}
