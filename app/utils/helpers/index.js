export const calculateDeltaForCoords = (coords) => {
    const { latitude, accuracy} = coords;
    const oneDegreeOfLatitudeInMeters = 111.32 * 1000;
       const latDelta =accuracy / oneDegreeOfLatitudeInMeters;
       const longDelta = accuracy / (oneDegreeOfLatitudeInMeters * Math.cos(latitude * (Math.PI / 180)));
       coords.latitudeDelta = latDelta;
       coords.longitudeDelta = longDelta;
       return coords;

}