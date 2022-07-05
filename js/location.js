const getLocation=document.getElementById("getlocation");
getLocation.addEventListener('click',evt=>{
    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition(Position=>{
            let latitude=Position.coords.latitude;
            let longitude=Position.coords.longitude;

            let geoogleMapURL=`https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=11&size=800x800`;
            const mapImage=document.getElementById("mapImage");
            mapImage.src =geoogleMapURL;



            console.log(latitude,longitude);
        },error=>{
            console.log(error.code);
        
        });
        

    }else{
        console.log("Not Supported");
    }
});

