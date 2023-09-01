<template>
    <div @click="$emit('BtnClick', allRatings, data._id)" href="#" class="list-group-item list-group-item-action">
        <div class=" d-flex w-100 justify-content-between">
            <h5 id='nameOfTeacher' class="mb-1">{{ data.name }}</h5>
            <!-- <small class="text-muted">{{ this.averageRating }}/5</small> -->
            <p>{{ totalRatings }} Review(s)</p>

        </div>
        <star-rating class="mb-1" :rating="averageRating" :increment=0.01 read-only :star-size="15" />

    </div>
</template>
<script>

import StarRating from 'vue-star-rating'


export default {
    props: {
        data: Object,
    },
    components: {
        StarRating
    },
    data() {
        return {
            totalRatings: null,
            averageRating: null,
            allRatings: null,
        }
    },
    methods: {
        async getData() {
            const data = await fetch(`/api/ratings/${this.data._id}`, { method: 'POST' })
            const res = await data.json()
            this.totalRatings = res.length
            this.allRatings = res
            let total = 0
            for (let item in res) {
                total += res[item].score
            }
            let average = total / await this.totalRatings
            this.averageRating = await Math.round(average * 10) / 10;


        },

    },
    mounted() {
        this.getData()


    }
}
</script>
