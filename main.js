function toggleImage(smallImage){
  const mainImage = document.getElementById('main_image');
  mainImage.src = smallImage.src;
  window.stop();
}

let productQuantity = 0;

function increaseValue() {
  productQuantity = parseInt(document.getElementById("number").value, 10);
  productQuantity = isNaN(productQuantity) ? 0 : productQuantity;
  productQuantity++;
  document.getElementById("number").value = productQuantity;

  
}

function decreaseValue() {
  productQuantity = parseInt(document.getElementById("number").value, 10);
  productQuantity = isNaN(productQuantity) ? 0 : productQuantity;
  productQuantity < 1 ? (productQuantity = 1) : "";
  productQuantity--;
  document.getElementById("number").value = productQuantity;

  
}