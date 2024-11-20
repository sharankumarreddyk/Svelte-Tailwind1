<script>
    import { openModal } from "../store";
  import ThemeSwitcher from "./ThemeSwitcher.svelte";
    
</script>

<header class="bg-neutral flex text-base-200 flex-col relative z-20">
    <div
        class="max-w-[1400px] mx-auto w-full flex items-center justify-between  py-6"
    >
        <a href="/">
            <h1 class="font-semibold">
                Dhanush <span class="text-indigo-400">Fitness</span>
            </h1>
        </a>
        <button
            on:click={() => ($openModal = true)}
            class="md:hidden grid bg-neutral text-base-200 place-items-center"
        >
            <i class="fa-solid fa-bars"></i>
        </button>
        
            <ThemeSwitcher/>
       
        
        <nav class="hidden md:flex items-center gap-4 lg:gap-6">
            
            <a
                href="#product"
                class="duration-200 hover:text-indigo-400 cursor-pointer"
                >Product</a
            >
            <a
                href="#reviews"
                class="duration-200 hover:text-indigo-400 cursor-pointer"
                >Reviews</a
            >
            <a
                href="#faqs"
                class="duration-200 hover:text-indigo-400 cursor-pointer"
                >FAQs</a
            >
            
        </nav>
    </div>
</header>
