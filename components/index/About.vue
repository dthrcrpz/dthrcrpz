<template>
    <section class="about">
        <div class="container">
            <h2 class="section-title">about me</h2>
        </div>
    </section>
</template>

<style scoped lang="sass">
    .about
        height: 400px
        position: relative
        padding-top: 50px
        background-color: darken($teal, 20)
        .container
            .section-title
                color: $blue
                &::before, &::after
                    background-color: $blue
                    
</style>