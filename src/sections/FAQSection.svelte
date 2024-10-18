<script lang="ts">
    import Button from "../composents/Button.svelte";
    import faq from "../assets/images/faq.png";
    import Accordion from "../composents/Accordion.svelte";
    import {writable} from 'svelte/store';

    let openAccordion: string | null = "Qu'est-ce qu'une AMAP ?";

    function handleAccordionClick(title: string) {
        openAccordion = openAccordion === title ? null : title;
    }
</script>

<section class="faq_section">
    <div class="faq_section__image">
        <img src={faq} alt="Bienvenue à l'AMAP Qui Ramène Sa Fraise"/>
    </div>
    <div class="faq_section__text">

        <Accordion
                Title={"Qu'est-ce qu'une AMAP ?"}
                Content={"Les AMAP, ou Associations pour le Maintien de l'Agriculture Paysanne, incarnent une véritable révolution dans notre manière de consommer et de nous approvisionner en produits alimentaires. Contrairement à un simple marché, une AMAP est bien plus qu'un lieu d'échange de denrées. C'est un pacte de confiance entre producteurs et consommateurs, un engagement pour une consommation plus responsable et respectueuse de l'environnement."}
                isOpen={openAccordion === "Qu'est-ce qu'une AMAP ?"}
                onHeaderClick={handleAccordionClick}
        />
        <Accordion
                Title={"Notre engagement"}
                Content="À l'AMAP Qui Ramène Sa Fraise, nous avons à cœur de promouvoir une agriculture locale, écologique et éthique. Nos producteurs partenaires sont des artisans de la terre, passionnés par leur métier et soucieux de préserver la richesse de notre environnement. En choisissant de vous approvisionner auprès de notre AMAP, vous soutenez une agriculture paysanne, respectueuse des saisons et des cycles naturels."
                isOpen={openAccordion === "Notre engagement"}
                onHeaderClick={handleAccordionClick}
        />
        <Accordion
                Title={"Pourquoi choisir notre AMAP ?"}
                Content="En rejoignant notre communauté, vous participez à un mouvement qui dépasse le simple acte d'achat. Vous devenez un acteur du changement, un maillon essentiel d'une chaîne solidaire et durable. Chaque panier que vous récupérez lors de nos distributions est bien plus qu'une simple provision de nourriture : c'est un geste de soutien envers nos producteurs locaux, un pas de plus vers une alimentation saine et équilibrée pour vous et votre famille."
                isOpen={openAccordion === "Pourquoi choisir notre AMAP ?"}
                onHeaderClick={handleAccordionClick}
        />
        <Accordion
                Title={"Ensemble, cultivons le lien"}
                Content="Chez nous, l'AMAP n'est pas qu'une structure administrative. C'est une véritable communauté, un lieu de partage et d'échange où se tissent des liens forts entre les adhérents et les producteurs. Participer à nos distributions, c'est l'occasion de rencontrer ceux qui font pousser nos légumes, élèvent nos animaux et produisent nos délices culinaires. C'est l'opportunité de renouer avec une relation authentique avec notre alimentation, en apprenant d'où viennent nos produits et en découvrant les visages derrière nos assiettes."
                isOpen={openAccordion === "Ensemble, cultivons le lien"}
                onHeaderClick={handleAccordionClick}
        />
    </div>

    <span class="faq_section__background"></span>
</section>

<style lang="scss">
  .faq_section {
    position: relative;
    max-width: 1000px;
    height: auto;
    display: flex;
    gap: 8rem;
    margin: 20rem 0;
    padding: 0 2rem;
    min-height: 580px;

    @media (max-width: 1100px) {
      gap: 3rem;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 3rem;
      margin: 5rem 0;
      height: auto;
    }

    &__background {
      position: absolute;
      left: -63vw;
      width: 200vw;
      height: 127%;
      transform: rotate(8deg) ;
      background: var(--tertiary);
      z-index: -1;
      box-shadow: inset 0px 0px 13px 10px rgba(0, 0, 0, 0.25);

      @media (max-width: 1800px) {
        top: -8rem;
      }

      @media (max-width: 768px) {
        top: -4rem;
        height: 120%;
      }
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
      height: 450px;
      transform: rotate(-8.5deg);
      overflow: hidden;
      border-radius: 1.75rem;
      box-shadow: 6px 6px 15px 0 rgba(43, 44, 12, 0.54);
      transition: all 0.3s ease;

      @media (max-width: 1100px) {
        transform: rotate(0deg);
      }
      @media (max-width: 768px) {
        width: 100%;
        height: 300px;
      }

      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
</style>