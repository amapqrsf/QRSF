<script lang="ts">
    export let Title: string;
    export let Content: string | HTMLElement;
    export let isOpen: boolean;
    export let onHeaderClick: (title: string) => void;

    function handleHeaderClick() {
        onHeaderClick(Title);
    }
</script>

<div class="accordion">
    <div class="accordion__header" on:click={handleHeaderClick}>
        <h3>{Title}</h3>
    </div>
    <div class:accordion__text__container={true} class:accordion__text__container--open={isOpen}>
        <div class="accordion__text__content">
            {Content}
        </div>
    </div>
</div>

<style lang="scss">
  .accordion {
    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1.25rem;

      &:hover {
        cursor: pointer;
      }
    }

    &__text__container {
      overflow: hidden;
      max-height: 0;
      transition: all 0.25s cubic-bezier(0.5, 0, 0.1, 1);
      padding:  0 1.25rem;

      &--open {
        max-height: 75rem;
        padding: 1.25rem;
      }
    }
  }

</style>