//CODE TO GET USER LOCATION
//   constructor(props){
//     super(props);
//     this.state = {
//       latitude: null,
//       longitude: null,
//       userAddress: null
//     };
//     this.getLocation = this.getLocation.bind(this);
//     this.getCoordinates = this.getCoordinates.bind(this);
//   }

// getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(this.getCoordinates);
//   } 
//   else {
//     alert("Geolocation is not supported by this browser.");
//   }
// }

// getCoordinates(position){
//   console.log(position.coords.latitude);
//   this.setState({
//     latitude: position.coords.latitude,
//     longitude: position.coords.longitude
//   })
// }

// handleLocationError(error){
//     switch (error.code) {
//       case error.PERMISSION_DENIED:
//         alert("User denied the request for Geolocation.")
//         break;
//       case error.POSITION_UNAVAILABLE:
//         alert("Location information is unavailable.")
//         break;
//       case error.TIMEOUT:
//         alert("The request to get user location timed out.")
//         break;
//       case error.UNKNOWN_ERROR:
//         alert("An unknown error occurred.")
//         break;
//       default:
//         alert("An unknown error occured.")
//     }
//   } 

{/*
          TO SHOW USER LOCATION
          <button onClick={this.getLocation}>Get coordinates</button>
          <p>Latitude: {this.state.latitude}</p>
          <p>longitude: {this.state.longitude}</p>
          <p>Address: {this.state.userAddress}</p> */}
