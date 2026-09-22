<template>
  <header>
    <div class="left">
      <img src="/prototype-logo.svg" class="logo" alt="Prototype Logo" />
      <p>Prototype Linux</p>
    </div>
    <nav>
      <RouterLink to="/" class="btn">Home</RouterLink>
      <RouterLink to="/about" class="btn">About</RouterLink>
      <RouterLink to="/support" class="btn">Support</RouterLink>
      <RouterLink to="/download" class="btn btn-orange">Download</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <p>&copy; {{ new Date().getFullYear() }} Lucas Gabriel (lucmsilva). Some components licensed under BSD 3-Clause.</p>
  </footer>
</template>

<style scoped>
header, section, footer {
  padding: 1em 2em;
}

header, footer {
  justify-content: space-between;
  background-color: #272c37;
}

header img {
  width: 4em;
}

header .left {
  gap: 1em;
}

header nav {
  gap: 0.5em;
  font-size: large;
}

header .left p {
  font-size: 2em;
}

header,
header * {
  display: flex;
  flex-direction: row;
  place-items: center;
}

footer {
  text-align: center;
}
</style>