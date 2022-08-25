const getData = async (Url,container) => {
    try {
      //   let res = await fetch(`http://localhost:3000/items`);
      //   let data = await res.json();
      //   console.log("🚀 ~ file: dashboard.js ~ line 9 ~ getData ~ data", data)
  
      let res2 = await fetch(Url);
      let data2 = await res2.json();
      console.log("🚀 ~ file: dashboard.js ~ line 18 ~ getData ~ data2", data2);
      append(data2,container);
    } catch (error) {
      console.log("🚀 ~ file: dashboard.js ~ line 11 ~ getData ~ error", error);
    }
  };
  
//   let container = document.getElementById("container");
  function append(data,container) {
    container.innerHTML=null;
    data.forEach(
      ({ id, category, owner, years, image, price, brand, location, date }) => {
        //Create div to append entire details of a product
        let div = document.createElement("div");
        //Create img_div to append the image
  
        let img_div = document.createElement("div");
        img_div.setAttribute("class", "img_div");
        let Image = document.createElement("img");
        Image.src = image;
        img_div.append(Image);
        //Create details_div to append all the details of the product like price,Postdate,etc.
  
        let details_div = document.createElement("div");
        details_div.setAttribute("class", "details_div");
        let Price = document.createElement("h3");
        Price.innerText = price;
        let year = document.createElement("p");
        year.innerText = `${years}years`;
        let model = document.createElement("h4");
        model.innerText = brand;
        //Create another address_date_div and append it to details div
        let address_date_div = document.createElement("div");
        address_date_div.setAttribute("class", "address_date_div");
        let address = document.createElement("p");
        address.innerText = location;
        let Date = document.createElement("p");
        Date.innerText = date;
        address_date_div.append(address, Date);
        details_div.append(Price, year, model, address_date_div);
        div.append(img_div, details_div);
        container.append(div);
      }
    );
  }
  export  {getData}