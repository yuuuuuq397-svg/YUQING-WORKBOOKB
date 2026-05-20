const projects = {
  week1: {
    title: "Wot Is www?",
    customHtml: `
      <section class="week-content">
        <p class="week-topic">Week 1</p>
        <p><strong>I recorded how I interacted with digital and physical interfaces over a 12-hour period. I tracked actions like tapping, scrolling, clicking, and pressing to see how often I use technology in my everyday life, often without even realising it. I then grouped the data into three categories: mobile, computer, and physical interfaces, to better understand my daily behaviour.</strong></p>

        <h3>12-Hour Interface Gesture Study</h3>
        <div class="gesture-grid">
          <div>
            <h4>Mobile</h4>
            <p>Tap × 328<br>Scroll × 66<br>Swipe × 120</p>
          </div>
          <div>
            <h4>Computer</h4>
            <p>Click × 146<br>Type × 50<br>Scroll × 38</p>
          </div>
          <div>
            <h4>Physical</h4>
            <p>Tap Myki × 1<br>Press button × 6<br>Swipe card × 2</p>
          </div>
        </div>

        <p><strong>This is my first time learning HTML, and I am excited to create my own web page. I will start by adding some basic elements like headings, paragraphs, and images. I hope to learn more about HTML and CSS to make my web page look even better.</strong></p>
        <img class="week-image" src="https://yuuuuuq397-svg.github.io/interactive-media/image/pic1.png" alt="Week 1 HTML learning work">

        <p><strong>This week, I watched the film Minority Report. The interface in the film is very visual and interactive. The character controls floating screens using hand gestures instead of a mouse or keyboard. This makes the interaction feel more immersive and intuitive. The system allows the user to move and organise data in a three-dimensional space through physical movement. Although it feels natural, it also requires accuracy and effort.</strong></p>
        <p><strong>Overall, the film shows a futuristic and engaging way of interacting with technology.</strong></p>
        <img class="week-image" src="https://yuuuuuq397-svg.github.io/interactive-media/image/pic2.png" alt="Minority Report interface reference">

        <p><strong>I also looked at the JODI website and found its interface very unconventional. The design appears chaotic and broken, with distorted text and minimal visual structure. Unlike traditional websites, it does not guide the user clearly. The interaction is unpredictable, as clicking on elements often leads to unexpected outcomes. This removes a sense of control and encourages exploration in a more experimental way. Rather than focusing on usability, the design creates confusion and curiosity, shaping a different kind of engagement with digital space.</strong></p>
        <img class="week-image" src="https://yuuuuuq397-svg.github.io/interactive-media/image/pic3.png" alt="JODI website reference">
      </section>
    `,
  },
  week2: {
    title: "Building for Web",
    customHtml: `
      <section class="week-content">
        <p class="week-topic">Week 2</p>
        <p><strong>In this Crazy 8s exercise, I explored different ways to design the layout for my workbook website. I quickly sketched several ideas, trying out different ways to organise text, images, and navigation. Some designs are inspired by a magazine layout, while others feel more like a gallery or a slideshow. This activity helped me think about how a web page can be structured and how users move through the content.</strong></p>
        <img class="week-image" src="https://yuuuuuq397-svg.github.io/interactive-media/image/pic4.png" alt="Week 2 Crazy 8s workbook layout sketches">
      </section>
    `,
  },
  week3: {
    title: "Google Stitch Exploration",
    customHtml: `
      <section class="week-content">
        <p class="week-topic">Week 3</p>
        <p><strong>This week, our tutor introduced us to Stitch, a new design tool by Google. It is an AI-based interface design tool that allows users to generate website or app layouts by simply entering text prompts, helping designers quickly explore ideas and structure. During the class, we experimented with the tool.</strong></p>

        <p><strong>I entered the prompt “create a website for stray animal adoption, avoiding an overly AI-generated style,” aiming to produce a more natural and human-centred design rather than something that looks generic or overly artificial.</strong></p>
        <img class="week-image" src="https://yuuuuuq397-svg.github.io/interactive-media/image/pic5.png" alt="Google Stitch stray animal adoption website exploration">

        <p><strong>However, I found that the initial webpage was not very clear in terms of information hierarchy, and it was difficult for users to quickly navigate and find what they needed. I also felt that adopting stray animals is a warm and emotional experience, but the original colour palette of the page felt too cold and lacked this sense of warmth.</strong></p>

        <p><strong>Therefore, I refined my prompt and added: “include a page that categorises cats and dogs to make it easier for users to browse, and adjust the overall colour palette to feel warmer.” I aimed to improve usability through clearer categorisation, while also creating a more emotionally engaging atmosphere through colour. This process made me realise how refining prompts can help guide AI to produce outcomes that better align with my design intentions.</strong></p>
        <img class="week-image" src="https://yuuuuuq397-svg.github.io/interactive-media/image/pic6.png" alt="Refined Google Stitch website exploration">

        <p><strong>Through using Stitch, I found that it can help me generate ideas more quickly and make the early stage of design easier. However, I also feel that it can limit creativity to some extent, as the results can become quite similar and fall into predictable patterns. So I think it works better as a supporting tool rather than something to rely on completely.</strong></p>
      </section>
    `,
  },
  week4: {
    title: "Slave to the Algorithm",
    hiCode: `let codeText = [
  'function setup() {',
  '  createCanvas(windowWidth, windowHeight);',
  '  background("pink");',
  '  rectMode(CENTER);',
  '}',
  '',
  'function draw() {',
  '  background(200, 200, 30, 16);',
  '  circle(mouseY, mouseX, 120);',
  '  text("Hi", mouseX, mouseY);',
  '}'
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("pink");
  rectMode(CENTER);
}

function draw() {
  background(200, 200, 30, 16);

  fill(255, 180, 220);
  stroke(0);
  circle(mouseY, mouseX, 120);

  fill(0);
  noStroke();
  textSize(24);
  textAlign(CENTER, CENTER);
  text("Hi", mouseX, mouseY);

  drawCodeText();
}

function drawCodeText() {
  let codeX = width * 0.58;
  let codeY = 60;

  fill(0);
  noStroke();
  textAlign(LEFT, TOP);
  textSize(15);
  textFont("monospace");

  for (let i = 0; i < codeText.length; i++) {
    text(codeText[i], codeX, codeY + i * 22);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}`,
    faceCode: `let codeText = [
  'function setup() {',
  '  createCanvas(windowWidth, windowHeight);',
  '  textSize(60);',
  '}',
  '',
  'function draw() {',
  '  background(200, 200, 30, 16);',
  '  text("0_0", mouseX, mouseY);',
  '  line(width/2, height/2, mouseX, mouseY);',
  '}'
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(60);
}

function draw() {
  background(200, 200, 30, 16);

  fill(0);
  stroke(0);
  textSize(60);
  text("0_0", mouseX, mouseY);
  line(width / 2, height / 2, mouseX, mouseY);

  drawCodeText();
}

function drawCodeText() {
  let codeX = width * 0.58;
  let codeY = 60;

  noStroke();
  fill(0);
  textAlign(LEFT, TOP);
  textSize(15);
  textFont("monospace");

  for (let i = 0; i < codeText.length; i++) {
    text(codeText[i], codeX, codeY + i * 22);
  }
}`,
    customHtml: `
      <section class="week-content week-four-content">
        <div class="week-four-intro">
          <p class="week-topic">Week 4 &amp; Week 5</p>
        <p><strong>In Week 4, I was introduced to Processing and p5.js, and began to understand how code can be used as a visual material. I experimented with simple shapes, colour, text, mouse interaction, and repeated drawing to make small interactive sketches.</strong></p>

        <p><strong>In Week 5, we looked at surveillance, computer vision, and some ways of using camera and image input in p5.js sketches. These experiments helped me think about how interaction can move beyond clicking and scrolling, and how live input can become part of a visual system.</strong></p>

          <div class="scroll-cue" aria-hidden="true">↓</div>
        </div>

        <div class="week-four-options">
          <div class="click-marquee" aria-hidden="true">
            <span>click one to explore • click one to explore • click one to explore •</span>
          </div>

          <div class="week-options" aria-label="Week 4 experiments">
          <button class="p5-option" type="button" data-open-url="https://p5js.org/">p5.js</button>
          <button class="hi-option" type="button" data-open-url="hi.html">Hi</button>
          <button class="face-option" type="button" data-open-url="OO.html">0_0</button>
        </div>

          <div class="week-options week-options-secondary" aria-label="Week 4 drawing experiments">
            <button class="house-option" type="button" data-open-url="house.html">house</button>
            <button class="camera-option" type="button" data-open-url="camera.html">camera</button>
            <button class="portrait-option" type="button" data-open-url="face.html">face</button>
          </div>
        </div>
      </section>
    `,
  },

  physical: {
    title: "Physical Computing",
    customHtml: `
      <section class="week-content">
        <p class="week-topic">Physical Computing</p>
        <div class="physical-list">
          <button type="button" data-open-project="arduinoBasics">Week 6 Arduino Basics</button>
          <button type="button" data-open-project="theremin">Week 7 Theremin</button>
          <button type="button" data-open-project="capacitiveTouch">Week 8 Capacitive Touch</button>
        </div>
      </section>
    `,
  },

  designInspiration: {
    title: "Design Inspiration",
    customHtml: `
      <section class="week-content inspiration-page">
        <p class="week-topic">Design Inspiration</p>
        <div class="inspiration-text">
          <p>For Workbook A, I was mostly presenting completed weekly tasks. The website worked as a container, but it did not really show what I had learned about interaction, layout, and coding.</p>
          <p>For Workbook B, I wanted the website itself to become part of the work. I added browser-style windows, draggable panels, clickable experiments, videos, hyperlinks, sound, camera input, and small interactions so the viewer can experience the learning process, not only look at finished outcomes.</p>
          <p>I looked at many web design references, especially geokash.com. I liked its left-side project list and window-based structure, but I kept my version simpler and cleaner so it felt more personal.</p>
        </div>
      </section>
    `,
  },

  theremin: {
    title: "Theremin",
    customHtml: `
      <section class="week-content theremin-page">
        <p class="week-topic">Week 7 Theremin</p>

        <section class="theremin-section ldr-section">
          <h3>LDR Theremin</h3>
          <div class="theremin-row">
            <video class="theremin-media" controls poster="assets/theremin/LDRTheremin.jpg">
              <source src="assets/theremin/LDRTheremin.mp4" type="video/mp4">
            </video>
            <p><strong>For this activity, we explored how a light-dependent resistor can become an input for sound. By covering or exposing the sensor to light, the circuit changes its reading and creates a theremin-like interaction. I found it interesting because the body does not need to press a button; small movements, light, and shadow can become a way of controlling output.</strong></p>
          </div>
        </section>

        <section class="theremin-section headspace-section">
          <h3>Headspace</h3>
          <div class="theremin-grid-two">
            <div>
              <video class="theremin-media square" controls poster="assets/theremin/Headspace.jpg">
                <source src="assets/theremin/Headspace.mp4" type="video/mp4">
              </video>
              <p><strong>For the Headspace, we looked at how ultrasonic sensing could support obstacle awareness. The sensor reads distance and the buzzer gives feedback when something gets too close. I connected this to accessibility because this kind of interaction could help people understand space through sound.</strong></p>
            </div>
            <div>
              <video class="theremin-media square" controls>
                <source src="assets/theremin/Headspace1.mp4" type="video/mp4">
              </video>
              <p><strong>This test shows the interaction more directly. Instead of focusing only on the circuit, I was thinking about how the output could become a warning system, translating distance into a signal that can be heard and felt. I asked my classmate to wear an opaque bag over their head to simulate the experience of being visually impaired. Then I attached the electronic circuit device to the front of the bag. When there is an obstacle in front of them, the device emits an alarm sound to warn them not to continue moving forward. I believe that if this design is further developed and refined, it could be very helpful for visually impaired people.</strong></p>
            </div>
          </div>
        </section>

        <section class="theremin-section fish-section">
          <h3>Fish Playground</h3>
          <div class="theremin-row">
            <video class="theremin-media" controls poster="assets/theremin/FishPlayground.jpg">
              <source src="assets/theremin/FishPlayground.mp4" type="video/mp4">
            </video>
            <p><strong>This sketch uses light and shadow to drive a servo motor. When I tested it, I started imagining it as a small waving toy or character that could be placed in a shop window. When someone walks past the store, the change in light or shadow could trigger the toy to wave and greet them. I like this idea because the circuit becomes something friendly and expressive, rather than only a technical demonstration.</strong></p>
          </div>
        </section>
      </section>
    `,
  },
  arduinoBasics: {
    title: "Week 6 Arduino Basics",
    customHtml: `
      <section class="week-content">
        <p class="week-topic">Week 6 Arduino Basics</p>
        <p><strong>This week introduced the basic structure of Arduino and how physical components can connect to code. I began by looking at the Arduino Uno board, identifying parts in the kit, and testing a simple Blink circuit as the first step into physical computing.</strong></p>
        <div class="arduino-menu">
          <button type="button" data-open-url-new="https://www.tinkercad.com/projects/Basics-of-Arduino-TINKERCAD">Basics of Arduino (TINKERCAD)</button>
          <button type="button" data-open-project="arduinoBox">Wot's in the box?</button>
          <button type="button" data-open-project="arduinoBlink">Blink!</button>
        </div>
      </section>
    `,
  },
  arduinoBox: {
    title: "Wot's in the box?",
    customHtml: `
      <section class="week-content">
        <p><strong>When we first started working with Arduino, our tutor gave us an Arduino Box with many unfamiliar components inside. Before being told what everything was, we tried to guess the parts based on experience, shape, and function. This made the kit feel more exploratory, like learning through observation before technical explanation.</strong></p>
        <figure class="physical-figure wide">
          <img src="assets/physical-computing/arduino-kit.jpg" alt="Arduino box components labelled through guessing">
          <figcaption>Arduino Box Components</figcaption>
        </figure>
        <figure class="physical-figure">
          <img src="assets/physical-computing/arduino-uno-diagram.png" alt="Diagram of Arduino Uno Board">
          <figcaption>Diagram of Arduino Uno Board</figcaption>
        </figure>
      </section>
    `,
  },
  arduinoBlink: {
    title: "Blink!",
    customHtml: `
      <section class="week-content">
        <p><strong>Blink was the first basic circuit we tried to make. The exercise helped me understand how code can control a physical output. Even though it is a simple LED circuit, it made the connection between software and hardware feel much clearer: changing the code changes what happens in the real world.</strong></p>
        <div class="blink-layout">
          <article class="blink-card">
            <img src="assets/physical-computing/blink-circuit.png" alt="Blink circuit screenshot">
            <div>
              <h3>Circuit setup</h3>
              <p>This screenshot records the basic Blink circuit structure. It helped me understand how the LED connects to the board and how the circuit needs both code and wiring to work.</p>
            </div>
          </article>
          <article class="blink-card">
            <img src="assets/physical-computing/blink-02.jpg" alt="Blink circuit being built from the diagram">
            <div>
              <h3>Building from the circuit</h3>
              <p>After looking at the circuit diagram, we started placing the LED, resistor, and jumper wires onto the breadboard. This step was about translating the diagram into a real physical layout.</p>
            </div>
          </article>
          <article class="blink-card">
            <img src="assets/physical-computing/blink-01.jpg" alt="Blink circuit with the LED on">
            <div>
              <h3>Testing the LED</h3>
              <p>After wiring the circuit, we tested the light. Seeing the LED turn on made the connection between code, electricity, and physical output much clearer.</p>
            </div>
          </article>
        </div>
      </section>
    `,
  },
  capacitiveTouch: {
    title: "Capacitive Touch",
    customHtml: `
      <section class="week-content capacitive-page">
        <p class="week-topic">Week 8 Capacitive Touch</p>
        <h2>Capacitive Touch Music Machine</h2>
        <p><strong>This week, we explored capacitive touch and how touch can complete a circuit. The idea is simple but strange in a good way: the body, a potato, a banana, a leaf, a coin, a hand, or another conductive/organic material can become part of the interaction. I used open wires and a buzzer to make a small music machine, where touching different objects could trigger sound.</strong></p>

        <div class="capacitive-diagram-row">
          <figure>
            <img src="assets/capacitive-touch/diagram.jpg" alt="Capacitive touch circuit diagram">
            <figcaption>Capacitive touch circuit diagram</figcaption>
          </figure>
        </div>

        <section class="capacitive-section">
          <h3>Building</h3>
          <p>I photographed the completed setup from different angles so I could document how the wires, buzzer, and touch points were arranged before testing.</p>
          <div class="capacitive-photo-grid">
            <img src="assets/capacitive-touch/building-1.jpg" alt="Capacitive touch circuit setup angle one">
            <img src="assets/capacitive-touch/building-2.jpg" alt="Capacitive touch circuit setup angle two">
            <img src="assets/capacitive-touch/building-3.jpg" alt="Capacitive touch circuit setup angle three">
          </div>
        </section>

        <section class="capacitive-section">
          <h3>Testing</h3>
          <div class="capacitive-test-grid">
            <article>
              <video controls>
                <source src="assets/capacitive-touch/test1.mp4" type="video/mp4">
              </video>
              <h4>Test 1</h4>
              <p>In the first test, the yellow touch point did not make a sound. I checked the contact and made sure the wire was connected properly, because the sound depends on the circuit being completed through touch.</p>
            </article>
            <article>
              <video controls>
                <source src="assets/capacitive-touch/test2.mp4" type="video/mp4">
              </video>
              <h4>Test 2</h4>
              <p>After checking the connection, I tested again and all three touch points worked. This made the circuit feel more like a small instrument, with each touch becoming a different sound action.</p>
            </article>
          </div>
        </section>

        <section class="capacitive-section">
          <h3>Material Music Machine</h3>
          <div class="capacitive-final">
            <div>
              <video controls>
                <source src="assets/capacitive-touch/final.mp4" type="video/mp4">
              </video>
            </div>
            <p><strong>For the final version, I connected the circuit to different touch materials and used them like small sound triggers. When I touched them, the buzzer made sound. I liked this experiment because it turned ordinary objects into an interface. It was silly, unexpected, and memorable, but it also helped me understand how capacitive touch can make interaction feel more physical and surprising.</strong></p>
          </div>
        </section>
      </section>
    `,
  },
};

