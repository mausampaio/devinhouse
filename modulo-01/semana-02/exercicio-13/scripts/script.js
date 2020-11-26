const getCurrentSeason = () => {
  const seasonContent = document.querySelector("#season");
  const seasonImage = document.querySelector("#season-image");
  const date = new Date();
  const day = date.getDate();
  const month = parseInt(date.getMonth()) + 1;
  console.log(month)
  let season = "";
  let image = "";

  if (month <= 3 || month === 12) {
    season = "Verão";
    image = "verao.jpg";
    if (day < 21 && month === 12) {
      season = "Primavera";
      image = "primavera.jpg";
    }
    if (day >= 20 && month === 3) {
      season = "Outono";
      image = "outono.jpg";
    }
  }
  if (month >= 3 && month <= 6) {
    season = "Outono";
    image = "outono.jpg";
    if (day >= 21 && month === 6) {
      season = "Inverno";
      image = "inverno.jpg";
    }
      if (day < 20 && month === 3) {
        season = "Verão";
        image = "verao.jpg";
      }
  }
  if (month >= 6 && month <= 9) {
    season = "Inverno";
    image = "inverno.jpg";
    if (day < 21 && month === 6) {
      season = "Outono";
      image = "outono.jpg";
    }
    if (day >= 23 && month === 9) {
      season = "Primavera";
      image = "primavera.jpg";
    }
  }
  if (month >= 9 && month <= 12) {
    season = "Primavera";
    image = "primavera.jpg";
    if (day < 23 && month === 9) {
      season = "Inverno";
      image = "inverno.jpg";
    }
    if (day >= 21 && month === 12) {
      season = "Verão";
      image = "verao.jpg";
    }
  }

  seasonContent.innerHTML = season;
  seasonImage.src = `images/${image}`;
};

getCurrentSeason();
