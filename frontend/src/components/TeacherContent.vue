<template>
    <ReviewCard v-for="i in currentData" :key="i" :currentData="i" />
    <h1 class='display-4' v-show="currentData.length == 0" align="center"><i>*Crickets*</i><br> No reviews found for this
        teacher;
        be the first!</h1>
</template>

<script>
import ReviewCard from './ReviewCard.vue';
export default {
    name: "TeacherContent",
    components: {
        ReviewCard,
    },
    props: {
        currentData: Object,
    },

}
</script>