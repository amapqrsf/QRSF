<script lang="ts">
    import ProductCard from "../composents/ProductCard.svelte";

    let productsList: { name: string; description: string; image: string }[] = [];

    const modules = import.meta.glob('/products/*.md');

    for (const path in modules) {
        fetch(path)
            .then(response => response.text())
            .then(text => {
                const product = JSON.parse(text);
                productsList = [...productsList, product];
            })
            .catch(error => console.error('Error parsing JSON:', error));
    }
</script>

<section class="products_section">
    <div class="products_section__text">
        <h1>Producteurs et Produits</h1>
        {#each productsList as product, index}
            <div class="products_section__text__container">
                <ProductCard
                        Name={product.name}
                        Description={product.description}
                        Image={product.image}
                        invert={index % 2 === 0}
                />
            </div>
        {/each}
    </div>
</section>

<style lang="scss">
  .products_section {
    padding: 0 2rem;
    max-width: 1000px;

    &__text {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      @media (max-width: 768px) {
        width: 100%;
      }

      &__container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    }
  }
</style>