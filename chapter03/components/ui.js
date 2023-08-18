Vue.component('top-bar', {
    template: `
    <div class="top-bar" v-bind:class="'player-' + currentPlayerIndex">
        <div class="player p0">{{players[0].name}}</div>
        <div class="turn-counter">
            <img src="svg/turn.svg" alt="" class="arrow">
            <div class="turn">回合{{turn}}</div>
        </div>
        <div class="player p1">{{players[1].name}}</div>
    </div>
    `,
    props: ['players', 'currentPlayerIndex', 'turn'],

    created() {
        // console.log(this.players);
    }
})

Vue.component('card', {
    template: `
    <div class="card" v-bind:class="'type-' + def.type">
        <div class="title">{{def.title}}</div>
        <img src="svg/card-separator.svg" alt="" class="separator">
        <div class="description">
            <div v-html="def.description"></div>
        </div>
        <div class="note" v-if="def.note">
            <div v-html="def.note"></div>
        </div>
    </div>
    `,
    props: ['def']
})