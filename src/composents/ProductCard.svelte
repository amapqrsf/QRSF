<script lang="ts">
    export let Image: string;
    export let Name: string;
    export let Description: string;
    export let invert: boolean = false;
</script>

<div class={invert ? "product_card invert" : "product_card"}>
    <div class="product_card__text">
        <div class="product_card__text__title">
            <h4>{Name}</h4>
        </div>
        <div class="product_card__text__description">
            <p>{Description}</p>
        </div>
    </div>
    <div class="product_card__image">
        <img src={Image} alt={Name}/>
    </div>
</div>

<style lang="scss">
  .product_card {
    text-align: left;
    display: flex;
    gap: 2rem;

    @media (max-width: 768px) {
      flex-direction: column-reverse;
    }

    &__text {
      width: 60%;
      @media (max-width: 768px) {
        width: 100%;
      }

    }
    &__image {
        width: 40%;
        height: 300px;
        overflow: hidden;
        border-radius: 10px;


      @media (max-width: 768px) {
        width: 100%;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .product_card.invert {
    flex-direction: row-reverse;
     @media (max-width: 768px) {
       flex-direction: column-reverse;
     }
  }
</style>