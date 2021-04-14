<main>
    <h1>Oxova</h1>
    <p>Hello World</p>
</main>

<style lang="scss">
    :root {
        font-family: 'Montserrat', sans-serif;
        color: #eee;
        background-color: #060606;
    }

    *,
    *:before,
    *:after {
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    h1,
    p {
        margin: none;
    }

    main {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        text-align: center;

        line-height: 0.5;

        h1 {
            text-transform: uppercase;
            letter-spacing: 4px;
            color: #be0684;
        }
    }
</style>
