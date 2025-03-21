export const findDomain = (url) => {
  const urlParts = url && url.replace('http://', '').replace('https://', '').replace('www.', '').split(/[/?#]/)[0];
  return urlParts;
};

export const timeSince = (date) => {
  const seconds = Math.floor((new Date() - date) / 1000);
  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return `${interval} years`;
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return `${interval} month`;
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return `${interval} days`;
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return `${interval} hours`;
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return `${interval} minutes`;
  }
  return `${Math.floor(seconds)} seconds`;
};

// var aDay = 24 * 60 * 60 * 1000
// console.log(timeSince(new Date(Date.now() - aDay)));