const entryScreen = document.querySelector("#entryScreen");
const portfolioShell = document.querySelector("#portfolioShell");
const folderEntry = document.querySelector("#folderEntry");
const navItems = document.querySelectorAll("[data-project]");
const windowLayer = document.querySelector("#windowLayer");
let windowCount = 0;

if (sessionStorage.getItem("portfolioEntered") === "true") {
  entryScreen.classList.add("hidden");
  portfolioShell.classList.remove("hidden");
}

folderEntry.addEventListener("click", () => {
  sessionStorage.setItem("portfolioEntered", "true");
  entryScreen.classList.add("hidden");
  portfolioShell.classList.remove("hidden");
});

function openProject(id) {
  const project = projects[id] || projects.week1;

  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.project === id);
  });

  windowLayer.querySelector(".intro-note")?.remove();

  const browserWindow = document.createElement("article");
  browserWindow.className = "browser-window";
  const offset = windowCount % 5;
  windowCount += 1;
  browserWindow.style.top = `${56 + offset * 22}px`;
  browserWindow.style.left = `calc(48% + ${offset * 18}px)`;
  browserWindow.style.zIndex = String(10 + windowCount);
  const pageContent = project.customHtml
    ? project.customHtml
    : `
      <div class="project-hero">
        <div class="project-art ${id}" aria-hidden="true"></div>
        <div>
          <p class="eyebrow">${project.type}</p>
          <h2>${project.title}</h2>
          <p>${project.intro}</p>
        </div>
      </div>

      <div class="project-grid">
        <section>
          <h3>about this work</h3>
          <p>${project.body}</p>
        </section>
      </div>
    `;

  browserWindow.innerHTML = `
    <header class="browser-bar">
      <button class="close-window" type="button" aria-label="关闭 ${project.title}">×</button>
      <div class="address">${project.title}</div>
    </header>

    <div class="browser-page ${id === "week4" ? "snap-scroll" : ""}">
      ${pageContent}
    </div>
  `;

  browserWindow.querySelector(".close-window").addEventListener("click", () => {
    browserWindow.remove();
    if (!windowLayer.querySelector(".browser-window")) {
      document.querySelectorAll(".nav-item").forEach((item) => item.classList.remove("active"));
      windowLayer.innerHTML = `
        <div class="intro-note">
          This workbook documents how I developed ideas from observation and sketching into layout,
          interface, visual language, and responsive web design. Rather than only presenting a final
          result, this site shows my weekly learning process across workshops, class activities, and
          independent experiments.
        </div>
      `;
    }
  });

  browserWindow.querySelectorAll("[data-open-url]").forEach((linkButton) => {
    linkButton.addEventListener("click", () => {
      sessionStorage.setItem("portfolioEntered", "true");
      window.location.href = linkButton.dataset.openUrl;
    });
  });

  browserWindow.querySelectorAll("[data-open-url-new]").forEach((linkButton) => {
    linkButton.addEventListener("click", () => {
      window.open(linkButton.dataset.openUrlNew, "_blank", "noopener");
    });
  });

  browserWindow.querySelectorAll("[data-open-project]").forEach((projectButton) => {
    projectButton.addEventListener("click", () => {
      openProject(projectButton.dataset.openProject);
    });
  });

  makeDraggable(browserWindow);
  windowLayer.append(browserWindow);
}

