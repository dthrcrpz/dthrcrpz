<template>
    <section class="about" id="about">
        <div class="container">
            <h2 delay="500" class="section-title">
                <img src="/images/about/icon.svg" alt="about-dthrcrpz">
                <span>about me</span>
            </h2>
        </div>
        <div class="columns-container">
            <div class="container">
                <div class="col left">
                    <div class="egg"></div>
                    <div class="texts">
                        <p delay="1000" class="title">Who's this guy?</p>
                        <p delay="1000" class="desc has-bash">
                            A <i>self-proclaimed</i> highly skilled and creative Full Stack Web Developer
                        </p>
                        <p delay="1000" class="desc has-bash">
                            Solid experience on developing user-centered websites using my preferred stacks.
                        </p>
                        <p delay="1000" class="desc has-bash">
                            Developed responsive, optimized, and SEO-friendly websites for more than 4 years, using the best practices and latest UX trends for best user experience
                        </p>
                        <p delay="1000" class="desc has-bash">
                            Extensive knowledge in developing web applications with multiple APIs and third-party integrations
                        </p>
                    </div>
                    <div class="triangle">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
                        </svg>
                    </div>
                </div>
                <div class="col right" id="stacks">
                    <div class="texts">
                        <div class="code">
                            <img src="/images/about/code.svg" alt="">
                        </div>
                        <p class="title">Tech Stacks</p>
                        <div class="stack" v-for="(stack, key) in stacks" :key="key">
                            <p class="category has-bash">{{ stack.category }}</p>
                            <ul>
                                <li delay="200" v-for="(item, key) in stack.items" :key="key">{{ item }}</li>
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
                    items: ['Nuxt', 'Vue', 'Javascript', 'HTML', 'SASS, LESS, Stylus']
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