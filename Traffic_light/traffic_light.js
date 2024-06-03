const traffic_light = prompt("Enter the Traffic Light color: ");

switch(traffic_light.toLowerCase()) {
    case 'red':
        alert("Please Stop:🤚🛑");
        break;
    case 'green':
        alert("You can go💨🚗");
        break;
    case 'yellow':
        alert("Get Ready");
        break;
    default:
        alert("Please Enter correct words");
}
