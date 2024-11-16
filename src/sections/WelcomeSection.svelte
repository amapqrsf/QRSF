<script lang="ts">
    import Button from "../composents/Button.svelte";
    import welcome from "../assets/images/welcome.png";
</script>

<section id="bienvenu" class="welcome_section">
    <div class="welcome_section__top">
        <div class="welcome_section__top__text">
            <h2>Bienvenue à l'AMAP Qui Ramène Sa Fraise !</h2>
            <p>A Rezé, entre Pont Rousseau et Saint Paul, nous cultivons bien plus que des
                légumes bio. Nous semons des liens, des sourires, et une conscience écologique.</p>
            <p>En nous rejoignant, vous faites bien plus qu'acheter des produits frais : vous participez à une aventure
                humaine qui enrichit autant nos assiettes que nos cœurs.</p>
            <p>Explorez notre site pour découvrir nos producteurs. Et surtout, rejoignez-nous pour partager une alimentation saine et responsable.
                Bienvenue dans notre AMAP, où chaque fraise ramenée est synonyme de sourire et de partage !</p>
            <p>L'équipe de l'AMAP Qui Ramène Sa Fraise</p>
        </div>
        <div class="welcome_section__top__image">
            <img src={welcome}
                 alt="Bienvenue sur le site de l'AMAP Qui Ramène Sa Fraise à Rezé !"/>
        </div>
    </div>
    <div class="welcome_section__bottom">
        <p>Si vous êtes intéressé(e) par notre démarche et souhaitez nous rejoindre, nous vous invitons à vous inscrire
            sur notre liste d'attente. Nous vous recontacterons rapidement pour finaliser votre adhésion et vous
            permettre de découvrir les plaisirs d'une alimentation saine et locale.</p>
        <div>
            <Button link="https://camap.amap44.org/group/5385">Nous rejoindre</Button>
        </div>
    </div>
</section>

<style lang="scss">
  .welcome_section {
    padding: 0 2rem;
    max-width: 1000px;

    &__top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 5% 0;

      @media (max-width: 768px) {
        flex-direction: column-reverse;
        gap: 2em;
      }

      &__text {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 1em;

        @media (max-width: 768px) {
          width: 100%;
        }
      }

      &__image {
        width: 40%;
        transform: rotate(8.5deg);
        overflow: hidden;
        border-radius: 1.75rem;
        box-shadow: 6px 6px 15px 0 rgba(43, 44, 12, 0.54);
        transition: all 0.3s ease;

        @media (max-width: 1100px) {
          transform: rotate(0deg);
        }
        @media (max-width: 768px) {
          width: 100%;
            height: 200px;
        }

        & > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    &__bottom {
      display: flex;
      gap: 1em;

      @media (max-width: 768px) {
        flex-direction: column;
        gap: 3rem;
      }

      div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
      }
    }
  }
</style>