<script lang="ts">

    import PictoQRSF from "../assets/PictoQRSF.svelte";
    import HeroHeaderBack from "../assets/HeroHeaderBack.svelte";
    import Button from "../composents/Button.svelte";
    import ArrowDown from "../assets/icons/ArrowDown.svelte";
</script>

<section class="hero_header">
    <span class="pictoqrsf">
        <PictoQRSF/>
    </span>
    <div class="hero_header__title">
        <h1 class="hero_header__title__text">Qui Ramène</h1>
        <h1 class="hero_header__title__text">Sa <span>Fraise</span></h1>
    </div>
    <span class="button">
        <Button link="#bienvenu">
            <ArrowDown/>
        </Button>
    </span>
    <span class="hero_header__back">
    </span>
</section>

<style lang="scss">
  .pictoqrsf {
    height: 19vw;
    width: 19vw;

    max-height: 365px;
    max-width: 365px;

    @media (max-width: 768px) {
      height: 40vw;
      width: 40vw;
    }
  }

  .hero_header {
    position: relative;
    overflow: hidden;
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    padding-bottom: 10%;

    &__back {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 80%;
      z-index: -1;

      background-image: url('../assets/HeroHeaderBack.svg');
      background-size: inherit;
      background-position: bottom;
      background-repeat: repeat-x;
    }


    .button {
      position: absolute;
      bottom: 5%;
    }

    &__title {
      &__text {
        font-family: 'Beattingvile', sans-serif;
        font-size: 8vw;
        font-weight: 400;
        margin-bottom: -2vw;
        margin-top: -2vw;

        @media (max-width: 768px) {
          font-size: 14vw;
        }

        @media (min-width: 1920px){
          font-size: 135px;
        }

        & > span {
          color: var(--secondary);
        }
      }
    }
  }
</style>