/* WUJI SOAR GLOBAL TRADING product catalog — image-led B2B product & solution content */

const PRODUCTS = {
  "Metal Processing & Fabrication": [
    {name:"Sheet Metal & Fabrication", subcategory:"Sheet Metal & Fabrication", file:"images/Metal Processing & Fabrication/01_Sheet_Metal_Fabrication.jpg", desc:"Precision cutting, bending, welding and assembly for sheet-metal products.", use:"Enclosures, panels, brackets, cabinets, frames and custom fabricated parts"},
    {name:"CNC Machining", subcategory:"CNC Machining", file:"images/Metal Processing & Fabrication/02_CNC_Machining.jpg", desc:"High-precision machining for complex and custom metal components.", use:"Precision housings, mechanical components, fixtures and OEM parts"},
    {name:"Casting & Forging", subcategory:"Casting & Forging", file:"images/Metal Processing & Fabrication/03_Casting_Forging.jpg", desc:"Casting and forging solutions for strong, durable metal parts.", use:"Industrial components, structural parts, hardware and engineered products"},
    {name:"Metal Stamping", subcategory:"Metal Stamping", file:"images/Metal Processing & Fabrication/04_Metal_Stamping.jpg", desc:"Efficient and repeatable stamping for precision and high-volume production.", use:"Brackets, covers, clips, panels and formed metal components"},
    {name:"Aluminum Extrusion", subcategory:"Aluminum Extrusion", file:"images/Metal Processing & Fabrication/05_Aluminum_Extrusion.jpg", desc:"Lightweight, high-strength aluminum profiles for a wide range of applications.", use:"Frames, channels, housings, rails, heat-sink profiles and architectural sections"},
    {name:"Welding & Assembly", subcategory:"Welding & Assembly", file:"images/Metal Processing & Fabrication/06_Welding_Assembly.jpg", desc:"Reliable welding and professional assembly for finished metal products.", use:"Frames, structures, enclosures, equipment assemblies and custom products"},
    {name:"Surface Finishing", subcategory:"Surface Finishing", file:"images/Metal Processing & Fabrication/07_Surface_Finishing.jpg", desc:"Surface treatments that improve appearance, durability and corrosion resistance.", use:"Powder coating, anodizing, plating, polishing, brushing and finishing programs"},
    {name:"Custom Metal Components", subcategory:"Custom Metal Components", file:"images/Metal Processing & Fabrication/08_Custom_Metal_Components.jpg", desc:"Tailored metal components developed around drawings, samples or project requirements.", use:"OEM / ODM parts, prototypes, replacement components and custom assemblies"}
  ],

  "LED Lighting": [
    {name:"Architectural & Commercial Lighting", subcategory:"Architectural & Commercial", file:"images/LED Lighting/01_Architectural_Commercial_Lighting.jpg", desc:"High-efficiency LED lighting for commercial and architectural environments.", use:"Retail, hospitality, offices, façades, public spaces and commercial projects"},
    {name:"Indoor Linear & Ambient Lighting", subcategory:"Indoor Linear & Ambient", file:"images/LED Lighting/02_Indoor_Linear_Ambient_Lighting.jpg", desc:"Clean, modern LED solutions for ambient, linear and interior lighting.", use:"Homes, hotels, offices, showrooms, restaurants and interior projects"},
    {name:"Outdoor & Garden Lighting", subcategory:"Outdoor & Garden", file:"images/LED Lighting/03_Outdoor_Garden_Lighting.jpg", desc:"Weather-oriented lighting concepts for outdoor spaces and landscape projects.", use:"Gardens, pathways, resorts, parks, entrances and outdoor commercial spaces"},
    {name:"Decorative & Feature Lighting", subcategory:"Decorative & Feature", file:"images/LED Lighting/04_Decorative_Feature_Lighting.jpg", desc:"Decorative lighting designed to create visual accents and distinctive environments.", use:"Feature walls, architectural details, hospitality spaces, events and themed installations"}
  ],

  "LED Display": [
    {name:"Indoor Fine-Pitch LED Display", subcategory:"Indoor Fine-Pitch", file:"images/LED Display/01_Indoor_Fine_Pitch_LED_Display.jpg", desc:"High-resolution LED display solutions for indoor viewing environments.", use:"Meeting rooms, control rooms, retail, showrooms, museums and corporate spaces"},
    {name:"Outdoor Large-Format LED Display", subcategory:"Outdoor Large-Format", file:"images/LED Display/02_Outdoor_Large_Format_LED_Display.jpg", desc:"Large-format LED display concepts for high-visibility outdoor applications.", use:"Advertising, public venues, commercial façades, sports and outdoor events"},
    {name:"Rental & Stage LED Display", subcategory:"Rental & Stage", file:"images/LED Display/03_Rental_Stage_LED_Display.jpg", desc:"High-impact LED display solutions for events, stages and temporary installations.", use:"Concerts, conferences, exhibitions, festivals, live events and stage production"},
    {name:"Commercial & Event LED Display", subcategory:"Commercial & Event", file:"images/LED Display/04_Commercial_Event_LED_Display.jpg", desc:"Flexible visual display solutions for commercial communication and events.", use:"Brand activations, retail campaigns, exhibitions, presentations and creative installations"}
  ],

  "LED Landscape Art": [
    {name:"LED Arch", subcategory:"Illuminated Structures", file:"images/LED Landscape Art/LED Arch.png", desc:"Decorative illuminated arch structure for landscape and event displays.", use:"Gardens, entrances, events and seasonal installations"},
    {name:"LED Christmas Tree", subcategory:"Seasonal Displays", file:"images/LED Landscape Art/LED Christmas Tree.png", desc:"Decorative LED Christmas tree display pieces.", use:"Christmas events, malls, hotels and seasonal decoration"},
    {name:"LED Curtain", subcategory:"Curtain & Net Lighting", file:"images/LED Landscape Art/LED Curtain.png", desc:"Colorful LED curtain installation for decorative light scenes.", use:"Events, stages, commercial interiors and photo spaces"},
    {name:"LED letters", subcategory:"Illuminated Signage", file:"images/LED Landscape Art/LED letters.png", desc:"Illuminated decorative letter signage for branded and event environments.", use:"Events, weddings, retail displays and branded spaces"},
    {name:"LED Net", subcategory:"Curtain & Net Lighting", file:"images/LED Landscape Art/LED Net.png", desc:"Flexible LED net lighting for covering or outlining spaces.", use:"Trees, walls, gardens, event structures and seasonal decoration"},
    {name:"LED Puppy", subcategory:"Light Sculptures", file:"images/LED Landscape Art/LED Puppy.png", desc:"Decorative illuminated puppy sculpture.", use:"Gardens, malls, events and family-oriented displays"},
    {name:"LED Rabbit", subcategory:"Light Sculptures", file:"images/LED Landscape Art/LED Rabbit.png", desc:"Decorative illuminated rabbit sculpture.", use:"Gardens, malls, events and seasonal displays"},
    {name:"LED Skeleton", subcategory:"Themed Light Sculptures", file:"images/LED Landscape Art/LED Skeleton.png", desc:"Illuminated themed decorative figure.", use:"Halloween, theme venues, events and photo installations"},
    {name:"LED Snowman", subcategory:"Seasonal Displays", file:"images/LED Landscape Art/LED Snowman.png", desc:"Illuminated snowman decorative figure.", use:"Christmas displays, malls, hotels and outdoor decoration"},
    {name:"LED Spidder", subcategory:"Themed Light Sculptures", file:"images/LED Landscape Art/LED Spidder.png", desc:"Spider-shaped LED decorative light.", use:"Halloween, themed events, gardens and installations"},
    {name:"LED Skeleton Hands", subcategory:"Themed Light Sculptures", file:"images/LED Landscape Art/LED Skeleton Hands.png", desc:"Illuminated skeleton-hand decorative installation.", use:"Halloween events, themed venues and seasonal displays"},
    {name:"LED Curtain(2)", subcategory:"Curtain & Net Lighting", file:"images/LED Landscape Art/LED Curtain(2).png", desc:"Programmable-style LED curtain display for decorative light patterns.", use:"Stage backdrops, events, retail displays and interiors"}
  ],

  "Premium Bluetooth Audio Series": [
    {name:"Mini RGB Portable Speaker H18", subcategory:"Portable Bluetooth Speakers", file:"images/Premium Bluetooth Audio Series/1_H18.png", desc:"Compact portable speaker with RGB lighting.", use:"Gaming, parties, gifting and lifestyle retail"},
    {name:"Magnetic Wireless Charging H11", subcategory:"Wireless Charging Audio", file:"images/Premium Bluetooth Audio Series/2_H11.png", desc:"Bluetooth audio product with a magnetic wireless charging concept.", use:"Desktop, bedside and lifestyle electronics"},
    {name:"Portable Bluetooth Speaker H15", subcategory:"Portable Bluetooth Speakers", file:"images/Premium Bluetooth Audio Series/3_H15.png", desc:"Portable Bluetooth speaker with compact lifestyle design.", use:"Travel, gifting and everyday audio"},
    {name:"Alarm Clock Wireless H39", subcategory:"Smart Desktop Audio", file:"images/Premium Bluetooth Audio Series/4_H39.png", desc:"Desktop audio product combining alarm-clock and wireless charging styling.", use:"Bedroom, office and bedside electronics"},
    {name:"Outdoor Karaoke Speaker K100", subcategory:"Karaoke & Party Audio", file:"images/Premium Bluetooth Audio Series/5_K100.png", desc:"Large-format portable karaoke speaker with lighting-focused styling.", use:"Outdoor entertainment, parties and karaoke"},
    {name:"IPX4 Waterproof Bass H16", subcategory:"Outdoor Bluetooth Speakers", file:"images/Premium Bluetooth Audio Series/6_H16.png", desc:"Portable Bluetooth speaker focused on bass and splash-resistant use.", use:"Outdoor leisure, travel and poolside-style environments"},
    {name:"RGB Light Mic Speaker H14", subcategory:"Karaoke & Party Audio", file:"images/Premium Bluetooth Audio Series/7_H14.png", desc:"Speaker and microphone combination with RGB lighting.", use:"Karaoke, parties, entertainment and gifting"},
    {name:"Portable Bluetooth Speaker H002", subcategory:"Portable Bluetooth Speakers", file:"images/Premium Bluetooth Audio Series/H002.png", desc:"Compact portable Bluetooth speaker.", use:"Portable audio, gifting and retail"},
    {name:"Bluetooth Speaker H12", subcategory:"Portable Bluetooth Speakers", file:"images/Premium Bluetooth Audio Series/H12.png", desc:"Portable Bluetooth speaker for everyday wireless listening.", use:"Retail audio, travel and home use"},
    {name:"Premium Bluetooth Speaker H120 Pro", subcategory:"Premium Home & Party Audio", file:"images/Premium Bluetooth Audio Series/H120 Pro.png", desc:"Premium-style Bluetooth speaker with a larger enclosure.", use:"Home, party and higher-value audio retail"}
  ],
  "Seating System": [
    {name:"Retractable Seating Systems", subcategory:"Retractable Seating", file:"images/Seating System/Retractable system.png", desc:"Space-saving retractable seating solutions for sports halls and multi-purpose venues.", use:"Stadiums, auditoriums, schools, event halls and flexible venues"},
    {name:"Metal Grandstand Systems", subcategory:"Metal Grandstands", file:"images/Seating System/Metal Grand.png", desc:"Durable metal grandstand structures designed for indoor and outdoor facilities.", use:"Sports fields, outdoor events, stadiums and public venues"}
  ]

};

