<script lang="ts">
import HeroHeader from "./sections/HeroHeader.svelte";
import WelcomeSection from "./sections/WelcomeSection.svelte";
import FAQSection from "./sections/FAQSection.svelte";
import HowMemberSection from "./sections/HowMemberSection.svelte";
import Footer from "./composents/Footer.svelte";
import Header from "./composents/Header.svelte";
import CalendarSection from "./sections/CalendarSection.svelte";
import ProductsSection from "./sections/ProductsSection.svelte";
</script>

<main>
    <Header />
    <HeroHeader />
    <WelcomeSection />
    <FAQSection />
    <HowMemberSection />
    <CalendarSection />
    <ProductsSection />
    <Footer />
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10rem;

    }
</style>
