const api = {};

api.get = (url, options) => {
  return fetch(url, options)
    .then(res => {
      return res.json();
    });
};

api.post = (url, options) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  }).then(res => {
    return res.json();
  });
};

api.put = (url, options) => {
  return fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options
  }).then(res => {
    return res.json();
  });
};