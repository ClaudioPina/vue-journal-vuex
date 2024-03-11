<template>
    <div class="entry-container mb-2 pointer p-2" @click="$router.push({ name: 'entry', params: { id: 10}})">

        <!-- Titulo -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">08</span>
            <span class="mx-1 fs-5">Marzo</span>
            <span class="mx-2 fw-light">2024</span>
        </div>
        <div class="entry-description">
            Nisi incididunt fugiat nisi proident ipsum. Anim voluptate non quis commodo. Amet exercitation culpa Lorem culpa exercitation amet anim ea in. Labore veniam culpa sint sit non consequat esse ut id nostrud eiusmod deserunt. Cupidatat non eiusmod mollit nostrud do consequat enim ipsum. Dolore veniam minim dolore in ex non sunt tempor est aliqua.
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover {
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }
    .entry-description{
        font-size: 12px;
    }
}


</style>