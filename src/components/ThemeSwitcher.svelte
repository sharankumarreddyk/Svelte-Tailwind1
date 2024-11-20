<script>
  import { onMount, onDestroy } from 'svelte';
  import { browser } from '$app/environment'; // Import browser check
  
  let selectedTheme = 'light'; // Default theme
  let isDropdownOpen = false; // Track whether the dropdown is open
  let hasSelectedTheme = false; // Track if a theme has been selected
  let showXButton = false; // Track visibility of the X button

  // Function to change the theme dynamically
  function changeTheme(theme) {
    if (browser) { // Only run this code on the client-side
      selectedTheme = theme;
      document.documentElement.setAttribute('data-theme', theme); // Sets the theme on the HTML root element
      localStorage.setItem('theme', theme); // Save the selected theme to localStorage
      hasSelectedTheme = true; // Mark that a theme has been selected
      showXButton = true; // Show the X button again after selecting a theme
      closeDropdown(); // Close the dropdown after selecting a theme
    }
  }

  // Toggle dropdown visibility
  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }

  // Close dropdown
  function closeDropdown() {
    isDropdownOpen = false;
  }

  // Hide X button when pressed
  function hideXButton() {
    showXButton = false;
    hasSelectedTheme = false; // Reset theme selection status
    localStorage.removeItem('theme'); // Optionally, remove theme from localStorage if user clears selection
    selectedTheme = 'light'; // Reset theme to default
    document.documentElement.setAttribute('data-theme', 'light'); // Set default theme on root element
  }

  // Close dropdown when clicked outside
  function handleClickOutside(event) {
    const dropdown = document.getElementById('dropdown-menu');
    const button = document.getElementById('menu-button');
    if (dropdown && !dropdown.contains(event.target) && button && !button.contains(event.target)) {
      closeDropdown();
    }
  }

  // Set the initial theme based on localStorage
  onMount(() => {
    if (browser) { // Only run this code on the client-side
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        selectedTheme = storedTheme;
        document.documentElement.setAttribute('data-theme', storedTheme);
        hasSelectedTheme = true;
      }

      document.addEventListener('click', handleClickOutside);
    }
  });

  // Clean up the event listener when the component is destroyed
  onDestroy(() => {
    if (browser) { // Only run this code on the client-side
      document.removeEventListener('click', handleClickOutside);
    }
  });
</script>

<!-- Theme switcher button with dropdown -->
<div class="relative inline-block text-left">
  <div class="flex items-center justify-center space-x-1 text-base-200 rounded-lg border border-base-200 shadow-sm ">
    <button
      type="button"
      class="flex px-2 py-2 md:text-sm text-xs font-medium max-w-24 sm:max-w-40 text-base-200 bg-neutral focus:outline-none focus:ring-0 theme-btn"
      id="menu-button"
      aria-expanded={isDropdownOpen ? 'true' : 'false'}
      aria-haspopup="true"
      on:click={toggleDropdown}
    >
      {selectedTheme === 'light' ? 'Light Theme' : 
       selectedTheme === 'dark' ? 'Dark Theme' : 
       selectedTheme === 'dim' ? 'Dim Theme' : 
       selectedTheme === 'gradient' ? 'Gradient Theme' : 'Select Theme'}
      <!-- SVG Icon -->
      <svg
        class="-mr-1 ml-2 h-5 w-5 text-base-200"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M5.23 7.23a1 1 0 011.41 0L10 10.59l3.36-3.36a1 1 0 111.41 1.41l-4 4a1 1 0 01-1.41 0l-4-4a1 1 0 010-1.41z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </div>

  <!-- Dropdown Menu -->
  <div
    id="dropdown-menu"
    class={`absolute right-0 mt-2 w-48 bg-neutral border border-base-200 rounded-md shadow-lg ${isDropdownOpen ? 'block' : 'hidden'}`}
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="menu-button"
  >
    <div class="py-1" role="none">
      <button
        on:click={() => changeTheme('light')}
        class="block w-full px-4 py-2 text-sm  bg-neutral text-base-200 focus:outline-none focus:ring-0"
        role="menuitem"
      >
        Light Theme
      </button>
      <button
        on:click={() => changeTheme('dark')}
        class="block w-full px-4 py-2 text-sm bg-neutral text-base-200 focus:outline-none focus:ring-0"
        role="menuitem"
      >
        Dark Theme
      </button>
      <button
        on:click={() => changeTheme('dim')}
        class="block w-full px-4 py-2 text-sm bg-neutral text-base-200 focus:outline-none focus:ring-0"
        role="menuitem"
      >
        Dim Theme
      </button>
      <button
        on:click={() => changeTheme('gradient')}
        class="block w-full px-4 py-2 text-sm bg-neutral text-base-200 focus:outline-none focus:ring-0"
        role="menuitem"
      >
       Gradient Theme
      </button>
    </div>
  </div>
</div>
