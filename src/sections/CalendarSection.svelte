<script lang="ts">
    import displayCalendar from "../../maintenance/display_calendar.json";
    import Calendar from "../composents/Calendar.svelte";

    let openAccordion: string | null = "Qu'est-ce qu'une AMAP ?";

    function handleAccordionClick(title: string) {
        openAccordion = openAccordion === title ? null : title;
    }
</script>

<section class="calendar_section">
    <div class="calendar_section__text">
        <h2>Calendrier des prochaines distributions</h2>
        <p>Chez l'AMAP Qui Ramène Sa Fraise, nous sommes ravis de vous accueillir à nos distributions hebdomadaires.
            Consultez notre calendrier pour connaître les dates et horaires des prochaines distributions et ne manquez
            pas l'occasion de récupérer vos délicieux paniers de produits frais directement auprès de nos producteurs
            locaux.</p>

    </div>
    <div class="calendar_section__infos">
        {#if displayCalendar.displayCalendar}
            <div class="calendar_section__infos__items">
                <div>
                    <h3>Prochaines dates à retenir</h3>
                    <p>Nos distributions ont lieu chaque lundi de 18h à 19h15 </p>
                </div>
                <Calendar/>
            </div>
        {/if}
        <div class={displayCalendar.displayCalendar ? "calendar_section__infos__items" : "calendar_section__infos__items  no-calendar"}>
            <div>
                <h3>Informations pratiques</h3>
                <p>Nos distributions ont lieu à la salle Jean Jaurès, située au 40 rue Jean Jaurès, entre le quartier de
                    Pont Rousseau et de Saint Paul. Pour vous y rendre, suivez les indications depuis l'église et passez
                    sous le porche à une cinquantaine de mètres à gauche. Nous vous accueillerons avec le sourire et une
                    ambiance conviviale !</p>
            </div>
            <!--<Map/>-->
            <!-- https://umap.openstreetmap.fr/fr/map/anonymous-edit/1107970:1Q2hyZ6kSaME4fvOX2dTPozC6rrW9sRvS-YU9md5RXY -->
            <iframe width="350px" height="350px" allowfullscreen
                    src="https://umap.openstreetmap.fr/fr/map/qrsf_1107970"/>
        </div>
    </div>
    <span class={displayCalendar.displayCalendar ? "calendar_section__background" : "calendar_section__background no-calendar-background"}></span>
</section>

<style lang="scss">

  .calendar_section {
    position: relative;
    max-width: 1000px;
    height: 450px;
    display: flex;
    flex-direction: column;
    gap: 8rem;
    margin: 10rem 0 30rem 0;
    padding: 0 2rem;

    color: var(--background);

    @media (max-width: 1100px) {
      gap: 3rem;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 3rem;
      margin: 5rem 0;
      height: auto;
    }

    &__text {
    }

    &__infos {
      display: flex;
      gap: 5rem;

      @media (max-width: 768px) {
        flex-direction: column;
        gap: 3rem;
      }

      &__items {
        height: 100%;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;


        @media (max-width: 768px) {
          width: 100%;
        }

        div {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;

          h3, p {
            width: 100%;
          }
        }

        iframe {
          border-radius: 10px;
          box-shadow: 0 0 2px 0 rgba(#000, .2), 0 5px 10px 0 rgba(#000, .1);
        }
      }
    }

    &__background {
      position: absolute;
      top: -48%;
      left: -50vw;
      width: 200vw;
      height: 67rem;
      transform: rotate(-8deg);
      background: var(--secondary);
      z-index: -1;
      box-shadow: inset 0px 0px 13px 10px rgba(0, 0, 0, 0.25);

      @media (min-width: 3000px) {
        top: -70%;
      }
      @media (max-width: 1800px) {
        top: -8rem;
      }


      @media (max-width: 768px) {
        top: -4rem;
        height: 110%;
      }
    }
  }

.no-calendar-background {
  @media (min-width: 768px) {
    height: 50rem;
    left: -55vw;
  }
}

  .no-calendar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    width: 100%;

    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 3rem;
      padding-bottom: 3rem;
    }
  }

</style>