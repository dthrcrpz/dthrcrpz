<template>
    <section id="about" class="about relative pt-[50px] bg-dark-teal">
        <div class="cntnr">
            <h2 delay="500" class="section-title text-dark-blue">
                <img src="/images/about/icon.svg" alt="about-dthrcrpz">
                <span>about me</span>
            </h2>
        </div>
        <div class="columns-container relative w-full bg-dark-teal overflow-hidden after:duration-500 after:bg-gray-300 dark:after:bg-dark-blue after:hidden lg:after:block">
            <div class="cntnr flex justify-between flex-row flex-wrap">
                <div class="col py-[60px] left relative pr-3 flex-[100%] md:flex-[45%]">
                    <div class="egg h-[280px] w-[230px] mt-0 mx-auto mb-[30px] bg-cover bg-no-repeat duration-500"></div>
                    <div class="texts">
                        <p delay="1000" class="title text-dark-blue font-fira-code font-bold text-3xl mb-5 duration-500 text-center">Who's this guy?</p>
                        <p delay="1000" class="desc text-dark-blue text-lg mb-3 font-bold font-fira-code has-bash pl-6 duration-500 relative">
                            A <i>self-proclaimed</i> highly skilled and creative Full Stack Web Developer
                        </p>
                        <p delay="1000" class="desc text-dark-blue text-lg mb-3 font-bold font-fira-code has-bash pl-6 duration-500 relative">
                            Solid experience on developing user-centered websites using my preferred stacks.
                        </p>
                        <p delay="1000" class="desc text-dark-blue text-lg mb-3 font-bold font-fira-code has-bash pl-6 duration-500 relative">
                            Developed responsive, optimized, and SEO-friendly websites for more than 4 years, using the best practices and latest UX trends for best user experience
                        </p>
                        <p delay="1000" class="desc text-dark-blue text-lg mb-3 font-bold font-fira-code has-bash pl-6 duration-500 relative">
                            Extensive knowledge in developing web applications with multiple APIs and third-party integrations
                        </p>
                    </div>
                </div>
                <div id="stacks" class="col py-[60px] right flex-[100%] md:flex-[55%] flex items-center pl-5 pr-5 md:pr-0 md:pl-[165px] justify-center flex-row flex-wrap bg-gray-300 dark:bg-dark-blue duration-500">
                    <div class="texts flex-[100%] z-[1]">
                        <div class="code mt-0 mx-auto mb-5 max-w-[250px] duration-500">
                            <img src="/images/about/code.svg" alt="" class="w-full rounded-[100%]">
                        </div>
                        <p class="title text-dark-blue dark:text-yellow font-fira-code font-bold text-3xl mb-5 text-center duration-500">Tech Stacks</p>
                        <div class="stack mb-4 font-fira-code" v-for="(stack, key) in stacks" :key="key">
                            <p class="category has-bash pl-6 relative text-2xl duration-500 text-dark-blue before:text-dark-blue dark:text-yellow before:duration-500">{{ stack.category }}</p>
                            <ul>
                                <li delay="200" v-for="(item, key) in stack.items" :key="key" class="ml-5 duration-500 text-dark-blue dark:text-teal">{{ item }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data: () => ({
            stacks: [
                {
                    category: 'Front-end',
                    items: ['Nuxt', 'Vue', 'Javascript', 'HTML', 'SASS, LESS, Stylus', 'TailwindCSS']
                },
                {
                    category: 'Back-end',
                    items: ['Laravel', 'PHP', 'MySQL', 'Redis', 'NodeJS']
                },
                {
                    category: 'Server',
                    items: ['Ubuntu, Centos', 'NginX, Apache', 'AWS (Preferred)']
                },
                {
                    category: 'Tools',
                    items: ['Git', 'WSL', 'VSCode', 'Postman']
                }
            ],
        }),
        mounted () {
            let targets = [
                `.about .section-title`,
                `.about .columns-container .container .col.left .texts p`,
                `section.about > div.columns-container > div > div.col.left > div.egg`,
                `section.about > div.columns-container > div > div.col.right > div > div.code`,
                `section.about > div.columns-container > div > div.col.right ul li`,
                `section.about > div.columns-container > div > div.col.right > div > div > p`
            ]

            this.animateElements(targets)
        }
    }
</script>

<style>
    @keyframes shaking_weak {
        from {
            transform: rotate(-1deg);
        }
        to {
            transform: rotate(1deg);
        }
    }

    .has-bash::before {
        content: '>_';
        position: absolute;
        left: 0;
        font-family: Fira Code;
        font-size: 14px;
    }

    #stacks .has-bash::before {
        top: unset;
        bottom: -5px;
    }

    .dark #stacks .has-bash::before {
        color: #FFCF43;
    }

    .egg {
        border-radius: 50% 50% 50% 50%/60% 60% 40% 40%;
        background-image: url('/me.jpg');
        background-position: 50%;;
        -webkit-animation: shaking_weak .3s infinite alternate;
        animation: shaking_weak .3s infinite alternate;
    }

    .col.left::after {
        content: '';
        position: absolute;
        background-image: url('/images/about/right-wave.svg');
        background-size: cover;
        background-position: left;
        background-repeat: no-repeat;
        left: 100%;
        width: 100px;
        height: 100%;
        top: 0px;
    }

    .code img {
        animation: dimming_shadow .4s infinite alternate;
        box-shadow: 0 0 11px rgba(92, 224, 216, 0.8);
    }

    ul {
        column-count: 2;
        list-style-type: disclosure-closed;
    }

    .columns-container::after {
        content: '';
        width: 50%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: calc(50% + 300px);
    }
</style>