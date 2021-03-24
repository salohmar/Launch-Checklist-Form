// Write your JavaScript code here!

window.addEventListener("load", function () {
   let form = document.getElementById("launchForm");

   let divFaultyItems = document.getElementById("faultyItems");
   let launchStatus = document.getElementById("launchStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");

   form.addEventListener("submit", function(event) {
      event.preventDefault();
      const astronautName = document.querySelector("input[name=pilotName]");
      let astronaut = astronautName.value;
      const copilotName = document.querySelector("input[name=copilotName]");
      let copilot = copilotName.value;
      const fuelLevel = document.querySelector("input[name=fuelLevel]");
      let fuel = Number(fuelLevel.value);
      const cargoMass = document.querySelector("input[name=cargoMass]");
      let cargo = Number(cargoMass.value);

      if (astronautName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
      };

      if (!isNaN(astronautName.value) || !isNaN(copilotName.value) || isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
         alert("Please use only letters for Pilot and Copilot names and numbers for Fuel Level and Cargo Mass.");
      };

      if (fuel < 10000) {
         launchStatus.innerHTML = "Shuttle not ready for launch.";
         fuelStatus.innerHTML = "There is not enough fuel for the journey.";
         launchStatus.style.color = 'red';
         divFaultyItems.style.visibility = "visible";
      };

      if (cargo > 10000) {
         launchStatus.style.color = 'red';
         divFaultyItems.style.visibility = "visible";
         cargoStatus.innerHTML = "There is too much mass for the shuttle to take off.";
         launchStatus.innerHTML = "Shuttle not ready for launch.";
      };

      if (fuel >= 10000 && cargo <= 10000) {
         launchStatus.style.color = 'green';
         launchStatus.innerHTML = "Shuttle is ready for launch.";
      };

      divFaultyItems.innerHTML = `
         <ol>
            <li>Pilot ${astronaut}: Ready</li>
            <li>Co-pilot ${copilot}: Ready</li>
            <li>Fuel level high enough for launch</li>
            <li>Cargo mass low enough for launch</li>
         </ol>
      `;
   });
});

window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
      let missionTargetDiv = document.getElementById("missionTarget");
      missionTargetDiv.innerHTML = `
      <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[0].name}</li>
            <li>Diameter: ${json[0].diameter}</li>
            <li>Star: ${json[0].star}</li>
            <li>Distance from Earth: ${json[0].distance}</li>
            <li>Number of Moons: ${json[0].moons}</li>
         </ol>
         <img src="${json[0].image}"></img>
         `;
   });
   });
});


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
