/*const app = Vue.createApp({
  data() {
      return {
          cards: [] // Will hold card data from JSON
      };
  },
  computed: {
      groupedCards() {
          // Group the cards into rows of 3 cards each
          return this.cards.reduce((acc, card, index) => {
              const rowIndex = Math.floor(index / 3);
              if (!acc[rowIndex]) acc[rowIndex] = [];
              acc[rowIndex].push(card);
              return acc;
          }, []);
      }
  },
  mounted() {
      fetch("safety.json")
          .then(response => response.json())
          .then(data => {
              // Apply border colors dynamically
              this.cards = data.map(card => ({
                  ...card,
                  borderColor: "#DAFF3E" // Customize border color
              }));
          })
          .catch(error => console.error("Error loading data:", error));
  }
});
app.mount("#app");*/

const isRTLCheck = (text) => {
  return /[\u0590-\u05FF\u0600-\u06FF\u0700-\u074F]/.test(text);
};

document.querySelectorAll('.file-container').forEach((container) => {
  const text = container.querySelector('.textV');
  const textEffect = container.querySelector('.text-effect');
  const title = container.querySelector('.titleV');
  const description = container.querySelector('.description');
  const borderColor = container.dataset.borderColor;
  const hoverTextColor = container.dataset.hoverTextColor;

  container.style.setProperty('--border-color', borderColor);
  container.style.setProperty('--hover-text-color', hoverTextColor);

  container.style.setProperty('--borderGradient', `conic-gradient(from var(--rotation), 
                var(--border-color) 0deg, 
                var(--border-color) 90deg, 
                var(--color-4) 90deg, 
                var(--color-4) 360deg)`);
  container.style.backgroundImage = `linear-gradient(#000, #000), var(--borderGradient)`;
  textEffect.style.backgroundColor = borderColor;

  // Check direction for title and description
  let isRTL = false;

  if (isRTLCheck(title.textContent)) {
    title.style.direction = 'rtl';
    isRTL = true;
  } else {
    title.style.direction = 'ltr';
  }

  if (isRTLCheck(description.textContent)) {
    description.style.direction = 'rtl';
    isRTL = true;
  } else {
    description.style.direction = 'ltr';
  }

  // Change font family if RTL is detected in the container
  if (isRTL) {
    container.style.fontFamily = "'Montserrat', sans-serif";
  }

  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const angle = Math.atan2(y, x);
    container.style.setProperty("--rotation", `${angle}rad`);
  });
});