const CATEGORY_DESCRIPTIONS = {
  "Metal Processing & Fabrication":"From precision cutting and CNC machining to welding, finishing and custom components, we support OEM / ODM metal manufacturing requirements.",
  "LED Lighting":"Energy-efficient LED solutions for architectural, commercial, indoor, outdoor and decorative applications.",
  "LED Display":"High-resolution visual display solutions for indoor, outdoor, commercial, event and stage applications.",
  "LED Landscape Art":"Illuminated sculptures, arches, curtains, letters and seasonal displays for landscape, event and commercial environments.",
  "Premium Bluetooth Audio Series":"Portable speakers, karaoke products, RGB audio, wireless charging and lifestyle sound products for global retail and sourcing programs.",
  "Seating System":"Retractable seating and metal grandstand systems for sports, event and public facilities."
};

const CATEGORY_TAGS = {
  "Metal Processing & Fabrication":"Fabrication · CNC · Casting · Stamping · Finishing",
  "LED Lighting":"Architectural · Indoor · Outdoor · Decorative",
  "LED Display":"Indoor · Outdoor · Rental · Commercial",
  "LED Landscape Art":"Sculptures · Structures · Seasonal · Event",
  "Premium Bluetooth Audio Series":"Bluetooth · RGB · Karaoke · Wireless Charging",
  "Seating System":"Retractable · Grandstand · Venue Solutions"
};

