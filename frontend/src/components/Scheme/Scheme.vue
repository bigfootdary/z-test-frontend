<template src="./index.html"></template>

<script>
export default {
    name: "scheme",
    data() {
        return {
            actives: {
                active1: false,
                active2: false,
                active3: false,
                active4: false,
                active5: false,
                active6: false
            }
        };
    },
    methods: {
        mouseOver: function(active) {
            console.log(active);
            this.actives[active] = true;
            console.log("yes");
        },
        mouseLeave: function(active) {
            this.actives[active] = false;
            console.log("no");
        }
    }
};
</script>

<style lang="scss" src="./index.scss"></style>
