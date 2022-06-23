<template>
    <div v-show="message">
        <div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
            <p>
                {{message}}
            </p>
        </div>   
    </div>
</template>

<script>
export default {
    props: ['message'],
}
</script>