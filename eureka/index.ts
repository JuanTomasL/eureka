import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>`;

const claveok: string = "eureka";
let intentos = 1;
let clavesingr: string;

while (intentos <= 3 && clavesingr!="eureka"){
  clavesingr = prompt ("ingrese clave");
  intentos++
}
if clavesingr == "eureka" {
  console.log(claveok);
} else {
  console.log("ya no tiene mas intentos");
  
}
