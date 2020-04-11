const isObject = obj => typeof obj === 'object';

const keysOf = obj => {
  return isObject(obj) ? Object.keys(obj) : [];
};

const splitObject = (obj, targetKeys) => {
  const extracted = {};
  const rest = {};
  const keys = keysOf(obj);

  if (!(targetKeys instanceof Array)) {
    return {
      extracted,
      rest: obj || {}
    };
  }

  for (let i = 0, len = keys.length; i < len; i++) {
    const k = keys[i];
    if (targetKeys.indexOf(k) > -1) {
      extracted[k] = obj[k];
    } else {
      rest[k] = obj[k];
    }
  }

  return {
    extracted,
    rest
  }
};

const appendChildren = (parent, children) => {
  if (!children) {
    return false;
  }

  if (children[Symbol.iterator]) {
    for (const child of children) {
      parent.appendChild(child);
    }
  } else {
    parent.appendChild(children);
  }

  return true;
};

const create = (name, options) => {
  const parent = document.createElement(name);

  if (options) {
    const { rest: attrs, extracted: others } = splitObject(options, [
      'children',
      'text',
      'events'
    ]);

    others.text && parent.appendChild(document.createTextNode(others.text));
    appendChildren(parent, others.children);

    for (const e in others.events) {
      parent.addEventListener(e, others.events[e]);
    }

    for (const k of keysOf(attrs)) {
      parent.setAttribute(k, attrs[k]);
    }
  }
  
  return parent;
};