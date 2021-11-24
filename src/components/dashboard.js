import { useEffect } from "react";
const DashBoard = () => {
  useEffect(() => {
    if ("geolocation" in navigator) {
      console.log("Available", navigator);
    } else {
      console.log("Not Available");
    }
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  });
  return "Hiii";
};
export default DashBoard;
