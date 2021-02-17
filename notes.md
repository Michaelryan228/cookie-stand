  // let seattle = {
  //   id: 'seattle',
  //   location: 'Seattle',
  //   minCustomersPerHour: 23,
  //   maxCustomersPerHour: 65,
  //   avgCookiesPerSale: 6.3,
  //   cookieSales: [],
  //   generateCustomersPerHour: function () {
  //     let customersPerHour = randomInRange(this.minCustomersPerHour, this.maxCustomersPerHour);
  //     return customersPerHour;
  //   },
  //   calcCookiesEachHour: function () {
  //     let customersPerHour = this.generateCustomersPerHour();
  //     let cookiesEachHour = customersPerHour * this.avgCookiesPerSale;
  
  //     return Math.ceil(cookiesEachHour);
  //   },
  //   simulateCookieSales: function() {
  //     // calculate each hour's cookie sales and store in this.cookieSales
  //   },
  //   render: function () {

  //     let storeTotal= 0;
  
  //     this.simulateCookieSales();
  
  //     let ulElem = document.getElementById(this.id);
  
  //     for (let i = 0; i < timeSlots.length; i++) {

  //       let certainCookie= this.calcCookiesEachHour();
  //       storeTotal+= certainCookie        
  
  //       let liElem = document.createElement('li');
  
  //       // TODO: grab from this.cookieSales
  //       // liElem.textContent = timeSlots[i] + ': ' + this.cookieSales[i] + ' cookies';
  
  //       liElem.textContent = timeSlots[i] + ': ' + this.calcCookiesEachHour() + ' cookies';
  
  //       ulElem.appendChild(liElem);
  //     }
  
  //     // TODO: total sales for location
  //     let totalElem = document.createElement('li');
  //     totalElem.textContent = 'Total: ' + storeTotal + ' cookies';
  //     ulElem.appendChild(totalElem);  
  //   },
  // };
  
  
  
  // // render locations
  // seattle.render();

  // let tokyo = {
  //   id: 'tokyo',
  //   location: 'Tokyo',
  //   minCustomersPerHour: 3,
  //   maxCustomersPerHour: 24,
  //   avgCookiesPerSale: 1.2,
  //   cookieSales: [],
  //   generateCustomersPerHour: function () {
  //     let customersPerHour = randomInRange(this.minCustomersPerHour, this.maxCustomersPerHour);
  //     return customersPerHour;
  //   },
  //   calcCookiesEachHour: function () {
  //     let customersPerHour = this.generateCustomersPerHour();
  //     let cookiesEachHour = customersPerHour * this.avgCookiesPerSale;
  
  //     return Math.ceil(cookiesEachHour);
  //   },
  //   simulateCookieSales: function() {
  //     // calculate each hour's cookie sales and store in this.cookieSales
  //   },
  //   render: function () {

  //     let storeTotal= 0;
  
  //     this.simulateCookieSales();
  
  //     let ulElem = document.getElementById(this.id);
  
  //     for (let i = 0; i < timeSlots.length; i++) {

  //       let certainCookie= this.calcCookiesEachHour();
  //       storeTotal+= certainCookie        
  
  //       let liElem = document.createElement('li');
  
  //       // TODO: grab from this.cookieSales
  //       // liElem.textContent = timeSlots[i] + ': ' + this.cookieSales[i] + ' cookies';
  
  //       liElem.textContent = timeSlots[i] + ': ' + this.calcCookiesEachHour() + ' cookies';
  
  //       ulElem.appendChild(liElem);
  //     }
  
  //     // TODO: total sales for location
  //     let totalElem = document.createElement('li');
  //     totalElem.textContent = 'Total: ' + storeTotal + ' cookies';
  //     ulElem.appendChild(totalElem);  
  //   },
  // };
  
  
  
  // // render locations
  // tokyo.render();

  // let dubai = {
  //   id: 'dubai',
  //   location: 'Dubai',
  //   minCustomersPerHour: 11,
  //   maxCustomersPerHour: 38,
  //   avgCookiesPerSale: 3.7,
  //   cookieSales: [],
  //   generateCustomersPerHour: function () {
  //     let customersPerHour = randomInRange(this.minCustomersPerHour, this.maxCustomersPerHour);
  //     return customersPerHour;
  //   },
  //   calcCookiesEachHour: function () {
  //     let customersPerHour = this.generateCustomersPerHour();
  //     let cookiesEachHour = customersPerHour * this.avgCookiesPerSale;
  
  //     return Math.ceil(cookiesEachHour);
  //   },
  //   simulateCookieSales: function() {
  //     // calculate each hour's cookie sales and store in this.cookieSales
  //   },
  //   render: function () {

  //     let storeTotal= 0;
  
  //     this.simulateCookieSales();
  
  //     let ulElem = document.getElementById(this.id);
  
  //     for (let i = 0; i < timeSlots.length; i++) {

  //       let certainCookie= this.calcCookiesEachHour();
  //       storeTotal+= certainCookie

  //       let liElem = document.createElement('li');
  
  //       // TODO: grab from this.cookieSales
  //       // liElem.textContent = timeSlots[i] + ': ' + this.cookieSales[i] + ' cookies';
  
  //       liElem.textContent = timeSlots[i] + ': ' + this.calcCookiesEachHour() + ' cookies';
  
  //       ulElem.appendChild(liElem);
  //     }
  
  //     // TODO: total sales for location
  //     let totalElem = document.createElement('li');
  //     totalElem.textContent = 'Total: ' + storeTotal + ' cookies';
  //     ulElem.appendChild(totalElem); 
  //   },
  // };
  
  
  
  // // render locations
  // dubai.render();

  // let paris = {
  //   id: 'paris',
  //   location: 'Paris',
  //   minCustomersPerHour: 20,
  //   maxCustomersPerHour: 38,
  //   avgCookiesPerSale: 2.3,
  //   cookieSales: [],
  //   generateCustomersPerHour: function () {
  //     let customersPerHour = randomInRange(this.minCustomersPerHour, this.maxCustomersPerHour);
  //     return customersPerHour;
  //   },
  //   calcCookiesEachHour: function () {
  //     let customersPerHour = this.generateCustomersPerHour();
  //     let cookiesEachHour = customersPerHour * this.avgCookiesPerSale;
  
  //     return Math.ceil(cookiesEachHour);
  //   },
  //   simulateCookieSales: function() {
  //     // calculate each hour's cookie sales and store in this.cookieSales
  //   },
  //   render: function () {

  //     let storeTotal= 0;
  
  //     this.simulateCookieSales();
  
  //     let ulElem = document.getElementById(this.id);
  
  //     for (let i = 0; i < timeSlots.length; i++) {

  //       let certainCookie= this.calcCookiesEachHour();
  //       storeTotal+= certainCookie        
  
  //       let liElem = document.createElement('li');
  
  //       // TODO: grab from this.cookieSales
  //       // liElem.textContent = timeSlots[i] + ': ' + this.cookieSales[i] + ' cookies';
  
  //       liElem.textContent = timeSlots[i] + ': ' + this.calcCookiesEachHour() + ' cookies';
  
  //       ulElem.appendChild(liElem);
  //     }
  
  //     // TODO: total sales for location
  //     let totalElem = document.createElement('li');
  //     totalElem.textContent = 'Total: ' + storeTotal + ' cookies';
  //     ulElem.appendChild(totalElem);
  //   },
  // };
  
  
  
  // // render locations
  // paris.render();

  // let lima = {
  //   id: 'lima',
  //   location: 'Lima',
  //   minCustomersPerHour: 2,
  //   maxCustomersPerHour: 16,
  //   avgCookiesPerSale: 4.6,
  //   cookieSales: [],
  //   generateCustomersPerHour: function () {
  //     let customersPerHour = randomInRange(this.minCustomersPerHour, this.maxCustomersPerHour);
  //     return customersPerHour;
  //   },
  //   calcCookiesEachHour: function () {
  //     let customersPerHour = this.generateCustomersPerHour();
  //     let cookiesEachHour = customersPerHour * this.avgCookiesPerSale;
  
  //     return Math.ceil(cookiesEachHour);
  //   },
  //   simulateCookieSales: function() {
  //     // calculate each hour's cookie sales and store in this.cookieSales
  //   },
  //   render: function () {
      
  //     let storeTotal= 0;

  //     this.simulateCookieSales();
  
  //     let ulElem = document.getElementById(this.id);
  
  //     for (let i = 0; i < timeSlots.length; i++) {
        
  //       let certainCookie= this.calcCookiesEachHour();
  //       storeTotal+= certainCookie

  //       let liElem = document.createElement('li');
  
  //       // TODO: grab from this.cookieSales
  //       // liElem.textContent = timeSlots[i] + ': ' + this.cookieSales[i] + ' cookies';
  
  //       liElem.textContent = timeSlots[i] + ': ' + certainCookie + ' cookies';
  
  //       ulElem.appendChild(liElem);
  //     }
  
  //     // TODO: total sales for location
  //     let totalElem = document.createElement('li');
  //     totalElem.textContent = 'Total: ' + storeTotal + ' cookies';
  //     ulElem.appendChild(totalElem);
  //   },
  // };
  
  
  
  // // render locations
  // lima.render();

  // let total = {
  //   id: 'total',
  //   location: 'Total',
  //   minCustomersPerHour: 59,
  //   maxCustomersPerHour: 181,
  //   avgCookiesPerSale: 18.1,
  //   cookieSales: [],
  //   generateCustomersPerHour: function () {
  //     let customersPerHour = randomInRange(this.minCustomersPerHour, this.maxCustomersPerHour);
  //     return customersPerHour;
  //   },
  //   calcCookiesEachHour: function () {
  //     let customersPerHour = this.generateCustomersPerHour();
  //     let cookiesEachHour = customersPerHour * this.avgCookiesPerSale;
  
  //     return Math.ceil(cookiesEachHour);
  //   },
  //   simulateCookieSales: function() {
  //     // calculate each hour's cookie sales and store in this.cookieSales
  //   },
  //   render: function () {
  
  //     this.simulateCookieSales();
  
  //     let ulElem = document.getElementById(this.id);
  
  //     for (let i = 0; i < timeSlots.length; i++) {
  
  //       let liElem = document.createElement('li');
  
  //       // TODO: grab from this.cookieSales
  //       // liElem.textContent = timeSlots[i] + ': ' + this.cookieSales[i] + ' cookies';
  
  //       liElem.textContent = timeSlots[i] + ': ' + this.calcCookiesEachHour() + ' cookies';
  
  //       ulElem.appendChild(liElem);
  //     }
  
  //     // TODO: total sales for location
  
  //   },
  // };
  
  
  
  // // render locations
  // total.render();