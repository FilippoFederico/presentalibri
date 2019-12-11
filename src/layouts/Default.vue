<template>
    <div>
        <Nav class="nav"/>

        <slot/>
        <Footer />
    </div>
</template>

<static-query>
    query {
    metadata {
    siteName
    }
    }
</static-query>
<script>
    import Nav from '../components/Nav'
    import Footer from '../components/Footer'

    export default {
        components: {
            Nav,
            Footer
        }
    }
</script>
<style>
.nav{
    /* position: fixed */
}
</style>