(() => {
  "use strict";
  const e = [
      {
        name: "Köttbullar – Meatballs",
        photo: "./assets/Meatballs.jpg",
        description:
          "Mixed and fried in a generous amount of butter, it’s traditionally served with mashed potato, lingonberry jam, and brown cream sauce.",
      },
      {
        name: "Räkmacka – Shrimp Sandwich",
        photo: "./assets/Rakmacka.jpg",
        description:
          "Räkmacka is an open-faced sandwich, generally served on rye bread. It’s topped with lettuce, mayonnaise, egg, dill, caviar, and a generous amount of shrimp.",
      },
      {
        name: "Smulpaj – Crumble",
        photo: "./assets/Smulpaj.jpg",
        description:
          "We love to use the fruit and berries for cooking and baking. Smulpaj is a summer favorite, and it’s made with whatever berries or fruits are in season. ",
      },
      {
        name: "Ärtsoppa & Pannkakor – Pea Soup & Pancakes",
        photo: "./assets/Artsoppa.jpg",
        description:
          "The pea soup is made from dried yellow peas and pork broth, seasoned with thyme, and topped with salty pieces of pork and mustard. This is often served with a warm punsch drink.",
      },
      {
        name: " Smörgåstårta – Swedish Sandwich Cake",
        photo: "./assets/Smorgstarta.jpg",
        description:
          "Smörgåstårta is Sweden’s number one feast meal. This is where we put everything we like on bread, in layers, and serve it as a cake.",
      },
      {
        name: "Semla – Sweet Roll",
        photo: "./assets/Semla.jpg",
        description:
          "This pastry consists of a simple wheat bun, flavored with cardamom. The top is cut off, and it’s filled with almond paste and whipped cream. ",
      },
    ],
    t = () => {
      const t = document.createElement("div");
      t.classList.add("tabs-content-container");
      const n = document.createElement("h1");
      (n.innerText =
        "Have a look at our delicious menu. You will definitely find something you like!"),
        n.classList.add("tab-title");
      const a = document.createElement("div");
      a.classList.add("menu-content-container"),
        e.forEach((e) => {
          const t = document.createElement("div");
          t.classList.add("menu-item");
          const n = document.createElement("img");
          n.classList.add("menu-item-image"), (n.src = e.photo);
          const s = document.createElement("div");
          (s.innerHTML = e.name),
            s.classList.add("menu-item-title"),
            t.addEventListener("mouseover", () => {
              s.classList.remove("hide"), s.classList.add("show");
            }),
            t.addEventListener("mouseout", () => {
              s.classList.remove("show"), s.classList.add("hide");
            }),
            t.addEventListener("click", () => {
              const t = document.createElement("div");
              t.classList.add("info-card");
              const n = document.querySelector(".backdrop");
              n && n.remove();
              const a = document.createElement("p");
              (a.innerText = e.description), (a.style.marginBottom = "3rem");
              const s = document.createElement("img");
              (s.src = e.photo), s.classList.add("card-image");
              const d = document.createElement("p");
              (d.style.textAlign = "center"),
                (d.style.marginTop = "1rem"),
                (d.innerText = "(click to close)"),
                t.appendChild(a),
                t.appendChild(s),
                t.appendChild(d);
              const { backdrop: i } = ((e, t) => {
                const n = document.createElement("div");
                return (
                  n.classList.add("backdrop"),
                  (n.style.top = t + "px"),
                  n.appendChild(e),
                  n.addEventListener("click", () => {
                    e.classList.add("hide-modal");
                    const t = setTimeout(() => {
                      n.remove(), clearInterval(t);
                    }, 500);
                  }),
                  { backdrop: n }
                );
              })(t, pageYOffset);
              document.body.appendChild(i);
            }),
            t.appendChild(n),
            t.appendChild(s),
            a.appendChild(t);
        });
      const s = document.createElement("p");
      return (
        (s.innerText =
          "For the list of alergens, please enquire at the time of order!"),
        (s.style.textAlign = "center"),
        t.appendChild(n),
        t.appendChild(a),
        t.appendChild(s),
        { menuTab: t }
      );
    },
    n = () => {
      const e = document.createElement("div");
      e.classList.add("tabs-content-container");
      const t = document.createElement("h1");
      t.classList.add("tab-title"), (t.innerHTML = "Welcome to Sven's Eatery");
      const n = document.createElement("p");
      (n.innerText = "The best food this part of Sweden!"),
        n.classList.add("tab-subtitle");
      const a = document.createElement("img");
      (a.src = "./assets/home-image.jpg"), a.classList.add("home-image");
      const s = document.createElement("div");
      (s.innerHTML =
        "<p>Opening Hours: </p> <p class='info-center'>Monday-Friday : 11:00 - 23:00</p><p class='info-center'>Saturday - Sunday: 10:00 - 23.30</p>"),
        s.classList.add("info-right");
      const d = document.createElement("figure");
      return (
        d.classList.add("info-center"),
        (d.innerHTML =
          "<blockquote cite=''><p>The best swedish food restaurant outside of Ikea!</p></blockquote> <figcaption>--Lars Andersson, <cite>Regular customer</cite> </figcaption>"),
        e.appendChild(t),
        e.appendChild(n),
        e.appendChild(a),
        e.appendChild(s),
        e.appendChild(d),
        { homeTab: e }
      );
    },
    { header: a } = (() => {
      const e = document.createElement("header"),
        t = document.createElement("h1");
      return (
        (t.innerHTML = "Sven's Eatery"),
        t.classList.add("title"),
        e.appendChild(t),
        { header: e }
      );
    })(),
    { welcome: s, setButtonClickHandler: d } = (() => {
      const e = document.createElement("div");
      e.classList.add("welcome-container");
      const t = document.createElement("div");
      t.classList.add("greeting-card");
      const n = document.createElement("h2");
      n.classList.add("subtitle"), (n.innerHTML = "Welcome To Sven's Eatery");
      const a = document.createElement("button");
      return (
        a.classList.add("btn-enter"),
        (a.innerHTML = " COME ON IN! <i class='fas fa-arrow-right'></i>"),
        t.appendChild(n),
        t.appendChild(a),
        e.appendChild(t),
        {
          welcome: e,
          setButtonClickHandler: (e) => {
            a.addEventListener("click", e);
          },
        }
      );
    })(),
    { tabs: i } = (() => {
      let e = null;
      const { homeTab: a } = n();
      e = a;
      const s = document.createElement("div");
      s.classList.add("tabs-container");
      const d = document.createElement("div");
      d.classList.add("tabs-header");
      const i = document.createElement("div"),
        o = document.createElement("div"),
        c = document.createElement("div"),
        r = (e) => {
          i.classList.remove("active"),
            o.classList.remove("active"),
            c.classList.remove("active"),
            e.target.classList.add("active");
        };
      return (
        i.classList.add("tab"),
        (i.innerHTML = "Home"),
        i.addEventListener("click", (t) => {
          r(t);
          const { homeTab: a } = n();
          e.remove(), (e = a), s.appendChild(e);
        }),
        o.classList.add("tab"),
        (o.innerHTML = "Menu"),
        o.addEventListener("click", (n) => {
          r(n);
          const { menuTab: a } = t();
          e.remove(), (e = a), s.appendChild(e);
        }),
        c.classList.add("tab"),
        (c.innerHTML = "Contact"),
        c.addEventListener("click", (t) => {
          r(t);
          const { contactTab: n } = (() => {
            const e = document.createElement("div");
            e.classList.add("tabs-content-container");
            const t = document.createElement("h1");
            t.classList.add("tab-title"),
              (t.innerText = "We deliver in your area!");
            const n = document.createElement("p");
            n.classList.add("tab-subtitle"),
              (n.innerText = "Please contact us using the numbers below!");
            const a = document.createElement("h2");
            a.classList.add("contact-phones-title"),
              (a.innerText = "Our Phones:");
            const s = document.createElement("p");
            s.classList.add("phone-numbers"),
              (s.innerHTML =
                "<i class='fas fa-phone'></i>&nbsp;&nbsp;   555-0123-4567");
            const d = document.createElement("p");
            d.classList.add("phone-numbers"),
              (d.innerHTML =
                "<i class='fas fa-phone'></i>&nbsp;&nbsp;   555-3421-7645");
            const i = document.createElement("p");
            return (
              i.classList.add("phone-numbers"),
              (i.innerHTML =
                "<i class='fas fa-envelope'></i>&nbsp;&nbsp;orders@notrealemail.com"),
              e.appendChild(t),
              e.appendChild(n),
              e.appendChild(a),
              e.appendChild(s),
              e.appendChild(d),
              e.appendChild(i),
              { contactTab: e }
            );
          })();
          e.remove(), (e = n), s.appendChild(e);
        }),
        i.classList.add("active"),
        d.appendChild(i),
        d.appendChild(o),
        d.appendChild(c),
        s.appendChild(d),
        s.appendChild(e),
        { tabs: s }
      );
    })(),
    { footer: o } = (() => {
      const e = document.createElement("div");
      e.classList.add("footer");
      const t = document.createElement("p");
      return (
        (t.innerText =
          "Copyright 2021 Eduard Gavrila. Disclaimer: This is not a real restaurant!"),
        e.appendChild(t),
        { footer: e }
      );
    })();
  d(() => {
    s.remove(),
      o.remove(),
      document.body.appendChild(i),
      document.body.appendChild(o);
  }),
    document.body.appendChild(a),
    document.body.appendChild(s);
})();
