
Vue.component('arena', {
    data() {
        return {
            kill: 0
        }
    },
    template: `
        <div class="arena">
            <p>Счетчик убийств: {{ kill }}</p>
            <hero></hero>
            <enemies></enemies>
        </div>
    `,
})




