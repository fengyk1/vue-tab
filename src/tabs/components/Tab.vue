<template>
    <section v-show="isActive">
        <slot />
    </section>
</template>

<script>
    export default {
        props: {
            name: { required: true }
        },

        data: () => ({
            isActive: false,
        })
    };
</script>