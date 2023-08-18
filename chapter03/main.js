new Vue({
    name: 'game',
    el: '#app',

    data: state,

    template: `
        <div id="#app">
        <top-bar v-bind:turn="turn" v-bind:currnet-player-index="currentPlayerIndex" 
        v-bind:players="players" />

        <card v-bind:def="testCard" v-on:click.native="handlePlay"/>
        
        </div>
        `,

    computed: {
        testCard() {
            return cards.pikemen
        }
    },
    methods: {
        handlePlay() {
            console.log('你的一张卡');
            alert('你的屌卡')
        }
    }
    // mounted() {
    //     console.log(this.$data === state);
    // }

})

window.addEventListener('resize', () => {
    state.worldRatio = getWorldRatio()
})