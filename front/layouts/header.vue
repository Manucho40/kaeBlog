<template>
    <div>
        <header>
            <nav>
                <a
                    @click="active = !active"
                    class="burger-menu d-block d-sm-none"
                    v-if="!active">
                    <svg style="width:45px;height:50px" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"/>
                    </svg>
                </a>
                <transition name="slide-fade">
                    <div class="menu-mobile d-block d-sm-none" v-if="active">
                        <div>
                            <a @click="active = !active" class="close-menu" href="#">
                                <svg style="width:45px;height:50px" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z"/>
                                </svg>
                            </a>
                        </div>
                        <ul>
                            <nuxt-link to="/">
                                <li @click="active = !active">Accueil</li>
                            </nuxt-link>
                            <nuxt-link to="/apropos">
                                <li @click="active = !active">A propos</li>
                            </nuxt-link>
                            <nuxt-link to="/blog">
                                <li @click="active = !active">Mon blog</li>
                            </nuxt-link>
                            <a href="#contact">
                                <li @click="active = !active">Contact</li>
                            </a>
                        </ul>
                    </div>
                </transition>
                <p class="welcome">BIENVENU DANS MON PETIT COIN DU WEB.</p>
                <h1>KaeDev</h1>

                <ul class="menu-md">
                    <nuxt-link to="/">
                        <li>
                            Accueil
                            <div class="barProgress"></div>
                        </li>
                    </nuxt-link>
                    <nuxt-link to="/apropos">
                        <li>
                            A propos
                            <div class="barProgress"></div>
                        </li>
                    </nuxt-link>
                    <nuxt-link to="/blog">
                        <li>
                            Mon blog
                            <div class="barProgress"></div>
                        </li>
                    </nuxt-link>
                    <nuxt-link to="/projets">
                        <li>
                            Projets
                            <div class="barProgress"></div>
                        </li>
                    </nuxt-link>
                    <div class="reso">
                        <div>
                            <a href="https://facebook.com/emmanuel.kouassi.1004837" target="_blank">
                                <svg style="width:30px;height:30px" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
                                </svg>
                            </a>
                        </div>
                        <div>
                            <a href="#" target="_blank">
                                <svg style="width:30px;height:30px" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"/>
                                </svg>
                            </a>
                        </div>
                        <div>
                            <a href="https://github.com/Manucho40" target="_blank">
                                <svg style="width:30px;height:30px" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"/>
                                </svg>
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://www.linkedin.com/in/ange-emmanuel-kouassi-86b33316b/"
                                target="_blank">
                                <svg style="width:30px;height:30px" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </ul>
            </nav>
        </header>
        <Nuxt/>

        <div class="footer mt-5 p-3">
            <div class="mentions">
                        <div>
                            <a href="https://facebook.com/emmanuel.kouassi.1004837" target="_blank">
                                <svg style="width:40px;height:40px" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
                                </svg>
                            </a>
                        </div>
                        <div>
                            <a href="#" target="_blank">
                                <svg style="width:40px;height:40px" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"/>
                                </svg>
                            </a>
                        </div>
                        <div>
                            <a href="https://github.com/Manucho40" target="_blank">
                                <svg style="width:40px;height:40px" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"/>
                                </svg>
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://www.linkedin.com/in/ange-emmanuel-kouassi-86b33316b/"
                                target="_blank">
                                <svg style="width:40px;height:40px" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"/>
                                </svg>
                            </a>
                        </div>
                    
            </div>
            <span class="copy">© 2022 copyright : <a href="http://kae-dev.com/">kae-dev.com</a></span>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {active: false}
        },

        methods: {}

    }
</script>

<style scoped="scoped">
    header {
        box-shadow: 3px 9px 20px rgba(0, 0, 0, 0.3) inset;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }
    li {
        margin: 5px;
        padding: 0;
    }
    .barProgress {
        height: 2px;
        background: #0069d9;
        width: 0;
        transition: 500ms;
    }

    li:hover > .barProgress {
        width: 100%;
    }

    p {
        line-height: 2em;
        text-align: center;
        font-size: 22px;
        letter-spacing: 0.4em;
        font-family: 'Courier New', Courier, monospace;
    }
    h1 {
        text-align: center;
        font-size: 116px;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    }

    .menu-md {
        border-top: 1px solid;
        border-bottom: 1px solid;
        display: flex;
        justify-content: space-around;
        list-style-type: none;
        font-size: 1.5rem;
        margin-left: 10px;
        margin-right: 10px;

    }

    .menu-md a {
        color: black;
        text-decoration: none;

    }
    .reso {
        display: flex;
    }
    .reso div {
        /* margin: 5px; */
    }

    .reso a {
        margin: 5px;
    }
    .menu-md a:hover {
        color: #0069d9;
    }

    a {
        transition: 100ms ease-in-out;
    }

    @media (max-width: 728px) {
        .menu-md {
            display: none;
        }
        .welcome {
            font-size: 10px;
        }
        h1 {
            font-size: 50px;
        }
    }

    .footer {

        background: #e8e6e6;
    }

    .mentions {
        padding: 5px;
        display: flex;
        justify-content: space-around;
        color: #000;
    }
    .mentions a{
        color: black;
    }
    .mentions a:hover{
        color: #0069d9;
    }

    .copy {
        margin: 0 auto;
    }
    .burger-menu,
    .close-menu {
        display: inline-block;
        position: fixed;
        z-index: 100;
        top: 20px;
        right: 20px;
        font-size: 30px;
    }
    .burger-menu,
    .close-menu {
        display: inline-block;
        position: fixed;
        z-index: 100;
        top: 20px;
        right: 20px;
        font-size: 30px;
    }
    .menu-mobile {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 200;
        background: black;
        background: linear-gradient(60deg, rgba(93, 182, 255, 0.8) 0%,#070707 100%);
    }
    .menu-mobile ul {
        margin: 100px 0 0;
        padding: 0;
        list-style-type: none;
        text-align: center;
        font-family: 'BlowBrush';
        font-size: 36px;
        text-transform: uppercase;
        text-shadow: 0 10px 10px rgba(0,0,0,0.15);
    }
    .menu-mobile li {
        transform: rotate(-3deg) skew(-10deg);
        margin-bottom: 10px;
    }
    .menu-mobile a {
        color: #fff;
    }
    .menu-mobile a:hover {
        color: rgba(255,255,255,0.5);
    }
    .menu-mobile li.current a {
        color: #000!important;
    }
    .close-menu {
        color: #fff;
    }
    .close-menu:hover {
        color: rgba(255,255,255,0.5);
    }
    .slide-fade-enter-active {
        transition: all 0.3s ease;
    }
    .slide-fade-leave-active {
        transition: all 0.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    /* .slide-fade-leave-active below version 2.1.8 */
    .slide-fade-enter,
    .slide-fade-leave-to {
        transform: translateX(10px);
        opacity: 0;
    }
</style>