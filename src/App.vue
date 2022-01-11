<template>
    <div>
        <!--<div id = "nav">-->
            <!--<router-link style = "font-size:20px;" to = "/login">Login</router-link>-->
            <!--|-->
            <!--<router-link style = "font-size:20px;" to = "/home">Home</router-link>-->
        <!--</div>-->
        <router-view/>
    </div>
</template>
<script>
    export default {
        name: 'App',
    }
</script>
<style>
    :root {
        font-size: 10px;
    }
    body{
        font-size: 18px;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        font-family: Arial, sans-serif;
        display: flex;
        flex-direction: column;
        background-color: #fff;
    }

    .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        font: inherit;
        background: none;
        border: none;
        color: inherit;
        padding: 0;
        cursor: pointer;
    }

    :focus {
        outline-color: #fa0;
    }


    /* Board info bar */

    .board-info-bar {
        flex-basis: 3rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0.8rem 0;
        padding: 0 1rem;
        color: black;
    }

    .board-controls {
        display: flex;
    }

    .board-controls .btn {
        margin-right: 1rem;
    }

    .board-controls .btn:last-of-type {
        margin-right: 0;
    }

    .board-info-bar .btn {
        font-size: 1.4rem;
        font-weight: 400;
        transition: background-color 150ms;
        padding: 0 0.6rem;
        border-radius: 0.3rem;
        height: 3rem;
    }

    .board-info-bar .btn:hover {
        background-color: #006aa8;
    }

    .private-btn-icon,
    .menu-btn-icon {
        padding-right: 0.6rem;
        white-space: nowrap;
    }

    .board-title h2 {
        font-size: 1.8rem;
        font-weight: 700;
        white-space: nowrap;
    }

    /* Lists */

    .lists-container::-webkit-scrollbar {
        height: 2.4rem;
    }

    .lists-container::-webkit-scrollbar-thumb {
        background-color: #66a3c7;
        border: 0.8rem solid #0079bf;
        border-top-width: 0;
    }

    .lists-container {
        display: flex;
        align-items: start;
        padding: 0 0.8rem 0.8rem;
        overflow-x: auto;
        height: calc(100vh - 8.6rem);
    }

    .list {
        flex: 0 0 27rem;
        display: flex;
        flex-direction: column;
        background-color: #e2e4e6;
        max-height: calc(100vh - 11.8rem);
        border-radius: 0.3rem;
        margin-right: 1rem;
    }

    .list:last-of-type {
        margin-right: 0;
    }

    .list-title {
        font-size: 1.4rem;
        font-weight: 700;
        color: #333;
        padding: 0 1rem;
        width: 230px;
    }

    .list-items {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-content: start;
        padding: 0 0.6rem 0.5rem;
        overflow-y: auto;
    }

    .list-items::-webkit-scrollbar {
        width: 1.6rem;
    }

    .list-items::-webkit-scrollbar-thumb {
        background-color: #c4c9cc;
        border-right: 0.6rem solid #e2e4e6;
    }

    .list-items li {
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 1.3;
        background-color: #fff;
        padding: 0.65rem 0.6rem;
        color: #4d4d4d;
        border-bottom: 0.1rem solid #ccc;
        border-radius: 0.3rem;
        margin-bottom: 0.6rem;
        word-wrap: break-word;
        cursor: pointer;
    }

    .list-items li:last-of-type {
        margin-bottom: 0;
    }

    .list-items li:hover {
        background-color: #eee;
    }

    .add-card-btn {
        display: block;
        font-size: 1.4rem;
        font-weight: 400;
        color: #838c91;
        padding: 1rem;
        text-align: left;
        cursor: pointer;
    }

    .add-card-btn:hover {
        background-color: #cdd2d4;
        color: #4d4d4d;
        text-decoration: underline;
    }

    .add-list-btn {
        flex: 0 0 27rem;
        display: block;
        font-size: 1.4rem;
        font-weight: 400;
        background-color: #006aa7;
        color: #a5cae0;
        padding: 1rem;
        border-radius: 0.3rem;
        cursor: pointer;
        transition: background-color 150ms;
        text-align: left;
    }

    .add-list-btn:hover {
        background-color: #005485;
    }

    .add-card-btn::after,
    .add-list-btn::after {
        content: '...';
    }

    /*
  
    The following rule will only run if your browser supports CSS grid.
  
    Remove or comment-out the code block below to see how the browser will fall-back to flexbox styling.
  
    */

    @supports (display: grid) {
        body {
            display: grid;
            grid-template-rows: 4rem 3rem auto;
            grid-row-gap: 0.8rem;
        }


        .board-controls {
            display: grid;
            grid-auto-flow: column;
            grid-column-gap: 1rem;
        }

        .lists-container {
            display: grid;
            grid-auto-columns: 27rem;
            grid-auto-flow: column;
            grid-column-gap: 1rem;
        }

        .list {
            display: grid;
            grid-template-rows: auto minmax(auto, 1fr) auto;
        }

        .list-items {
            display: grid;
            grid-row-gap: 0.6rem;
        }


    }
</style>