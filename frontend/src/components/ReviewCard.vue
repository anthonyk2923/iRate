<template>
    <div class="row text-center p-3">
        <div class=" mb-1 mb-md-0">
            <div class="card">
                <div class="card-body py-4 mt-2">
                    <h5 class="font-weight-bold">{{ currentData.name }}</h5>
                    <star-rating class="list-unstyled d-flex justify-content-center" :rating="currentData.score"
                        :increment=0.01 read-only :star-size="20" />
                    <p class="mb-2">
                        {{ currentData.body }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
    name: "ReviewCard",
    props: {
        currentData: Object,
    },
    components: {
        StarRating
    },

}
</script>

<style>
.card {
    border-radius: .7rem;
}
</style>