// STYLECART: product display, cart, wishlist and demo order tracking.
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
let orders = JSON.parse(localStorage.getItem("orders")) || [];
const stages = ["Order placed", "Confirmed", "Packed", "Shipped", "Out for delivery", "Delivered"];
function rupees(amount) { return "₹" + Number(amount).toLocaleString("en-IN"); }
function saveData() {
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  localStorage.setItem("orders", JSON.stringify(orders));
  updateCounts();
}
function updateCounts() {
  document.getElementById("cartCount").textContent = cart.reduce((n, item) => n + item.quantity, 0);
  document.getElementById("wishCount").textContent = wishlist.length;
}
function chooseCategory(category) {
  document.getElementById("categoryFilter").value = category;
  displayProducts();
  document.getElementById("products").scrollIntoView({behavior:"smooth", block:"start"});
}
function displayProducts() {
  const search = document.getElementById("searchBox").value.toLowerCase();
  const category = document.getElementById("categoryFilter").value;
  const area = document.getElementById("productList"); area.innerHTML = "";
  const found = PRODUCTS.filter(p => (p.name.toLowerCase().includes(search) || p.brand.toLowerCase().includes(search)) && (category === "All" || p.category === category));
  found.forEach(p => {
    area.innerHTML += `<article class="product"><img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://placehold.co/600x700/f4e5df/493638?text=STYLECART'"><p>${p.brand} · ${p.category}</p><h3>${p.name}</h3><p><b>${rupees(p.price)}</b> &nbsp; ★ ${p.rating}</p><button onclick="addToCart(${p.id})">Add to Cart</button><button onclick="toggleWishlist(${p.id})">${wishlist.includes(p.id)?'♥ Saved':'♡ Wishlist'}</button><button onclick="viewProduct(${p.id})">Details</button></article>`;
  });
  if (!found.length) area.innerHTML = '<p class="emptyState">No products found in this category.</p>';
}
function addToCart(id) {
  const item = cart.find(x => x.id === id);
  if (item) item.quantity++; else cart.push({id, quantity:1});
  saveData(); openCart();
}
function toggleWishlist(id) {
  if (wishlist.includes(id)) wishlist = wishlist.filter(x => x !== id); else wishlist.push(id);
  saveData(); displayProducts(); openWishlist();
}
function viewProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  showPanel(p.name, `<div class="detailView"><img src="${p.image}" alt="${p.name}"><div><p>${p.brand} · ${p.category}</p><h3>${p.name}</h3><h3>${rupees(p.price)}</h3><p>${p.description}</p><p>★ ${p.rating} / 5</p><button class="actionButton" onclick="addToCart(${p.id})">Add to Cart</button><button class="actionButton" onclick="toggleWishlist(${p.id})">♡ Wishlist</button></div></div><h3>Customer reviews</h3>${p.reviews.map(r=>`<div class="review"><b>${r.name}</b> · ★ ${r.rating}/5<p>${r.text}</p></div>`).join('')}`);
}
function showPanel(title, html) {
  document.getElementById("panelTitle").textContent = title;
  document.getElementById("panelContent").innerHTML = html;
  const panel = document.getElementById("storePanel");
  panel.hidden = false;
  document.body.classList.add("panelOpen");
}
function closePanel() {
  document.getElementById("storePanel").hidden = true;
  document.body.classList.remove("panelOpen");
}
document.addEventListener("keydown", event => { if (event.key === "Escape") closePanel(); });
document.getElementById("storePanel").addEventListener("click", event => {
  if (event.target.id === "storePanel") closePanel();
});
function openCart() {
  if (!cart.length) return showPanel("Your Cart", '<p class="emptyState">Your cart is empty. Add a product to get started.</p>');
  let total = 0;
  const rows = cart.map(item => { const p=PRODUCTS.find(x=>x.id===item.id); const sub=p.price*item.quantity; total+=sub;
    return `<div class="shopRow"><img src="${p.image}" alt="${p.name}"><div class="shopInfo"><b>${p.name}</b><p>${rupees(p.price)} each</p><div class="quantity"><button onclick="changeQuantity(${p.id},-1)">−</button> ${item.quantity} <button onclick="changeQuantity(${p.id},1)">+</button></div></div><b>${rupees(sub)}</b><button class="removeButton" onclick="removeCartItem(${p.id})">Remove</button></div>`;
  }).join('');
  showPanel("Your Shopping Cart", `${rows}<div class="totalLine"><b>Total: ${rupees(total)}</b></div><button class="actionButton" onclick="checkout()">Place Order</button>`);
}
function changeQuantity(id, amount) { const item=cart.find(x=>x.id===id); if(item) item.quantity+=amount; cart=cart.filter(x=>x.quantity>0); saveData(); openCart(); }
function removeCartItem(id) { cart=cart.filter(x=>x.id!==id); saveData(); openCart(); }
function checkout() {
  if (!cart.length) return openCart();
  const total = cart.reduce((sum,item)=>sum+PRODUCTS.find(p=>p.id===item.id).price*item.quantity,0);
  showPanel("Delivery & Contact Details", `
    <p class="checkoutIntro">Enter your details to place your STYLECART demo order.</p>
    <form id="checkoutForm" class="checkoutForm" onsubmit="placeOrder(event)">
      <div class="formGrid">
        <label>Full name<input name="customerName" type="text" placeholder="Enter your full name" required minlength="2"></label>
        <label>Email address<input name="email" type="email" placeholder="name@example.com" required></label>
        <label>Mobile number<input name="phone" type="tel" placeholder="10-digit mobile number" pattern="[0-9]{10}" required></label>
        <label>PIN code<input name="pincode" type="text" placeholder="6-digit PIN code" pattern="[0-9]{6}" required></label>
        <label class="fullField">Full delivery address<textarea name="address" rows="3" placeholder="House / flat, street, area, landmark" required></textarea></label>
        <label>City<input name="city" type="text" placeholder="City" required></label>
        <label>State<input name="state" type="text" placeholder="State" required></label>
      </div>
      <div class="checkoutTotal"><span>Order total</span><strong>${rupees(total)}</strong></div>
      <p class="note">Demo project only: no real payment is collected and no email is sent.</p>
      <button class="actionButton checkoutSubmit" type="submit">Confirm & Place Order</button>
    </form>`);
}
function placeOrder(event) {
  event.preventDefault();
  const form = document.getElementById("checkoutForm");
  if (!form.reportValidity()) return;
  const details = Object.fromEntries(new FormData(form).entries());
  const total = cart.reduce((sum,item)=>sum+PRODUCTS.find(p=>p.id===item.id).price*item.quantity,0);
  const order = {
    id:"SC"+Date.now().toString().slice(-8),
    name:details.customerName.trim(), email:details.email.trim(),
    phone:details.phone.trim(), address:details.address.trim(),
    city:details.city.trim(), state:details.state.trim(), pincode:details.pincode.trim(),
    total, items:cart.map(x=>({...x})), status:stages[0],
    date:new Date().toLocaleDateString("en-IN")
  };
  orders.unshift(order);
  cart=[];
  saveData();
  openOrders();
}

