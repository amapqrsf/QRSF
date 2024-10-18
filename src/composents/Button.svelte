<script lang="ts">
    export let link: string | null = null;
    let additionalClasses = $$restProps.class ? $$restProps.class : '';
    let buttonClass = `button ${additionalClasses}`;
</script>

{#if link}
    <a href={link} class={buttonClass}>
        <span class="button--top">
            <slot/>
        </span>
    </a>
{:else}
    <button
            class={buttonClass}
            on:click
            on:mouseover
            on:mouseenter
            on:mouseleave
            on:focus
    >
        <span class="button--top">
            <slot/>
        </span>
    </button>
{/if}

<style lang="scss">
  .button {
    --button_radius: 0.75em;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: var(--button_radius);
    background: var(--action-gradient);
    width: fit-content;

    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
      font-size:  0.75rem;
    }

    &--top {
      display: block;
      box-sizing: border-box;
      border: 3px solid var(--action-1);
      border-radius: var(--button_radius);
      padding: 0.75em 1.5em;
      background: var(--primary);
      color: var(--action-gradient);
      transform: translateY(-0.2em);
      transition: transform 0.1s ease;
      width: fit-content;
      @media (max-width: 768px) {
        width: 100%;
        }
    }

    &:hover &--top {
      transform: translateY(-0.33em);
    }

    &:active &--top {
      transform: translateY(0);
    }
  }
</style>