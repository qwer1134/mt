<template>
 <li @click="delet">{{val}}</li>
</template>

<script>

export default {
    props:['val','index'],
    data: function() {
        return {
        }
    },
    methods:{
        delet: function() {
            this.$emit('delete_',this.index)
        }
    }
}
</script>


<style scoped>

</style>
