// Initalise Alpine
document.addEventListener('alpine:init', () => {
    Alpine.store('darkMode', {
        init() {
            this.on = window.matchMedia('(prefers-color-scheme: dark)').matches
        },

        on: false,

        toggle() {
            this.on = !this.on
        }
    });
    let today = new Date;
    today.setHours(0,0,0,0);
    Alpine.store('currentTime', today);
});