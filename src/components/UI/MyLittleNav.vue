<template>
    <nav class='nav'>
        <div class="wrapper">
            <h3 class='name'>Vue</h3>
            <div class="nav-btn">
                <my-button @click="$router.push('/posts')">Posts</my-button>
                <my-button style="margin-left:5px;" @click="$router.push('/')">Home</my-button>
                <my-button style="margin-left:5px;" @click="$router.push('/store')">Store</my-button>
                <my-button style="margin-left:5px;" @click="$router.push('/composition')">Composition</my-button>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'my-little-nav'
    }
</script>

<style scoped>
    .wrapper {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
    }

    .nav {
        background-color: teal;
        padding: 10px;
        box-shadow: 2px 2px 4px teal;
    }

    .name {
        padding:0;
        margin: 0;
    }

</style>