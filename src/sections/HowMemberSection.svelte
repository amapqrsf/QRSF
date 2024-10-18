<script lang="ts">
    import Button from "../composents/Button.svelte";
    import howmember from "../assets/images/howmember.png";
</script>

<section class="how_member_section">
    <div class="how_member_section__image">
        <img src={howmember}
             alt="Bienvenue sur la cagette de l'AMAP Qui Ramène Sa Fraise à Rezé !"/>
    </div>
    <div class="how_member_section__content">
        <h2>Comment devenir membre de notre AMAP ?</h2>
        <p>Chez l'AMAP Qui Ramène Sa Fraise, rejoindre notre communauté est simple et accessible à tous. Suivez ces
            étapes
            pour devenir membre et profiter de nos délicieux produits locaux :</p>
    </div>
    <div class="how_member_section__content">
        <div class="how_member_section__content__step how_member_section__content__step--left">
            <h3>Étape 1 : Inscrivez-vous sur notre liste d'attente</h3>
            <p>Remplissez notre formulaire en ligne avec vos coordonnées et indiquez votre intérêt pour rejoindre notre AMAP. Nous vous contacterons dès qu'une place se libèrera, vous permettant ainsi de participer à nos distributions et de bénéficier de nos paniers de produits frais.</p>
            <Button link="https://camap.amap44.org/group/5385">Nous rejoindre</Button>
        </div>
        <div class="how_member_section__content__step how_member_section__content__step--right">
            <h3>Étape 2 : Confirmation de votre inscription</h3>
            <p>Dès que votre demande est traitée, vous recevrez une confirmation de notre part, vous indiquant que vous êtes désormais sur notre liste d'attente. Nous vous tiendrons informé(e) de l'évolution de votre statut et de la disponibilité de places dans notre AMAP.</p>
        </div>
        <div class="how_member_section__content__step how_member_section__content__step--left">
            <h3>Étape 3 : Il ne reste plus qu’à participer</h3>
            <p>Une fois votre inscription confirmée et votre place réservée, vous pourrez participer à nos distributions hebdomadaires. Venez rencontrer nos producteurs, échanger avec les autres membres de notre communauté et récupérer votre panier de produits frais.</p>
        </div>
    </div>
    <div class="how_member_section__content">
        <h3>Rejoignez-nous dès aujourd'hui !</h3>
        <p>Ne manquez pas l'opportunité de rejoindre une communauté engagée et passionnée pour une alimentation saine,
            locale et respectueuse de l'environnement. Remplissez notre formulaire d'inscription dès maintenant et
            faites partie de l'aventure de l'AMAP Qui Ramène Sa Fraise !</p>
        <Button link="https://camap.amap44.org/group/5385">Nous rejoindre</Button>
    </div>
</section>

<style lang="scss">
  .how_member_section {
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.12rem;
    padding: 0 2rem;

    &__content {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    &__content {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;

      &__step {
        display: flex;
        flex-direction: column;
        gap: .635rem;
        width: 50%;

        @media (max-width: 768px) {
          width: 100%;
        }

        &--left {
          align-self: flex-start;
        }
        &--right {
          align-self: flex-end;
        }
      }
    }

    &__image {
      width: 100%;
      height: 400px;
      overflow: hidden;
      border-radius: 1.75rem;
      box-shadow: 6px 6px 15px 0 rgba(43, 44, 12, 0.54);
      transition: all 0.3s ease;

      @media (max-width: 768px) {
        height: 200px;
      }

      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
</style>