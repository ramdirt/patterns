class Enemy {
    constructor(id, hp) {
        this.id = id;
        this.hp = hp;
    }
}


Vue.component('enemies', {
    data() {
        return {
            enemies: []
        }
    },
    template: `
        <div class="enemies">
            <div v-for="item of enemies">
                <enemy :id="item.id" :hp="item.hp"></enemy>
            </div>
        </div>
    `,
    methods: {
        generateEnemies(num) {
            for(let i = num; i <= 4; i++) {
                const enemy = new Enemy(i, 100)
                this.enemies.push(enemy)
            }
        },
    },
    mounted() {
        this.generateEnemies(3);
    }
})

Vue.component('enemy', {
    props: {
        id: {
            type: Number,
        },
        hp: {
            type: Number,
        }
    },
    data() {
        return {
            enemyHealth: this.hp,
            enemyDamage: this.$root.heroDamage,
            enemyWeapon: 'Топор'
        }
    },
    template: `
        <div class="enemy" @click="hit" v-show="enemyHealth >= 0">
            <div class="enemy_number">{{ id }}</div>
            <div class="enemy_health">{{ enemyHealth }}</div>
        </div>
    `,
    methods: {
        hit() {
            if (this.id == this.id) {
                this.enemyHealth -= this.enemyDamage
            }
        }
    }
})