function openWishlist() {
  if (!wishlist.length) return showPanel("My Wishlist", '<p class="emptyState">Your wishlist is empty. Tap ♡ Wishlist on a product to save it here.</p>');
  const rows=wishlist.map(id=>{const p=PRODUCTS.find(x=>x.id===id);return `<div class="shopRow"><img src="${p.image}" alt="${p.name}"><div class="shopInfo"><b>${p.name}</b><p>${rupees(p.price)}</p><button class="actionButton" onclick="addToCart(${p.id})">Add to Cart</button></div><button class="removeButton" onclick="toggleWishlist(${p.id})">Remove</button></div>`;}).join('');
  showPanel(`My Wishlist (${wishlist.length})`,rows);
}
function openOrders() {
  showPanel("My Orders & Order Tracking", `
    <div class="trackLookup">
      <label for="trackingOrderId">Enter your Order ID to track your order</label>
      <div class="trackSearchRow">
        <input id="trackingOrderId" type="text" placeholder="Example: SC12345678">
        <button class="actionButton" onclick="trackOrderById()">Track Order</button>
      </div>
      <p class="note">Your Order ID is shown after placing an order and in the order details below.</p>
    </div>
    <div id="trackingResult"></div>
    <h3 class="ordersHeading">Your Recent Orders</h3>
    ${orders.length ? orders.map(o=>`
      <article class="orderCard">
        <div class="orderTop"><div><b>Order ID: ${o.id}</b><p>Placed on ${o.date||'Recently'} · ${o.name}</p></div><strong>${rupees(o.total)}</strong></div>
        <p><b>Expected delivery:</b> ${o.expectedDate || 'Within 5 days'}</p>
        <p><b>Order status:</b> ${o.status || stages[0]}</p>
        <button class="actionButton" onclick="document.getElementById('trackingOrderId').value='${o.id}'; trackOrderById();">Track this order</button>
      </article>`).join('') : '<p class="emptyState">You have not placed an order yet.</p>'}
  `);
}
function trackOrderById() {
  const orderId=document.getElementById("trackingOrderId").value.trim().toUpperCase();
  const result=document.getElementById("trackingResult");
  const order=orders.find(o=>o.id.toUpperCase()===orderId);
  if(!order) {
    result.innerHTML='<p class="trackError">We could not find an order with that Order ID. Please check the ID and try again.</p>';
    return;
  }
  const step=Math.max(0,stages.indexOf(order.status || stages[0]));
  result.innerHTML=`
    <article class="orderCard trackedOrder">
      <div class="orderTop"><div><b>Tracking Order: ${order.id}</b><p>${order.name}</p></div><strong>${rupees(order.total)}</strong></div>
      <p><b>Current status:</b> <span class="currentStatus">${order.status || stages[0]}</span></p>
      <p><b>Expected delivery:</b> ${order.expectedDate || 'Within 5 days'}</p>
      <div class="trackingSteps">${stages.map((st,i)=>`<div class="trackStep ${i<=step?'done':''}"><span>${i<=step?'✓':i+1}</span><small>${st}</small></div>`).join('')}</div>
      <p class="deliveryAddress"><b>Delivery address:</b> ${order.address ? `${order.address}, ${order.city}, ${order.state} - ${order.pincode}` : 'Not saved for this order'}</p>
      <p class="note">Order information is saved in this browser. Live courier scans are not connected.</p>
    </article>`;
}

function showCart(){openCart();}
function showWishlist(){openWishlist();}
function showOrders(){openOrders();}
displayProducts(); updateCounts();
