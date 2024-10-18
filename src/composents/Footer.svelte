<script lang="ts">
    import Button from "./Button.svelte";
    import User from "../assets/icons/User.svelte";
    import Phone from "../assets/icons/Phone.svelte";
    import Mail from "../assets/icons/Mail.svelte";

</script>

<footer>
    <h3>AMAP Qui Ramène Sa Fraise</h3>
    <p>Prochaine distribution le Lundi 10 Juin à 18:00</p>
    <div>
        <div>
            <h4>Rejoignez-nous !</h4>
            <p>Ce groupe prend les inscriptions sur liste d'attente. Un coordinateur vous contactera.</p>
            <Button link="https://camap.amap44.org/group/5385">Nous rejoindre</Button>
        </div>
        <div>
            <h4>Nous contacter ?</h4>
            <p><User/> ADMIN AMAP QUI RAMENE SA FRAISE</p>
            <p><Phone/> 0660381523</p>
            <p><Mail/> amap.qrsf@zaclys.net</p>
        </div>
        <a href="https://gabrielgoldbronn.com" target="_blank">Site fait par Gabriel Goldbronn</a>
    </div>
</footer>

<style lang="scss">
  footer {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    width: 100%;
    padding: 5rem;

    @media (max-width: 768px) {
      align-items: start;
      padding: 3rem 2rem 5rem 2rem;
    }

    & > div {
      display: flex;
      gap: 5rem;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      @media (max-width: 1150px) {
        flex-direction: column;
        gap: 2rem;
        justify-content: start;
        align-items: start;
      }

      & > div {
        display: flex;
        flex-direction: column;
        gap: .8rem;

        & p {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
      }

      & > a {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        font-size: 0.8rem;

      }
    }
  }
</style>