const app = Vue.createApp({
    data() {
      return {
        cards: []
      };
    },
    computed: {
      groupedCards() {
        // Group the cards into rows of 3 cards each.
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
          this.cards = data;
        })
        .catch(error => console.error("Error loading data:", error));
    }
  });
  app.mount('#app')