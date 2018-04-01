class Location {

  constructor(){
    this.lat = 0;
    this.lng = 0;
    this.log_loc();
    this.continuously_update_loc();
  }

  log_loc() {
    navigator.geolocation.getCurrentPosition((pos) => {
      this.lat = pos.coords.latitude;
      this.lng = pos.coords.longitude;
    });
  }

  continuously_update_loc() {
    navigator.geolocation.watchPosition((pos) => {
      this.lat = pos.coords.latitude;
      this.lng = pos.coords.longitude;
    });
  }
  
}


function zoomlevel(latdiff) {
  return (Math.log(latdiff) - 6.6082) / (-0.6932) // c=6.6, d=-0.69, latdiff=exp(c+d*(zoom))
}