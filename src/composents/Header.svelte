<script>
    import User from "../assets/icons/User.svelte";

</script>

<header>
    <a href="https://camap.amap44.org/group/5385">
        <User/>
        mon compte
    </a>
</header>

<style lang="scss">
  header {
    position: fixed;
    top: 2rem;
    right: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    background: var(--primary);
    border-radius: 900px;
    padding: 0.5rem 1rem;
    transition: all 0.3s ease;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
      top: 1rem;
      right: 1rem;
    }

    &:hover {
      background: var(--action-1);
    }

    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
        align-items: center;
      text-align: center;
    }
  }

</style>