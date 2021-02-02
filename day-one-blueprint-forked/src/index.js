class ObjectUtilities {
  /* Your magic here */
  static mergeObjects(objA, objB) {
    return { ...objA, ...objB };
  }
  static removePassword(obj) {
    delete obj.password;
    return obj;
  }
  static freezeObj(obj) {
    Object.freeze(obj);
    return obj;
  }
  static getOnlyValues(obj) {
    const list = [];
    for (let key in obj) {
      list.push(obj[key]);
    }
    return list;
  }
  static getOnlyProperties(obj) {
    const list = [];
    for (let key in obj) {
      list.push(key);
    }
    return list;
  }
}

const objA = {
  name: "Nicolas",
  favFood: "Kimchi",
};

const objB = {
  password: "12345",
};

const user = ObjectUtilities.mergeObjects(objA, objB);
console.log(user);

const cleanUser = ObjectUtilities.removePassword(user);
console.log(cleanUser);

const frozenUser = ObjectUtilities.freezeObj(cleanUser);

const onlyValues = ObjectUtilities.getOnlyValues(frozenUser);
console.log(onlyValues);

const onlyProperties = ObjectUtilities.getOnlyProperties(frozenUser);
console.log(onlyProperties);

frozenUser.name = "Hello!"; // This should show an error
