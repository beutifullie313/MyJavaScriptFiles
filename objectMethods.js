// Object.create(proto[, descriptors]) – создаёт пустой объект со свойством [[Prototype]], указанным как proto, и необязательными дескрипторами свойств descriptors.

// Object.getPrototypeOf(obj) – возвращает свойство [[Prototype]] объекта obj.

// Object.setPrototypeOf(obj, proto) – устанавливает свойство [[Prototype]] объекта obj как proto.

// Эти методы нужно использовать вместо __proto__.

// Ещё методы:

// Object.keys(obj) / Object.values(obj) / Object.entries(obj) – возвращают массив всех перечисляемых собственных строковых ключей/значений/пар ключ-значение.

// Object.getOwnPropertySymbols(obj) – возвращает массив всех собственных символьных ключей.

// Object.getOwnPropertyNames(obj) – возвращает массив всех собственных строковых ключей.

// Reflect.ownKeys(obj) – возвращает массив всех собственных ключей.

// obj.hasOwnProperty(key): возвращает true, если у obj есть собственное (не унаследованное) свойство с именем key.
// и другие