const CORE_CATEGORIES = [
  {name:"Metal Processing & Fabrication", file:"images/Category Covers/Metal Processing & Fabrication.jpg", desc:"Precision manufacturing and custom metal solutions."},
  {name:"LED Landscape Art", file:"images/Category Covers/LED Landscape Art.jpg", desc:"Creative illuminated installations and seasonal displays."},
  {name:"LED Lighting", file:"images/Category Covers/LED Lighting.jpg", desc:"Efficient lighting for architectural and commercial spaces."},
  {name:"LED Display", file:"images/Category Covers/LED Display.jpg", desc:"High-resolution display solutions for visual communication."},
  {name:"Premium Bluetooth Audio Series", file:"images/Category Covers/Premium Bluetooth Audio Series.jpg", desc:"Modern wireless audio, RGB and karaoke products."},
  {name:"Seating System", file:"images/Seating System/Retractable system.png", desc:"Retractable seating and metal grandstand systems."}
];

function esc(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function allProducts(){return Object.entries(PRODUCTS).flatMap(([category,items])=>items.map(p=>({...p,category})));}
let activeCategory='All', searchTerm='';

function productCard(p){
  const desc=p.desc||'Product shown in the WUJI SOAR GLOBAL TRADING collection for global sourcing.';
  return `<article class="product-card" tabindex="0" data-product="${esc(JSON.stringify(p))}">
    <div class="product-image"><img src="${esc(p.file)}" alt="${esc(p.name)}" loading="lazy"></div>
    <div class="product-info">
      <span class="product-category">${esc(p.subcategory||p.category)}</span>
      <h3>${esc(p.name)}</h3>
      <p>${esc(desc)}</p>
      <div class="product-meta"><span class="badge">Get Quote</span><span class="view-more">View details →</span></div>
    </div>
  </article>`;
}

function filteredProducts(){
  return allProducts().filter(p=>
    (activeCategory==='All'||p.category===activeCategory) &&
    (!searchTerm||(`${p.name} ${p.category} ${p.subcategory||''} ${p.desc||''} ${p.use||''}`).toLowerCase().includes(searchTerm.toLowerCase()))
  );
}

function renderFilters(){
  const cats=['All',...Object.keys(PRODUCTS)];
  document.getElementById('filterPills').innerHTML=cats.map(c=>`<button class="filter-pill ${c===activeCategory?'active':''}" data-category="${esc(c)}">${esc(c)}</button>`).join('');
  document.querySelectorAll('.filter-pill').forEach(b=>b.addEventListener('click',()=>{
    activeCategory=b.dataset.category; renderFilters(); renderCatalog();
  }));
}

function renderCoreCategories(){
  const root=document.getElementById('coreCategories');
  if(!root)return;
  root.innerHTML=CORE_CATEGORIES.map(c=>`<button class="core-card reveal" data-category="${esc(c.name)}">
    <div class="core-image"><img src="${esc(c.file)}" alt="${esc(c.name)}" loading="lazy"></div>
    <div class="core-content"><span>${esc(c.name)}</span><p>${esc(c.desc)}</p><b>Explore →</b></div>
  </button>`).join('');
  document.querySelectorAll('.core-card').forEach(card=>card.addEventListener('click',()=>{
    activeCategory=card.dataset.category;
    renderFilters(); renderCatalog();
    document.getElementById('products').scrollIntoView({behavior:'smooth'});
  }));
}

function categoryVisuals(items){
  return items.slice(0,3).map(p=>`<div class="category-visual"><img src="${esc(p.file)}" alt="${esc(p.name)}" loading="lazy"></div>`).join('');
}

function renderCatalog(){
  const groups={};
  filteredProducts().forEach(p=>(groups[p.category]??=[]).push(p));
  const root=document.getElementById('catalogRoot');
  root.innerHTML=Object.entries(groups).map(([category,items],idx)=>{
    const id='cat-'+idx;
    const originals=PRODUCTS[category]||[];
    const desc=CATEGORY_DESCRIPTIONS[category]||'Product collection for global sourcing.';
    const tag=CATEGORY_TAGS[category]||'Product Collection';
    return `<div class="category reveal">
      <div class="category-head">
        <div class="category-copy">
          <span class="category-tag">${esc(tag)}</span>
          <h3 class="category-title">${esc(category)}</h3>
          <p class="category-desc">${esc(desc)}</p>
          <a class="category-link" href="#contact" data-category="${esc(category)}">Request category quotation →</a>
        </div>
        <div class="category-visuals">${categoryVisuals(originals)}</div>
      </div>
      <div class="carousel-wrap">
        <button class="carousel-btn prev" data-target="${id}" aria-label="Previous">‹</button>
        <div class="product-track" id="${id}">${items.map(productCard).join('')}</div>
        <button class="carousel-btn next" data-target="${id}" aria-label="Next">›</button>
      </div>
    </div>`;
  }).join('');
  document.getElementById('catalogCount').textContent=`Showing ${filteredProducts().length} catalog items across ${Object.keys(PRODUCTS).length} core categories`;
  bindProducts(); bindCarousels(); bindCategoryLinks(); observeReveals();
}

function openModal(p){
  const desc=p.desc||'Product shown in the WUJI SOAR GLOBAL TRADING collection.';
  const use=p.use||'Global sourcing, retail and project enquiries.';
  document.getElementById('modalTitle').textContent=p.name;
  document.getElementById('modalBody').innerHTML=`<div class="modal-product">
    <div class="modal-image"><img src="${esc(p.file)}" alt="${esc(p.name)}"></div>
    <div>
      <span class="product-category">${esc(p.subcategory||p.category)}</span>
      <h3>${esc(p.name)}</h3>
      <p class="modal-description">${esc(desc)}</p>
      <div class="modal-section"><strong>Typical applications</strong><p>${esc(use)}</p></div>
      <div class="modal-section"><strong>Quotation can cover</strong>
        <ul class="specs">
          <li>Model and specification confirmation</li>
          <li>MOQ and quantity-based pricing</li>
          <li>Logo / packaging or selected customization</li>
          <li>Sample availability and lead-time discussion</li>
        </ul>
      </div>
      <button class="btn btn-primary quote-btn" data-quote="${esc(p.name)}" style="width:100%;margin-top:20px">Request a Quote →</button>
    </div>
  </div>`;
  document.getElementById('productModal').classList.add('open');
  document.body.classList.add('modal-open');
}

function closeModal(){document.getElementById('productModal').classList.remove('open');document.body.classList.remove('modal-open');}
function requestQuote(name){
  closeModal();
  const msg=document.getElementById('userMsg');
  msg.value=`I am interested in ${name}. Please provide MOQ, pricing, lead time, available customization options and sample information.`;
  document.getElementById('contact').scrollIntoView({behavior:'smooth'});
  setTimeout(()=>document.getElementById('userName').focus(),500);
}
function bindProducts(){
  document.querySelectorAll('.product-card').forEach(card=>{
    const p=JSON.parse(card.dataset.product);
    card.onclick=()=>openModal(p);
    card.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openModal(p);}};
  });
}
function bindCarousels(){
  document.querySelectorAll('.carousel-btn').forEach(btn=>{
    btn.onclick=()=>{
      const track=document.getElementById(btn.dataset.target);
      track.scrollBy({left:btn.classList.contains('next')?Math.min(650,track.clientWidth*.78):-Math.min(650,track.clientWidth*.78),behavior:'smooth'});
    };
  });
}
function bindCategoryLinks(){
  document.querySelectorAll('.category-link').forEach(a=>a.onclick=()=>{
    const msg=document.getElementById('userMsg');
    if(msg)msg.value=`I am interested in the ${a.dataset.category} category. Please send me the available models, MOQ, pricing and customization options.`;
  });
}
function observeReveals(){
  if(!('IntersectionObserver'in window)){document.querySelectorAll('.reveal').forEach(e=>e.classList.add('visible'));return;}
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.08});
  document.querySelectorAll('.reveal:not(.visible)').forEach(el=>observer.observe(el));
}
function showToast(msg,error=false){
  const old=document.querySelector('.toast');if(old)old.remove();
  const el=document.createElement('div');el.className='toast'+(error?' error':'');el.textContent=msg;document.body.appendChild(el);setTimeout(()=>el.remove(),5000);
}
document.getElementById('menuBtn').addEventListener('click',()=>document.getElementById('navLinks').classList.toggle('open'));
document.querySelectorAll('#navLinks a').forEach(a=>a.addEventListener('click',()=>document.getElementById('navLinks').classList.remove('open')));
document.getElementById('closeModal').addEventListener('click',closeModal);
document.getElementById('productModal').addEventListener('click',e=>{if(e.target.id==='productModal')closeModal();});
document.getElementById('modalBody').addEventListener('click',e=>{const btn=e.target.closest('.quote-btn');if(btn)requestQuote(btn.dataset.quote);});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});
document.getElementById('inquiryForm').addEventListener('submit',async e=>{
  e.preventDefault();
  const name=document.getElementById('userName').value.trim(),country=document.getElementById('userCountry').value.trim(),email=document.getElementById('userEmail').value.trim(),phone=document.getElementById('userPhone').value.trim(),message=document.getElementById('userMsg').value.trim();
  if(!name){showToast('Please enter your full name.',true);return;}
  if(!country){showToast('Please enter your country or region.',true);return;}
  if(!email&&!phone){showToast('Please provide an email or phone number.',true);return;}
  if(email&&!/^\S+@\S+\.\S+$/.test(email)){showToast('Please enter a valid email address.',true);return;}
  if(!message){showToast('Please tell us what products you need.',true);return;}
  const btn=document.getElementById('submitBtn'),old=btn.textContent;btn.disabled=true;btn.textContent='Sending...';
  const fd=new FormData();fd.append('name',name);fd.append('country',country);fd.append('email',email);fd.append('phone',phone);fd.append('message',message);fd.append('_subject',`New WUJI SOAR GLOBAL TRADING inquiry from ${name} (${country})`);fd.append('_replyto',email||'sales@wujisoar.com');fd.append('_captcha','false');
  try{
    const resp=await fetch('https://formsubmit.co/ajax/sales@wujisoar.com',{method:'POST',body:fd});
    if(!resp.ok)throw new Error('send failed');
    showToast(`Thank you ${name}. Your inquiry has been sent to sales@wujisoar.com.`);e.target.reset();
  }catch(err){showToast('Unable to send online. Please email sales@wujisoar.com directly.',true);}
  finally{btn.disabled=false;btn.textContent=old;}
});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
  const target=document.querySelector(a.getAttribute('href'));
  if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'});}
}));
renderCoreCategories();
renderFilters();
renderCatalog();
document.getElementById('productSearch').addEventListener('input',e=>{searchTerm=e.target.value.trim();renderCatalog();});
observeReveals();