function makeDraggable(browserWindow) {
  const bar = browserWindow.querySelector(".browser-bar");

  bar.addEventListener("pointerdown", (event) => {
    if (event.target.closest("button")) return;

    const layerRect = windowLayer.getBoundingClientRect();
    const windowRect = browserWindow.getBoundingClientRect();
    const startX = event.clientX;
    const startY = event.clientY;
    const startLeft = windowRect.left - layerRect.left;
    const startTop = windowRect.top - layerRect.top;

    windowCount += 1;
    browserWindow.style.zIndex = String(10 + windowCount);
    browserWindow.style.transform = "none";
    browserWindow.style.left = `${startLeft}px`;
    browserWindow.style.top = `${startTop}px`;
    bar.setPointerCapture(event.pointerId);

    function moveWindow(moveEvent) {
      const nextLeft = startLeft + moveEvent.clientX - startX;
      const nextTop = startTop + moveEvent.clientY - startY;
      const maxLeft = Math.max(0, layerRect.width - windowRect.width);
      const maxTop = Math.max(0, layerRect.height - 80);

      browserWindow.style.left = `${Math.min(Math.max(0, nextLeft), maxLeft)}px`;
      browserWindow.style.top = `${Math.min(Math.max(0, nextTop), maxTop)}px`;
    }

    function stopMove() {
      bar.removeEventListener("pointermove", moveWindow);
      bar.removeEventListener("pointerup", stopMove);
      bar.removeEventListener("pointercancel", stopMove);
    }

    bar.addEventListener("pointermove", moveWindow);
    bar.addEventListener("pointerup", stopMove);
    bar.addEventListener("pointercancel", stopMove);
  });
}

navItems.forEach((item) => {
  item.addEventListener("click", () => openProject(item.dataset.project));
});
