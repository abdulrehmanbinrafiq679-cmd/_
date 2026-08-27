const products=[
{id:'w1',category:'women',name:'VIP Women Soft Pink Sneaker',price:'Rs. 4,999',oldPrice:'Rs. 6,499',image:'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80'},
{id:'w2',category:'women',name:'VIP Women Elegant White Runner',price:'Rs. 5,499',oldPrice:'Rs. 7,000',image:'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80'},
{id:'w3',category:'women',name:'VIP Women Classic Canvas',price:'Rs. 3,999',oldPrice:'Rs. 5,200',image:'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80'},
{id:'w4',category:'women',name:'VIP Women Rose Sport',price:'Rs. 4,799',oldPrice:'Rs. 5,999',image:'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=600&q=80'},
{id:'w5',category:'women',name:'VIP Women Pastel Breeze',price:'Rs. 5,199',oldPrice:'Rs. 6,800',image:'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=600&q=80'},
{id:'w6',category:'women',name:'VIP Women Urban Chic Gold',price:'Rs. 6,299',oldPrice:'Rs. 7,999',image:'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=600&q=80'},
{id:'w7',category:'women',name:'VIP Women Daily Comfort Walk',price:'Rs. 3,499',oldPrice:'Rs. 4,500',image:'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=600&q=80'},
{id:'w8',category:'women',name:'VIP Women Active Mesh Runner',price:'Rs. 4,299',oldPrice:'Rs. 5,500',image:'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&w=600&q=80'},
{id:'w9',category:'women',name:'VIP Women Peach Cloud Luxe',price:'Rs. 5,899',oldPrice:'Rs. 7,200',image:'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=600&q=80'},
{id:'w10',category:'women',name:'VIP Women High-Street Chunky',price:'Rs. 6,499',oldPrice:'Rs. 8,500',image:'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=600&q=80'},
{id:'m1',category:'men',name:'VIP Premium Black Gold',price:'Rs. 4,499',oldPrice:'Rs. 5,999',image:'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80'},
{id:'m2',category:'men',name:'VIP Classic White Leather',price:'Rs. 4,499',oldPrice:'Rs. 5,999',image:'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80'},
{id:'m3',category:'men',name:'VIP Red Sport Pro Runner',price:'Rs. 5,299',oldPrice:'Rs. 6,999',image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80'},
{id:'m4',category:'men',name:'VIP Retro Brown Formal',price:'Rs. 6,499',oldPrice:'Rs. 8,200',image:'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=600&q=80'},
{id:'m5',category:'men',name:'VIP Midnight Dark Runner',price:'Rs. 4,899',oldPrice:'Rs. 6,100',image:'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=600&q=80'},
{id:'m6',category:'men',name:'VIP Urban Street Hype',price:'Rs. 5,799',oldPrice:'Rs. 7,499',image:'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=600&q=80'},
{id:'m7',category:'men',name:'VIP Stealth Black Performance',price:'Rs. 4,999',oldPrice:'Rs. 6,500',image:'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&w=600&q=80'},
{id:'m8',category:'men',name:'VIP Grey Air Mesh Trainer',price:'Rs. 3,999',oldPrice:'Rs. 5,000',image:'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80'},
{id:'m9',category:'men',name:'VIP High-Top Sport Sneaker',price:'Rs. 6,199',oldPrice:'Rs. 7,900',image:'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=600&q=80'},
{id:'m10',category:'men',name:'VIP Leather Luxury Loafer',price:'Rs. 6,999',oldPrice:'Rs. 8,999',image:'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=600&q=80'},
{id:'k1',category:'kids',name:'VIP Kids Color Block Sneaker',price:'Rs. 3,299',oldPrice:'Rs. 4,199',image:'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=600&q=80'},
{id:'k2',category:'kids',name:'VIP Kids Neon Speed Sport',price:'Rs. 2,999',oldPrice:'Rs. 3,800',image:'https://images.unsplash.com/photo-1507464098880-e36e3bc012b8?auto=format&fit=crop&w=600&q=80'},
{id:'k3',category:'kids',name:'VIP Kids Playtime Red Kick',price:'Rs. 2,799',oldPrice:'Rs. 3,500',image:'https://images.unsplash.com/photo-1562183241-b937e95585b6?auto=format&fit=crop&w=600&q=80'},
{id:'k4',category:'kids',name:'VIP Kids Vibrant Yellow',price:'Rs. 3,100',oldPrice:'Rs. 4,000',image:'https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=600&q=80'},
{id:'k5',category:'kids',name:'VIP Kids Soft Cushion Walk',price:'Rs. 2,499',oldPrice:'Rs. 3,200',image:'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=600&q=80'},
{id:'k6',category:'kids',name:'VIP Kids Sky Blue Canvas',price:'Rs. 2,899',oldPrice:'Rs. 3,600',image:'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=600&q=80'},
{id:'k7',category:'kids',name:'VIP Kids Dynamic Runner',price:'Rs. 3,499',oldPrice:'Rs. 4,400',image:'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?auto=format&fit=crop&w=600&q=80'},
{id:'k8',category:'kids',name:'VIP Kids Active Outdoor Pro',price:'Rs. 3,199',oldPrice:'Rs. 4,100',image:'https://images.unsplash.com/photo-1508170754725-6e9a5cfbcabf?auto=format&fit=crop&w=600&q=80'},
{id:'k9',category:'kids',name:'VIP Kids Comfy Everyday',price:'Rs. 2,699',oldPrice:'Rs. 3,400',image:'https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?auto=format&fit=crop&w=600&q=80'},
{id:'k10',category:'kids',name:'VIP Kids Star High-Top',price:'Rs. 3,599',oldPrice:'Rs. 4,600',image:'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=600&q=80'}];

function openPage(category){
 const page=document.getElementById('categoryPage'),title=document.getElementById('categoryTitle'),grid=document.getElementById('categoryGrid');
 const list=products.filter(p=>p.category===category);
 title.innerText=category.toUpperCase()+" COLLECTION ("+list.length+" ITEMS)";
 grid.innerHTML="";
 list.forEach(product=>{
  grid.innerHTML+=`<div class="product-card"><span class="badge">HOT</span><div class="wishlist"><i class="fa-regular fa-heart"></i></div><div class="shoe-frame"><img src="${product.image}" alt="${product.name}"><div class="embedded-vip-logo">👑<br>VIP</div></div><h3>${product.name}</h3><div class="price-row"><span class="price">${product.price}</span><span class="old-price">${product.oldPrice}</span></div><button class="add-cart-btn"><i class="fa-solid fa-cart-shopping"></i> ADD TO CART</button></div>`;
 });
 page.style.display='block';page.scrollIntoView({behavior:'smooth'});
}
function closePage(){document.getElementById('categoryPage').style.display='none'}
function filterCategory(cat){if(cat==='all')closePage();else openPage(cat)}
