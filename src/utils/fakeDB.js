const [apply,setApply] = useState([])
const handleApply = (id)=>{
    const newApply = [...apply,id];
    const previousApply = localStorage.getItem("applied");
    if(previousApply){
      const getApply = JSON.parse(localStorage.getItem("applied"));
      const a = getApply?.filter(b=> b==id)
      if(a[0]){
          toast("You have already applied in this")
      }
      const newlydone = [...getApply,id]
      localStorage.setItem("applied",JSON.stringify(newlydone))
      setApply(newlydone);
    }
    else{
      localStorage.setItem("applied",JSON.stringify(newApply))
      setApply(newApply);
    }
  }// use local storage to manage cart data










const addToDb = id => {
  let shoppingCart = {}

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem('shopping-cart')
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart)
  }

  // add quantity
  const quantity = shoppingCart[id]
  if (quantity) {
    const newQuantity = quantity + 1
    shoppingCart[id] = newQuantity
  } else {
    shoppingCart[id] = 1
  }
  localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

const getStoredCart = () => {
  let shoppingCart = {}

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem('shopping-cart')
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart)
  }
  return shoppingCart
}

const removeFromDb = id => {
  const storedCart = localStorage.getItem('shopping-cart')
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart)
    if (id in shoppingCart) {
      delete shoppingCart[id]
      localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
    }
  }
}

const deleteShoppingCart = () => {
  localStorage.removeItem('shopping-cart')
}

export { addToDb, getStoredCart, removeFromDb, deleteShoppingCart }
