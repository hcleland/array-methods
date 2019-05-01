console.log("I'm here too");

const outEl = document.querySelector("#output")
outEl.innerHTML = "<h1>Active Businesses</h1>"

const outEl2 = document.querySelector("#manufacturing")
outEl2.innerHTML = "<h1>Manufacturing Businesses</h1>"

const outEl3 = document.querySelector("#purchasing")
outEl3.innerHTML = "<h1>Purchasing Agents</h1>"

// businesses.forEach(business => {
//   outEl.innerHTML += `
//     <h2>${business.companyName}</h2>
//     <section>
//       ${business.addressFullStreet}
//     </section>
//   `
//   outEl.innerHTML += "<hr/>"
// });


// Lightning Exercise: Add another section sibling to the current one and use object 
// dot notation to display each company's city. Use square bracket notation to display // the state code. Use dynamic square bracket notation to add the zip code.

// businesses.forEach(business => {
//     outEl.innerHTML += `
//       <h2>${business.companyName}</h2>
//       <section>
//         ${business.addressFullStreet}
//       </section>
//       <section>
//         ${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}
//       </section>
//     `
//     outEl.innerHTML += "<hr/>"
//   });

// const businessOutput = document.querySelector("#output");
// console.log("businessOutput", businessOutput);



// let newYorkBusiness = businesses.filter(business => {
//     console.log("what is a business", business);
//     let inNewYork = false;

//     if (business.addressStateCode === "NY") {
//         inNewYork = true;
//     }

//     return inNewYork;
// });

// console.log("newYorkBusiness", newYorkBusiness);
// console.log("original array", businesses.length );

// businesses.filter(biz => biz.addressStateCode === "NY")
//     .forEach(business => {
//         console.log("what is a business", business);
//         businessOutput.innerHTML += `
//             <h2>${business.companyName}</h2>
//             <address>${business.addressStateCode}</address>
//             <hr>
//         `
// });

// function showBusiness(business){
//     return `<div>${business.companyName}</div>`
// }

// let newStuff = businesses.map(showBusiness);
// businessOutput.innerHTML += newStuff.join("");

// Lightning Exercise: Use filter() to create another array named 
// manufacturingBusinesses that will contain all businesses in the manufacturing 
// industry. Display those to the DOM.

// Array to contain all the New York businesses
// const manufacturingBusinesses = businesses.filter(business => {
  
//     if (business.companyIndustry === "Manufacturing") {
//         outEl2.innerHTML += `
//         <h2>${business.companyName}</h2>

//         <section>
//           ${business.companyIndustry}
//         </section>
//       `
//       outEl.innerHTML += "<hr/>"
//     }
//   });

/*
    Using map(), you extract the purchasing agent object
    from each business and store it in a new array
*/
const agents = businesses.map(business => {
    return {
    "fullName": business.purchasingAgent.nameFirst + " " + business.purchasingAgent.nameLast,
    "company": business.companyName,
    "phoneNumber": business.phoneWork
    }
})
console.log(agents);
console.table(agents)

agents.forEach(agent => {
  outEl3.innerHTML += 
  `<h2>${agent.fullName}</h2>
  <p>${agent.company}</p>
  <p>${agent.phoneNumber}</p>`;
  outEl3.innerHTML += "<hr/>";
});

// Lightning Exercise: Instead of just returning the purchasing agent object, return a new object that has the full name of the purchasing agent, the company name, and the phone number. The data structure is shown below. Use that new data structure to display the agent with their company and phone number

// {
//     "fullName": "Kaylee Gutkowski",
//     "company": "Highnix",
//     "phoneNumber": "235.266.6278"
// }
// ************************************************************************************

// const candies = [
//     {
//         name: "Lollipop",
//         price: 2.99
//     },
//     {
//         name: "Tootsie Roll",
//         price: 1.49
//     },
//     {
//         name: "Sugar Daddy",
//         price: 2.49
//     }
// ]

// const firstCheapCandy = candies.find(candy => {
//     console.log("candy", candy);
//     return candy.price < 2.00
// });

// console.log("firstCheapCandy", firstCheapCandy);

// document
//     .querySelector("#companySearch")
//     .addEventListener("keypress", keyPressEvent => {
//         if (keyPressEvent.charCode === 13) {
//             /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
//             const foundBusiness = businesses.find(
//                 business =>
//                     business.companyName.includes(keyPressEvent.target.value)
//             );

//             outEl.innerHTML = `
//                 <h2>
//                 ${foundBusiness.companyName}
//                 </h2>
//                 <section>
//                 ${foundBusiness.addressFullStreet}

//                 </section>
//                 <section>
//                 ${foundBusiness.addressCity},
//                 ${foundBusiness.addressStateCode}
//                 ${foundBusiness.addressZipCode}
//                 </section>
//             `;
//         }
//     });

// Lightning Exercise 1: Refactor your code to search for purchasing agents instead. If the search text is found in the first name of any purchasing agent, show that agent.

// Lightning Exercise 2: Refactor your code so that if the search text is found in the first name, or last name, of any purchasing agent, show that agent.

    document
    .querySelector("#agentSearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
            const foundAgent = businesses.find(
                agent =>
                    (agent.purchasingAgent.nameFirst.includes(keyPressEvent.target.value) ||
                    agent.purchasingAgent.nameLast.includes(keyPressEvent.target.value))
            );

            outEl.innerHTML = `
                <h2>
                ${foundAgent.purchasingAgent.nameFirst} 
                ${foundAgent.purchasingAgent.nameLast}
                </h2>
                <hp>
                ${foundAgent.companyName}
                </p>
                <section>
                ${foundAgent.addressFullStreet}

                </section>
                <section>
                ${foundAgent.addressCity},
                ${foundAgent.addressStateCode}
                ${foundAgent.addressZipCode}
                </section>
            `;
        }
    });

    businesses.forEach(business => {
        /* CALCULATE ORDER SUMMARY */
        let totalOrders = 0
        business.orders.forEach(order => totalOrders += order)
    
    
        outEl.innerHTML += `
            <h2>
                ${business.companyName}
                ($${totalOrders})
            </h2>
            <section>
                ${business.addressFullStreet}
            </section>
            <section>
                ${business.addressCity},
                ${business.addressStateCode}
                ${business.addressZipCode}
            </section>
        `;
        outEl.innerHTML += "<hr/>";
    });

// Use the filter method to get all the big spenders in the main array into a new one.
// Array to contain all the big spenders
const bigSpenders = businesses.filter(business => {
    let moreThan9000 = business.orders.find(order => order >= 9000)
        if(moreThan9000 != null) {
            return moreThan9000;
        }
});
console.log(bigSpenders);

// Lightning Exercise 1: Use the reduce method on the following array to determine how much total rain fell last month.
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

// const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]

// const totalRainfall = monthlyRainfall.reduce((total, amount) => total + amount);

// console.log(totalRainfall)

// Lightning Exercise 2: Use the reduce method on the following array to build a sentence.

// const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

// const sentence = words.reduce((sentence, word) => sentence + " " + word);

// console.log(sentence)