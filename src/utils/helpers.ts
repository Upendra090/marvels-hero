export const convertDate = (dateValue: any) => {
  const milliseconds = dateValue * 1000;
  const date = new Date(milliseconds);
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2); // Adding 1 because months are zero-indexed
  const day = ("0" + date.getDate()).slice(-2);
  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);
  const seconds = ("0" + date.getSeconds()).slice(-2);

  const normalDate =
    year +
    "-" +
    month +
    "-" +
    day +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds;

  return normalDate;
};

export const convertFToC = (fvalue: any) => {
  const result = (fvalue - 32) / 1.8;
  return result.toFixed(2);
};

export const digitalClock = () => {};

// export const getCurrentPosition = (): any => {
//   const result: any = {};
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition((position: any) => {
//       const { timestamp } = position;
//       const { latitude, longitude } = position.coords;

//       result.timestamp = timestamp;
//       result.latitude = latitude;
//       result.longitude = longitude;
//     });
//   }
//   return { result };
// };

export const getCurrentPosition = (
  callback: (position: {
    timestamp: number;
    latitude: number;
    longitude: number;
  }) => void
): void => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position: any) => {
      const { timestamp } = position;
      const { latitude, longitude } = position.coords;

      const result = {
        timestamp: timestamp,
        latitude: latitude,
        longitude: longitude,
      };

      callback(result);
    });
  }
};
