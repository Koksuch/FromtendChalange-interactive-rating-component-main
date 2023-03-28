var rate;

let hRate = document.querySelectorAll(".btn");
for (let rateV of hRate)
{
  rateV.addEventListener("focus", rate_val)
}

let hForm = document.querySelector(".form");
hForm.addEventListener("submit", (e) => {
  rate_submit(e);
});

function rate_val()
{
  rate = this.value;
}

function rate_submit(e)
{
  if (rate == null || rate == undefined)
    e.preventDefault();
  else
  {
    e.preventDefault();
    console.log(rate);

    let hMain = document.querySelector("main");
    hMain.innerHTML = `
    <div class="thank-img">
      <img src = "images/illustration-thank-you.svg" alt="Star"/>
    </div>
    <div class="sel-rate-div">
      <p class="sel-rate">You selected  <span class="rate-val">` + rate + `</span> out of 5</p>
    </div>
    <h3 class="thank">Thank you!</h3>

    <p class="thank-txt">
      We appreciate you taking the time to give a rating. 
      If you ever need more support,
      don’t hesitate to get in touch!
    </p>
    `;
  }
}