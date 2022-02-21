function apply(){

    let bg = document.getElementById('bg').value;

    let color = document.getElementById('color').value;
  
    let fontSize = document.getElementById('size').value;
   
    let fontWeight = document.getElementById('weight').value;
    
    let padding = document.getElementById('padding').value;
    
    let borderRadius = document.getElementById('border').value;
    
    let custom = document.getElementById('custom')
    
    custom.style.backgroundColor = bg;
    custom.style.color = color;
    custom.style.fontSize = fontSize + "px";
    custom.style.fontWeight = fontWeight ;
    custom.style.padding = padding + "px";
    custom.style.borderRadius = borderRadius + "px"
    custom.style.visibility = "visible";
}
   