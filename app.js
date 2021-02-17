/*
Location	Min / Cust	Max / Cust	Avg Cookie / Sale
Seattle	23	65	6.3
Tokyo	3	24	1.2
Dubai	11	38	3.7
Paris	20	38	2.3
Lima	2	16	4.6
*/

// we need cookiesEachHour for all the time slots
let timeSlots = [
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
    'Daily Location Totals',
  ];
  
  function randomInRange(min, max) {
  
    let range = max - min;
      
       return Math.floor(Math.random() * (range + 1)) + min;
  } 

      
      
      
  function CookieStand (id, location, min, max, avg, cookieSales = []) {
    this.id = id;
    this.location = location;
    this.minCustomersPerHour = min;
    this.maxCustomersPerHour = max;
    this.avgCookiesPerSale = avg;
    this.storeTotal = 0;
    this.cookieSales = cookieSales;
  }    

  let standSeattle = new CookieStand ('seattle', 'Seattle Stand', 23, 65, 6.3);
  let standTokyo = new CookieStand ('tokyo', 'Tokyo Stand', 3, 24, 1.2);
  let standDubai = new CookieStand ('dubai', 'Dubai Stand', 11, 38, 3.7);
  let standParis = new CookieStand ('paris', 'Paris Stand', 20, 38, 2.3);
  let standLima = new CookieStand ('lima', 'Lima Stand',2, 16, 4.6);
  let allStands = [standSeattle, standTokyo, standDubai, standParis, standLima];

  CookieStand.prototype.generateCustomersPerHour = function() {
    let customersPerHour = randomInRange(this.minCustomersPerHour, this.maxCustomersPerHour);
    console.log(customersPerHour);
    return customersPerHour;
  }
    for (let i = 0; i < allStands.length; i++) {
      allStands[i].generateCustomersPerHour();
    }
      
    

  CookieStand.prototype.calcCookiesEachHour = function() {
   let customersPerHour = this.generateCustomersPerHour();
   let cookiesEachHour = customersPerHour * this.avgCookiesPerSale;
   console.log(Math.ceil(cookiesEachHour));
   return Math.ceil(cookiesEachHour);
  }

  CookieStand.prototype.simulateCookieSales = function() {
    for (let i = 0; i < timeSlots.length -1; i++) {
      let certainCookie = this.calcCookiesEachHour();
      this.cookieSales.push(certainCookie);
      this.storeTotal += certainCookie;       
    }
    this.cookieSales.push(this.storeTotal);

  }

  CookieStand.prototype.render =  function(){
    const salesRow = document.createElement('tr');
    const tableElem = document.getElementById('table');
    tableElem.appendChild(salesRow);
    const tableCell = document.createElement('td');
    salesRow.appendChild(tableCell);
    tableCell.textContent = this.location;
    for (let i = 0; i < this.cookieSales.length; i++) {
      const cookiesElem = document.createElement('td');
      cookiesElem.textContent = this.cookieSales[i];
      salesRow.appendChild(cookiesElem);
    }

  }

  function renderHeaderRow(){
    const tableElem = document.getElementById('table');
    const rowOne = document.createElement('tr');
    tableElem.appendChild(rowOne);
    const emptyTh = document.createElement('th');
    rowOne.appendChild(emptyTh);
    for (let i = 0; i < timeSlots.length; i++) {
      const timeHeaderElem = document.createElement('th');
      timeHeaderElem.textContent = timeSlots[i];
      rowOne.appendChild(timeHeaderElem);
      timeHeaderElem.setAttribute('scope', 'col');
      
    }
  }

renderHeaderRow();

  for (let i = 0; i < allStands. length; i++) {
    allStands[i].calcCookiesEachHour();
    allStands[i].simulateCookieSales();
    allStands[i].render();
  }

  