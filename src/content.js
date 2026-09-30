import screenshot1 from "./assets/screenshots/clean-desktop.png"
import screenshot2 from "./assets/screenshots/applications-menu.png"
import screenshot3 from "./assets/screenshots/file-manager.png"
import screenshot4 from "./assets/screenshots/settings.png"
import screenshot5 from "./assets/screenshots/customization.png"
import screenshot6 from "./assets/screenshots/package-installer.png"
import screenshot7 from "./assets/screenshots/under-the-hood.png"

export const GITHUB_OWNER = "Prototype-Linux"
export const GITHUB_REPO = "distro"
export const WORKFLOW_FILE = "build.yml"
export const orgUrl = "https://github.com/" + GITHUB_OWNER
export const repoUrl = orgUrl + "/" + GITHUB_REPO
export const releasesPageUrl = repoUrl + "/releases"
export const actionsPageUrl = repoUrl + "/actions"

export const content = {
  nav: [
    { label: "About", href: "#about" },
    { label: "Screenshots", href: "#screenshots" },
    { label: "Build", href: "#build" },
    { label: "Downloads", href: "#downloads" },
    { label: "Source", href: orgUrl }
  ],
  hero: {
    eyebrow: "Debian 13 based · Made for Windows switchers",
    title: ["Your workflow,", "minus the Windows."],
    text: "Prototype Linux keeps the habits you already have: a bottom panel, a searchable menu, a familiar file manager and double-click installers. All of it on a stable Debian base with Xfce, which keeps it lighter than Windows, and with its own look.",
    primary: { label: "Download", href: "#downloads" },
    secondary: { label: "Learn more", href: "#about" }
  },
  about: {
    title: ["Familiar, ", "not copied"],
    text: "Everything is where your hands expect it, but the design is ours. No clone of any interface, just the same mental model.",
    features: [
      { title: "Bottom panel", text: "Menu on the left, running windows in the middle and the system tray with clock on the right." },
      { title: "Searchable menu", text: "Open the applications menu and type. Favorites, categories and session controls are one click away." },
      { title: "Lighter than Windows", text: "Built on Xfce and designed from the start to use fewer resources, which also helps on older machines." },
      { title: "Install .deb by double-click", text: "The package installer shows what a package is and lets you install, reinstall or remove it." },
      { title: "Chrome included", text: "Google Chrome comes installed, so the browser you already use is ready on first boot." },
      { title: "Nord look", text: "Graphite Nord theme, Tela icons and Inter font out of the box, and all of it is configurable." }
    ],

    mapTitle: ["Where did it ", "go?"],
    mapText: "A quick translation of what you used on Windows.",
    map: [
      ["Start menu", "Applications menu", "Click the panel icon and start typing"],
      ["Settings", "Settings", "Personal, Hardware and System groups"],
      ["Personalization", "Appearance", "Themes, icons and fonts in tabs"],
      ["Clipboard history", "Clipboard Manager", "Included in the applications menu"],
      ["Installer (.exe)", "Package Installer (.deb)", "Open the file and press install"]
    ]
  },
  screenshots: {
    title: ["See it ", "in action"],
    text: "A quick tour of Prototype Linux Alpha.",
    items: [
      { name: "Clean desktop", description: "A calm Nord desktop with Home, File System and Trash icons, and a slim panel with clock and notifications.", src: screenshot1 },
      { name: "Applications menu", description: "Search as you type, browse by category and reach logout, lock and shutdown from the same place.", src: screenshot2 },
      { name: "File manager", description: "A Places sidebar, a clickable address bar and the usual folders ready to use.", src: screenshot3 },
      { name: "Settings", description: "Every option grouped by Personal, Hardware, System and Other, with a search box on top.", src: screenshot4 },
      { name: "Customization", description: "Change the style, icon theme and fonts. Graphite Nord, Tela icons and Inter are the defaults.", src: screenshot5 },
      { name: "Package installer", description: "Open a .deb file and see its description, details and files before installing, reinstalling or removing it.", src: screenshot6 },
      { name: "Under the hood", description: "Debian 13 base with Linux 6.12 and Xfce 4.20, at around 770 MiB of memory on boot.", src: screenshot7 }
    ]
  },
  build: {
    title: ["Build it ", "yourself"],
    text: "Prototype Linux is built in public. Run these commands in a Debian 13 (trixie) environment, the current stable Debian release, and live-build does the rest.",
    steps: [
      { title: "Install the tools", code: "sudo apt install live-build schroot -y" },
      { title: "Get the source", code: "git clone --recursive https://github.com/Prototype-Linux/distro prototype" },
      { title: "Configure", code: "cd prototype\nlb-config/lb_config_prototype.sh" },
      { title: "Build the image", code: "lb build" }
    ],
    sourceText: "Curious how it is put together? Everything is open on GitHub.",
    sourceLabel: "Browse the source",
    sourceHref: orgUrl
  },
  downloads: {
    title: ["Get ", "Prototype"],
    text: "Choose the stable release or try the latest automated build."
  },
  community: {
    title: "Listed on AlternativeTo",
    text: "See how Prototype Linux compares with other operating systems.",
    label: "View on AlternativeTo",
    href: "https://alternativeto.net/software/prototype-linux/about/?utm_source=badge&utm_medium=referral"
  },
  footer: {
    links: [
      { label: "GitHub", href: orgUrl },
      { label: "Releases", href: releasesPageUrl },
      { label: "Issues", href: repoUrl + "/issues" }
    ]
  }
}

export function formatDate(iso) {
  return new Date(iso).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })
}
